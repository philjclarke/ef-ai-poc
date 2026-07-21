"use client";

import { useState } from "react";
import type { LocalJob, TeachingResource } from "@/lib/types";

function DimensionPills({ dimensions }: { dimensions: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {dimensions.map((dimension) => (
        <li key={dimension} className="ef-pill !bg-ef-teal/60 !text-sm">
          {dimension}
        </li>
      ))}
    </ul>
  );
}

function ScienceCapitalPanel({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-ef-yellow/20 p-4 sm:p-5">
      <p className="font-heading text-xs font-bold uppercase tracking-wide text-ef-indigo/60">
        Science Capital link
      </p>
      <p className="mt-1.5 text-[1.0625rem]">{text}</p>
    </div>
  );
}

function SkillChips({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="mt-4">
      <p className="font-heading text-xs font-bold uppercase tracking-wide text-ef-indigo/60">
        {label}
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li key={skill} className="ef-pill !text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JobCard({ job }: { job: LocalJob }) {
  return (
    <div className="ef-bordered flex flex-col bg-ef-box p-5">
      <span
        className={`self-start rounded-full px-3 py-1 font-heading text-xs font-bold uppercase text-white ${
          job.route === "degree" ? "bg-ef-indigo" : "bg-ef-green"
        }`}
      >
        {job.route === "degree" ? "Degree route" : "Apprenticeship route"}
      </span>
      <h4 className="mt-3 text-xl">{job.title}</h4>
      <p className="text-[1.0625rem] text-ef-indigo/70">{job.employer}</p>
      <p className="mt-3 text-[1.0625rem]">
        <span className="font-bold">Qualifications: </span>
        {job.qualifications}
      </p>
      <p className="mt-3 text-[1.0625rem]">{job.summary}</p>
      <SkillChips label="Future skills" skills={job.futureSkills} />
      <SkillChips label="SkillsBuilder" skills={job.skillsBuilderSkills} />
      <div className="mt-4">
        <p className="font-heading text-xs font-bold uppercase tracking-wide text-ef-indigo/60">
          Connections for your class
        </p>
        <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-[1.0625rem]">
          {job.connections.map((connection) => (
            <li key={connection}>{connection}</li>
          ))}
        </ul>
      </div>
      <DimensionPills dimensions={job.dimensions} />
    </div>
  );
}

function NewsStorySection({ resource }: { resource: TeachingResource }) {
  const { newsStory } = resource;
  return (
    <div className="grid gap-6 lg:grid-cols-[7fr_3fr]">
      <div>
        <h4 className="text-xl">{newsStory.headline}</h4>
        <p className="mt-3 text-[1.0625rem]">{newsStory.summary}</p>
        <a
          href={newsStory.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-[1.0625rem] underline"
        >
          Source: {newsStory.sourceName}
        </a>
        <DimensionPills dimensions={newsStory.dimensions} />
      </div>
      <ScienceCapitalPanel text={newsStory.scienceCapitalLink} />
    </div>
  );
}

function FigureSection({ resource }: { resource: TeachingResource }) {
  const { notableFigure } = resource;
  return (
    <div className="grid gap-6 lg:grid-cols-[7fr_3fr]">
      <div>
        <h4 className="text-xl">
          {notableFigure.name}
          {notableFigure.dates && (
            <span className="font-normal text-ef-indigo/60">
              {" "}
              ({notableFigure.dates})
            </span>
          )}{" "}
          — {notableFigure.location}
        </h4>
        <p className="mt-3 text-[1.0625rem]">{notableFigure.summary}</p>
        <DimensionPills dimensions={notableFigure.dimensions} />
      </div>
      <ScienceCapitalPanel text={notableFigure.scienceCapitalLink} />
    </div>
  );
}

function JobsSection({ resource }: { resource: TeachingResource }) {
  const { jobs } = resource;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <JobCard job={jobs[0]} />
      <JobCard job={jobs[1]} />
    </div>
  );
}

function StartersSection({ resource }: { resource: TeachingResource }) {
  return (
    <ol className="grid gap-4">
      {resource.conversationStarters.map((starter, index) => (
        <li key={starter.title} className="ef-bordered bg-ef-box p-5">
          <h4 className="text-lg">
            {index + 1}. {starter.title}
          </h4>
          <p className="mt-2 text-[1.0625rem]">{starter.prompt}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {starter.connects.map((connect) => (
              <li key={connect} className="ef-pill !bg-ef-purple/30 !text-sm">
                {connect}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

const tabs = [
  { label: "News story", Section: NewsStorySection },
  { label: "Notable figure", Section: FigureSection },
  { label: "Local jobs", Section: JobsSection },
  { label: "Conversation starters", Section: StartersSection },
];

function PrintableResource({ resource }: { resource: TeachingResource }) {
  const { meta, newsStory, notableFigure, jobs, conversationStarters } = resource;
  return (
    <div id="printable">
      <h1 style={{ fontSize: "24px", fontWeight: 700 }}>
        Science Capital resource: {meta.topic}
      </h1>
      <p style={{ marginTop: "4px" }}>
        {meta.yearGroup} · {meta.location}
        {meta.interests.length > 0 && ` · Interests: ${meta.interests.join(", ")}`}
      </p>

      <h2 style={{ fontSize: "18px", fontWeight: 700, marginTop: "20px" }}>
        1. Local news story
      </h2>
      <p style={{ fontWeight: 700 }}>{newsStory.headline}</p>
      <p>{newsStory.summary}</p>
      <p>Source: {newsStory.sourceName} — {newsStory.sourceUrl}</p>
      <p>
        <em>Science Capital link:</em> {newsStory.scienceCapitalLink}
      </p>

      <h2 style={{ fontSize: "18px", fontWeight: 700, marginTop: "20px" }}>
        2. Local notable figure
      </h2>
      <p style={{ fontWeight: 700 }}>
        {notableFigure.name}
        {notableFigure.dates ? ` (${notableFigure.dates})` : ""} — {notableFigure.location}
      </p>
      <p>{notableFigure.summary}</p>
      <p>
        <em>Science Capital link:</em> {notableFigure.scienceCapitalLink}
      </p>

      <h2 style={{ fontSize: "18px", fontWeight: 700, marginTop: "20px" }}>
        3. Two local jobs
      </h2>
      {jobs.map((job) => (
        <div key={job.title} style={{ marginTop: "10px" }}>
          <p style={{ fontWeight: 700 }}>
            {job.title} — {job.employer} (
            {job.route === "degree" ? "degree route" : "apprenticeship route"})
          </p>
          <p>Qualifications: {job.qualifications}</p>
          <p>{job.summary}</p>
          <p>Future skills: {job.futureSkills.join(", ")}</p>
          <p>SkillsBuilder: {job.skillsBuilderSkills.join(", ")}</p>
          <p>Connections: {job.connections.join("; ")}</p>
        </div>
      ))}

      <h2 style={{ fontSize: "18px", fontWeight: 700, marginTop: "20px" }}>
        4. Conversation starters
      </h2>
      <ol style={{ paddingLeft: "20px" }}>
        {conversationStarters.map((starter) => (
          <li key={starter.title} style={{ marginTop: "8px" }}>
            <strong>{starter.title}.</strong> {starter.prompt}
          </li>
        ))}
      </ol>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        Generated with the Energising Futures Science Capital tool — sample content,
        illustrative and not verified.
      </p>
    </div>
  );
}

export function GeneratedResource({ resource }: { resource: TeachingResource }) {
  const [active, setActive] = useState(0);
  const { meta } = resource;
  const ActiveSection = tabs[active].Section;
  const interestSuffix =
    meta.interests.length > 0
      ? ` and interests like ${meta.interests.join(", ")}`
      : "";

  return (
    <div>
      <p className="text-[1.0625rem] leading-relaxed">
        Here&apos;s a bespoke Science Capital resource for{" "}
        <strong>{meta.topic}</strong>, tailored to {meta.yearGroup} in{" "}
        {meta.location}
        {interestSuffix}. Use the tabs below to explore each part — a local news
        story, a notable figure, two local careers and five conversation starters,
        all linked to your students&apos; world.
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-b border-ef-border pb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              active === index
                ? "bg-ef-indigo text-white"
                : "bg-ef-surface text-ef-indigo hover:bg-ef-mist"
            }`}
          >
            {index + 1}. {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <ActiveSection resource={resource} />
      </div>

      <p className="mt-8 text-center text-sm text-ef-indigo/50">
        Sample output for prototype purposes — content is illustrative, not verified.
      </p>

      <PrintableResource resource={resource} />
    </div>
  );
}
