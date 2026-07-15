import type { LocalJob, TeachingResource } from "@/lib/types";

function DimensionPills({ dimensions }: { dimensions: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {dimensions.map((dimension) => (
        <li
          key={dimension}
          className="rounded-full bg-ef-teal/30 px-2.5 py-0.5 text-xs font-medium"
        >
          {dimension}
        </li>
      ))}
    </ul>
  );
}

function SectionCard({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ef-coral-deep">
        {eyebrow}
      </p>
      {children}
    </section>
  );
}

function ScienceCapitalCallout({ text }: { text: string }) {
  return (
    <p className="mt-3 rounded-lg border-l-4 border-ef-yellow bg-ef-yellow/10 px-3 py-2 text-sm">
      <span className="font-semibold">Science Capital link: </span>
      {text}
    </p>
  );
}

function SkillChips({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-ef-indigo/60">
        {label}
      </p>
      <ul className="mt-1 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-ef-mist px-2.5 py-0.5 text-xs font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JobCard({ job }: { job: LocalJob }) {
  return (
    <div className="flex flex-col rounded-xl border border-ef-border bg-ef-surface/60 p-4">
      <span
        className={`self-start rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${
          job.route === "degree" ? "bg-ef-indigo" : "bg-ef-green"
        }`}
      >
        {job.route === "degree" ? "Degree route" : "Apprenticeship route"}
      </span>
      <h4 className="mt-2 text-base font-semibold">{job.title}</h4>
      <p className="text-sm text-ef-indigo/70">{job.employer}</p>
      <p className="mt-2 text-sm">
        <span className="font-semibold">Qualifications: </span>
        {job.qualifications}
      </p>
      <p className="mt-2 text-sm">{job.summary}</p>
      <SkillChips label="Future skills" skills={job.futureSkills} />
      <SkillChips label="SkillsBuilder" skills={job.skillsBuilderSkills} />
      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-ef-indigo/60">
          Connections for your class
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
          {job.connections.map((connection) => (
            <li key={connection}>{connection}</li>
          ))}
        </ul>
      </div>
      <DimensionPills dimensions={job.dimensions} />
    </div>
  );
}

export function GeneratedResource({ resource }: { resource: TeachingResource }) {
  const { meta, newsStory, notableFigure, jobs, conversationStarters } = resource;

  return (
    <div className="grid gap-4">
      <div className="rounded-2xl bg-ef-indigo p-5 text-white sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ef-teal">
          Science Capital teaching resource
        </p>
        <h3 className="mt-1 font-heading text-xl font-semibold">
          {meta.topic} · {meta.yearGroup} · {meta.location}
        </h3>
        {(meta.interests.length > 0 || meta.occupations.length > 0) && (
          <p className="mt-2 text-sm text-white/80">
            Tailored to{" "}
            {[...meta.interests, ...meta.occupations].join(", ")}
          </p>
        )}
      </div>

      <SectionCard eyebrow="1 · Local news story">
        <h4 className="mt-1 text-base font-semibold">{newsStory.headline}</h4>
        <p className="mt-2 text-sm">{newsStory.summary}</p>
        <a
          href={newsStory.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm font-medium text-ef-coral-deep underline underline-offset-2"
        >
          Source: {newsStory.sourceName}
        </a>
        <ScienceCapitalCallout text={newsStory.scienceCapitalLink} />
        <DimensionPills dimensions={newsStory.dimensions} />
      </SectionCard>

      <SectionCard eyebrow="2 · Local notable figure">
        <h4 className="mt-1 text-base font-semibold">
          {notableFigure.name}
          {notableFigure.dates && (
            <span className="font-normal text-ef-indigo/60"> ({notableFigure.dates})</span>
          )}{" "}
          — {notableFigure.location}
        </h4>
        <p className="mt-2 text-sm">{notableFigure.summary}</p>
        <ScienceCapitalCallout text={notableFigure.scienceCapitalLink} />
        <DimensionPills dimensions={notableFigure.dimensions} />
      </SectionCard>

      <SectionCard eyebrow="3 · Two local jobs">
        <div className="mt-2 grid gap-4 lg:grid-cols-2">
          <JobCard job={jobs[0]} />
          <JobCard job={jobs[1]} />
        </div>
      </SectionCard>

      <SectionCard eyebrow="4 · Conversation starters">
        <ol className="mt-2 grid gap-3">
          {conversationStarters.map((starter, index) => (
            <li
              key={starter.title}
              className="rounded-xl border border-ef-border bg-ef-surface/60 p-4"
            >
              <h4 className="text-sm font-semibold">
                {index + 1}. {starter.title}
              </h4>
              <p className="mt-1 text-sm">{starter.prompt}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {starter.connects.map((connect) => (
                  <li
                    key={connect}
                    className="rounded-full bg-ef-purple/25 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {connect}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </SectionCard>

      <p className="text-center text-xs text-ef-indigo/50">
        Sample output for prototype purposes — content is illustrative, not verified.
      </p>
    </div>
  );
}
