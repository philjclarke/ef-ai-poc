"use client";

import { useEffect, useRef, useState } from "react";
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
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-10 text-center shadow-sm">
      <span
        aria-hidden
        className="size-8 animate-spin rounded-full border-4 border-ef-mist border-t-ef-coral-deep"
      />
      <p role="status" className="text-sm font-medium text-ef-indigo/70">
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
      <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <h3 className="font-heading text-lg font-semibold">
          Make this resource local to your class
        </h3>
        <p className="mt-1 text-sm text-ef-indigo/70">
          Tell us a little about your students and we&apos;ll generate a bespoke
          Science Capital teaching resource — a local news story, a local role model,
          two local jobs and five conversation starters.
        </p>
        <div className="mt-4">
          <GeneratorForm
            resource={resource}
            isGenerating={status === "loading"}
            onGenerate={handleGenerate}
          />
        </div>
      </div>

      {status === "loading" && <LoadingState />}

      {status === "error" && (
        <p className="rounded-2xl bg-ef-coral/20 p-4 text-sm">
          Something went wrong generating your resource. Please try again.
        </p>
      )}

      {status === "done" && result && (
        <div ref={resultRef} className="scroll-mt-24">
          <GeneratedResource resource={result} />
        </div>
      )}
    </div>
  );
}
