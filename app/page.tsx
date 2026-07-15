import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { resources } from "@/lib/resources";

const accentClasses = {
  coral: "bg-ef-coral/25",
  teal: "bg-ef-teal/40",
  yellow: "bg-ef-yellow/30",
} as const;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string }>;
}) {
  const { state } = await searchParams;
  const loggedIn = state === "logged-in";
  const stateSuffix = loggedIn ? "?state=logged-in" : "";

  return (
    <>
      <SiteHeader loggedIn={loggedIn} />
      <main className="flex-1">
        <section className="bg-ef-indigo text-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-ef-teal">
              Prototype
            </p>
            <h1 className="mt-2 max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
              Science teaching resources, made local to your classroom
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              An AI-powered enrichment to Energising Futures resources: bespoke
              Science Capital content built around your students&apos; interests,
              their families&apos; knowledge and your local community.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="font-heading text-xl font-semibold">
            Try it on a resource
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resource/${resource.slug}${stateSuffix}`}
                className="group flex flex-col rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${accentClasses[resource.accent]}`}
                  >
                    {resource.phase}
                  </span>
                  <span className="text-xs text-ef-indigo/60">
                    Ages {resource.ageRange}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold group-hover:text-ef-coral-deep">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-ef-indigo/70">
                  {resource.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-ef-coral-deep">
                  Open resource →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
