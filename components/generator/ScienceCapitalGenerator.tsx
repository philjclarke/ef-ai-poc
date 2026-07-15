"use client";

import { useEffect, useRef, useState } from "react";
import { SquiggleIcon } from "@/components/icons";
import type { Resource } from "@/lib/resources";
import type { GenerateRequest, TeachingResource } from "@/lib/types";
import { GeneratedResource } from "./GeneratedResource";
import { GeneratorForm } from "./GeneratorForm";

const loadingMessages = [
  "Finding a local news story…",
  "Searching for local scientists and role models…",
  "Matching local jobs to your class…",
  "Writing conversation starters…",
];

function LoadingState() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setMessageIndex((i) => Math.min(i + 1, loadingMessages.length - 1)),
      800
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ef-bordered flex flex-col items-center gap-4 bg-white p-12 text-center">
      <span
        aria-hidden
        className="size-9 animate-spin rounded-full border-4 border-ef-mist border-t-ef-indigo"
      />
      <p role="status" className="text-[1.0625rem] font-medium">
        {loadingMessages[messageIndex]}
      </p>
    </div>
  );
}

export function ScienceCapitalGenerator({ resource }: { resource: Resource }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<TeachingResource | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  async function handleGenerate(request: GenerateRequest) {
    setStatus("loading");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setResult((await response.json()) as TeachingResource);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    if (status === "done") {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  return (
    <div className="grid gap-6">
      <div className="ef-bordered bg-white p-6 sm:p-10">
        <SquiggleIcon className="mb-4 w-9 fill-ef-indigo" />
        <p className="font-heading text-sm font-bold uppercase tracking-wide">
          New · AI-powered
        </p>
        <h3 className="mt-2 text-2xl">Make this resource local to your class</h3>
        <p className="mt-2 max-w-2xl text-[1.0625rem]">
          Tell us a little about your students and we&apos;ll generate a bespoke
          Science Capital teaching resource — a local news story, a local role model,
          two local jobs and five conversation starters.
        </p>
        <div className="mt-6">
          <GeneratorForm
            resource={resource}
            isGenerating={status === "loading"}
            onGenerate={handleGenerate}
          />
        </div>
      </div>

      {status === "loading" && <LoadingState />}

      {status === "error" && (
        <p className="ef-bordered bg-ef-coral/15 p-5 text-[1.0625rem]">
          Something went wrong generating your resource. Please try again.
        </p>
      )}

      {status === "done" && result && (
        <div ref={resultRef} className="scroll-mt-8">
          <GeneratedResource resource={result} />
        </div>
      )}
    </div>
  );
}
