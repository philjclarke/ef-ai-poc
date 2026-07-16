"use client";

import { useEffect, useRef, useState } from "react";
import { SparklesIcon } from "@/components/icons";
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

// Owns the About (40%) / generator (60%) grid so the generated output can
// break out to full page width beneath it.
export function ScienceCapitalGenerator({
  resource,
  aboutColumn,
}: {
  resource: Resource;
  aboutColumn: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<TeachingResource | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

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
    if (status === "loading" || status === "done") {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  return (
    <>
      <section className="ef-section grid gap-8 pb-16 pt-12 lg:grid-cols-5">
        <div className="lg:col-span-3">{aboutColumn}</div>
        <div id="science-capital-generator" className="scroll-mt-8 lg:col-span-2">
          <div className="ai-gradient-border">
            <div className="rounded-[15px] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-1.5">
                <SparklesIcon className="w-7" />
                <p className="font-heading text-sm font-bold uppercase tracking-wide">
                  AI-powered
                </p>
              </div>
              <h3 className="mt-1 text-2xl">Supercharge this resource</h3>
              <p className="mt-1.5 text-[1.0625rem]">
                Tell us a little about your students and we&apos;ll generate a
                bespoke Science Capital teaching resource.
              </p>
              <div className="mt-5">
                <GeneratorForm
                  resource={resource}
                  isGenerating={status === "loading"}
                  onGenerate={handleGenerate}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {status !== "idle" && (
        <section ref={outputRef} className="ef-section scroll-mt-8 pb-24">
          {status === "loading" && <LoadingState />}
          {status === "error" && (
            <p className="ef-bordered bg-ef-coral/15 p-5 text-[1.0625rem]">
              Something went wrong generating your resource. Please try again.
            </p>
          )}
          {status === "done" && result && <GeneratedResource resource={result} />}
        </section>
      )}
    </>
  );
}
