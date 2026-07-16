"use client";

import { useEffect, useRef, useState } from "react";
import {
  DocumentIcon,
  EditIcon,
  FamilyIcon,
  InterestIcon,
  LocationIcon,
  PupilIcon,
  SparklesIcon,
} from "@/components/icons";
import { mockSchoolProfile } from "@/lib/resources";
import type { Resource } from "@/lib/resources";
import type { GenerateRequest, TeachingResource } from "@/lib/types";
import { GeneratedResource } from "./GeneratedResource";
import { GeneratorForm } from "./GeneratorForm";

const buildSteps = [
  "Analysing topical news",
  "Locating notable figures",
  "Browsing available careers",
  "Drafting conversation starters",
];

// How long the progress bars take to finish. handleGenerate waits at least this
// long before showing output, so the animation never gets cut off.
const BUILD_MS = 2300;

function Eyebrow() {
  return (
    <div className="flex items-center gap-1.5">
      <SparklesIcon className="w-7" />
      <p className="font-heading text-sm font-bold uppercase tracking-wide">
        AI-powered
      </p>
    </div>
  );
}

function BuildingState() {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFilled(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <Eyebrow />
      <h3 className="mt-1 text-2xl">Building your resource…</h3>
      <div className="mt-6 space-y-5">
        {buildSteps.map((label, index) => (
          <div key={label}>
            <p className="text-[1.0625rem] font-medium">{label}</p>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ef-mist">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#ff5fa2,#b14be8,#6aa8e0)] transition-[width] ease-out"
                style={{
                  width: filled ? "100%" : "0%",
                  transitionDuration: "900ms",
                  transitionDelay: `${index * 0.45}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetaItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      {icon}
      {children}
    </span>
  );
}

export function ScienceCapitalGenerator({
  resource,
  aboutColumn,
}: {
  resource: Resource;
  aboutColumn: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<TeachingResource | null>(null);
  const [openPanel, setOpenPanel] = useState<"about" | "edit" | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Lifted form state so the inputs persist between the input panel and the
  // "Edit inputs" accordion after generating.
  const [yearGroups, setYearGroups] = useState<string[]>([resource.yearGroups[0]]);
  const [location, setLocation] = useState(mockSchoolProfile.location);
  const [interests, setInterests] = useState<string[]>([]);
  const [occupations, setOccupations] = useState<string[]>([]);

  function toggleYearGroup(yearGroup: string) {
    setYearGroups((current) =>
      current.includes(yearGroup)
        ? current.filter((yg) => yg !== yearGroup)
        : [...current, yearGroup]
    );
  }

  async function handleGenerate() {
    const request: GenerateRequest = {
      webAccountId: mockSchoolProfile.webAccountId,
      resourceId: resource.slug,
      topic: resource.defaultTopic,
      yearGroup: yearGroups.join(", "),
      location,
      interests,
      occupations,
    };
    setStatus("loading");
    setOpenPanel(null);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    try {
      const minBuild = new Promise((resolve) => setTimeout(resolve, BUILD_MS));
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const data = (await response.json()) as TeachingResource;
      await minBuild;
      setResult(data);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const formProps = {
    resource,
    isGenerating: status === "loading",
    yearGroups,
    onToggleYearGroup: toggleYearGroup,
    location,
    onLocationChange: setLocation,
    interests,
    onInterestsChange: setInterests,
    occupations,
    onOccupationsChange: setOccupations,
    onSubmit: handleGenerate,
  };

  const inputIntro = (
    <>
      <Eyebrow />
      <h3 className="mt-1 text-2xl">Supercharge this resource</h3>
      <p className="mt-1.5 text-[1.0625rem]">
        Tell us a little about your students and we&apos;ll generate a bespoke
        Science Capital teaching resource.
      </p>
    </>
  );

  const inputPanel = (
    <div className="ai-gradient-border">
      <div className="rounded-[15px] bg-white p-6 sm:p-8">
        {inputIntro}
        <div className="mt-5">
          <GeneratorForm {...formProps} />
        </div>
      </div>
    </div>
  );

  // Idle / building: About (or the progress bars) on the left, input panel right.
  if (status === "idle" || status === "loading") {
    return (
      <section
        ref={sectionRef}
        className="ef-section grid scroll-mt-8 gap-8 pb-16 pt-12 lg:grid-cols-5"
      >
        <div className="lg:col-span-3">
          {status === "loading" ? <BuildingState /> : aboutColumn}
        </div>
        <div className="lg:col-span-2">{inputPanel}</div>
      </section>
    );
  }

  // Generated: header + toggles sit above a full-width gradient panel.
  return (
    <section ref={sectionRef} className="ef-section scroll-mt-8 pb-24 pt-12">
      {status === "error" && (
        <div className="ai-gradient-border">
          <div className="rounded-[15px] bg-white p-6 sm:p-8">
            <p className="text-[1.0625rem]">
              Something went wrong generating your resource. Please try again.
            </p>
          </div>
        </div>
      )}

      {status === "done" && result && (
        <div className="ai-gradient-border">
          <div className="rounded-[15px] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <SparklesIcon className="w-6" />
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-[#3f9999]">
                    Your Science Capital teaching resource
                  </p>
                </div>
                <h2 className="mt-1 text-3xl sm:text-4xl">{result.meta.topic}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[1.0625rem]">
                  <MetaItem icon={<PupilIcon className="w-4 fill-ef-indigo" />}>
                    {result.meta.yearGroup}
                  </MetaItem>
                  <MetaItem icon={<LocationIcon className="w-4 fill-ef-indigo" />}>
                    {result.meta.location}
                  </MetaItem>
                  {result.meta.interests.map((interest) => (
                    <MetaItem
                      key={interest}
                      icon={<InterestIcon className="w-4 fill-ef-indigo" />}
                    >
                      {interest}
                    </MetaItem>
                  ))}
                  {result.meta.occupations.map((occupation) => (
                    <MetaItem
                      key={occupation}
                      icon={<FamilyIcon className="w-4 fill-ef-indigo" />}
                    >
                      {occupation}
                    </MetaItem>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-expanded={openPanel === "about"}
                  onClick={() => setOpenPanel((p) => (p === "about" ? null : "about"))}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    openPanel === "about"
                      ? "bg-ef-indigo text-white"
                      : "bg-ef-teal text-ef-indigo hover:brightness-95"
                  }`}
                >
                  <DocumentIcon className="w-4 fill-current" />
                  About this resource
                </button>
                <button
                  type="button"
                  aria-label="Edit inputs"
                  aria-expanded={openPanel === "edit"}
                  onClick={() => setOpenPanel((p) => (p === "edit" ? null : "edit"))}
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ef-indigo transition ${
                    openPanel === "edit" ? "bg-ef-indigo" : "bg-white hover:bg-ef-mist"
                  }`}
                >
                  <EditIcon
                    className={`w-5 ${openPanel === "edit" ? "fill-white" : "fill-ef-indigo"}`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-8 lg:flex lg:items-start lg:gap-6">
                <div
                  className={`lg:min-w-0 lg:flex-1 ${
                    openPanel ? "hidden lg:block" : "block"
                  }`}
                >
                  <GeneratedResource resource={result} />
                </div>
                <div
                  className={`lg:shrink-0 lg:overflow-hidden lg:transition-[width] lg:duration-300 lg:ease-out ${
                    openPanel ? "block" : "hidden lg:block"
                  } ${
                    openPanel
                      ? "lg:w-2/5 lg:border-l lg:border-ef-border lg:pl-6"
                      : "lg:w-0"
                  }`}
                >
                  {openPanel === "about" && aboutColumn}
                  {openPanel === "edit" && (
                    <div>
                      {inputIntro}
                      <div className="mt-5">
                        <GeneratorForm {...formProps} submitLabel="Regenerate" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      )}
    </section>
  );
}
