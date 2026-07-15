import Link from "next/link";
import { SquiggleIcon } from "./icons";

const unlockItems = [
  "A local news story linked to the topic",
  "A local scientist or role model your class can relate to",
  "Two real local jobs — one degree route, one apprenticeship",
  "Five conversation starters built around your students' interests",
];

// Teaser for the new AI feature, shown to logged-out teachers below the
// existing resource content.
export function SignInTeaser({ slug }: { slug: string }) {
  const signInHref = `/resource/${slug}?state=logged-in`;

  return (
    <div className="rounded-2xl bg-ef-indigo p-6 text-white sm:p-10">
      <SquiggleIcon className="mb-4 w-9 fill-ef-yellow" />
      <p className="font-heading text-sm font-bold uppercase tracking-wide text-ef-yellow">
        New · AI-powered
      </p>
      <h3 className="mt-2 text-2xl sm:text-3xl">
        Make this resource local to your class
      </h3>
      <p className="mt-3 max-w-2xl text-[1.0625rem] text-white/85">
        Tell us your students&apos; interests and your school&apos;s location, and
        we&apos;ll build a bespoke Science Capital teaching resource around this
        topic — grounded in your community, mapped to Future Skills and
        SkillsBuilder.
      </p>
      <ul className="mt-5 grid gap-2.5 text-[1.0625rem] sm:grid-cols-2">
        {unlockItems.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className="text-ef-yellow">
              ✦
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <Link
          href={signInHref}
          className="ef-btn !border-white !bg-white !text-ef-indigo"
        >
          Log in to try it
        </Link>
        <span className="text-base text-white/80">
          Free for UK teachers —{" "}
          <Link href={signInHref} className="underline">
            register today
          </Link>
        </span>
      </div>
    </div>
  );
}
