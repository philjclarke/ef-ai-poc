import Link from "next/link";
import { notFound } from "next/navigation";
import { ScienceCapitalGenerator } from "@/components/generator/ScienceCapitalGenerator";
import { SignInTeaser } from "@/components/SignInTeaser";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getResource } from "@/lib/resources";

export default async function ResourcePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ state?: string }>;
}) {
  const [{ slug }, { state }] = await Promise.all([params, searchParams]);
  const resource = getResource(slug);
  if (!resource) notFound();

  const loggedIn = state === "logged-in";
  const stateSuffix = loggedIn ? "?state=logged-in" : "";

  return (
    <>
      <SiteHeader loggedIn={loggedIn} />
      <main className="flex-1">
        <section className="bg-ef-indigo text-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
            <nav className="text-sm text-white/60">
              <Link href={`/${stateSuffix}`} className="hover:text-white">
                Resources
              </Link>{" "}
              / <span className="text-white/80">{resource.title}</span>
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-ef-yellow px-2.5 py-0.5 text-xs font-semibold text-ef-indigo">
                {resource.phase}
              </span>
              <span className="rounded-full border border-white/30 px-2.5 py-0.5 text-xs">
                Ages {resource.ageRange}
              </span>
            </div>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {resource.title}
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">{resource.description}</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6">
          <section>
            <h2 className="font-heading text-xl font-semibold">
              About this resource
            </h2>
            <div className="mt-3 grid gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-[2fr_1fr] sm:p-6">
              <div className="text-sm leading-relaxed text-ef-indigo/80">
                <p>
                  Placeholder for the existing resource page content — overview,
                  curriculum links and teacher guidance carried over from the live
                  Energising Futures site.
                </p>
                <p className="mt-3">
                  Linked to the national curriculum, with accessible activities that
                  bring science to life through real-world challenges and careers
                  links.
                </p>
              </div>
              <div className="rounded-xl bg-ef-mist p-4">
                <h3 className="text-sm font-semibold">Downloads</h3>
                <ul className="mt-2 grid gap-2 text-sm">
                  <li>
                    <span className="cursor-not-allowed text-ef-indigo/50">
                      📄 {resource.title} (PDF) — placeholder
                    </span>
                  </li>
                  <li>
                    <span className="cursor-not-allowed text-ef-indigo/50">
                      📄 Teacher notes (PDF) — placeholder
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="science-capital-generator">
            {loggedIn ? (
              <ScienceCapitalGenerator resource={resource} />
            ) : (
              <SignInTeaser slug={resource.slug} />
            )}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
