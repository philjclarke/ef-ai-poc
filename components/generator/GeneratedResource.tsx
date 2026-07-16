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

function SectionCard({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ef-bordered bg-white p-6 sm:p-8">
      <p className="font-heading text-sm font-bold uppercase tracking-wide">
        {eyebrow}
      </p>
      {children}
    </section>
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

export function GeneratedResource({ resource }: { resource: TeachingResource }) {
  const { newsStory, notableFigure, jobs, conversationStarters } = resource;

  return (
    <div className="grid gap-5">
      <SectionCard eyebrow="1 · Local news story">
        <div className="mt-2 grid gap-6 lg:grid-cols-[7fr_3fr]">
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
      </SectionCard>

      <SectionCard eyebrow="2 · Local notable figure">
        <div className="mt-2 grid gap-6 lg:grid-cols-[7fr_3fr]">
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
      </SectionCard>

      <SectionCard eyebrow="3 · Two local jobs">
        <div className="mt-3 grid gap-5 lg:grid-cols-2">
          <JobCard job={jobs[0]} />
          <JobCard job={jobs[1]} />
        </div>
      </SectionCard>

      <SectionCard eyebrow="4 · Conversation starters">
        <ol className="mt-3 grid gap-4">
          {conversationStarters.map((starter, index) => (
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
      </SectionCard>

      <p className="text-center text-sm text-ef-indigo/50">
        Sample output for prototype purposes — content is illustrative, not verified.
      </p>
    </div>
  );
}
