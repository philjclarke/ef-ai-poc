import Link from "next/link";

const unlockItems = [
  "A local news story linked to the topic",
  "A local scientist or role model your class can relate to",
  "Two real local jobs — one degree route, one apprenticeship",
  "Five conversation starters built around your students' interests",
];

export function SignInTeaser({ slug }: { slug: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ef-indigo text-white shadow-sm">
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-ef-teal">
          New · AI-powered
        </p>
        <h3 className="mt-1 font-heading text-xl font-semibold sm:text-2xl">
          Make this resource local to your class
        </h3>
        <p className="mt-2 max-w-xl text-sm text-white/80">
          Tell us your students&apos; interests and your school&apos;s location, and
          we&apos;ll build a bespoke Science Capital teaching resource around this
          topic — grounded in your community, mapped to Future Skills and
          SkillsBuilder.
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          {unlockItems.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="text-ef-yellow">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/resource/${slug}?state=logged-in`}
            className="rounded-full bg-ef-coral-deep px-6 py-3 font-heading text-sm font-semibold text-white transition hover:bg-ef-coral"
          >
            Sign in to unlock
          </Link>
          <span className="text-sm text-white/70">
            Free for UK teachers —{" "}
            <Link
              href={`/resource/${slug}?state=logged-in`}
              className="underline underline-offset-2"
            >
              register today
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
