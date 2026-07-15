import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScienceCapitalGenerator } from "@/components/generator/ScienceCapitalGenerator";
import { BookmarkIcon, DownloadIcon, SquiggleIcon } from "@/components/icons";
import { ReadyToAccess } from "@/components/ReadyToAccess";
import { RelatedResources } from "@/components/RelatedResources";
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
  const signInHref = `/resource/${resource.slug}?state=logged-in`;

  return (
    <>
      <SiteHeader loggedIn={loggedIn} />
      <main className="flex-1">
        <section
          className="bg-ef-teal"
          style={{
            backgroundImage: "url(/ef/assorted-icons-1.svg)",
            backgroundPosition: "right -15px top 30px",
            backgroundSize: "660px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ef-section py-10 sm:py-12">
            <h2 className="hidden text-lg underline sm:block">
              <a href="#">{resource.phase}</a>
            </h2>
            <h1 className="mt-1 text-3xl sm:text-[2.5rem]">{resource.title}</h1>
          </div>
        </section>

        <section className="ef-section grid gap-6 pb-20 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={resource.image}
                  alt=""
                  width={998}
                  height={614}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-3">
                <span className="ef-pill !bg-ef-teal">{resource.ageRange}</span>
                <span
                  className="flex size-8 items-center justify-center rounded-full border-2 border-ef-indigo bg-ef-indigo"
                  aria-label="Bookmark"
                >
                  <BookmarkIcon className="fill-white" />
                </span>
              </div>
            </div>

            <div className="ef-bordered mt-5 p-6 sm:p-10">
              <h2 className="mb-4 text-2xl">About this resource</h2>
              <p className="text-[1.0625rem]">
                <strong>Topics: </strong>
                {resource.topics.join(", ")}
              </p>
              <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed">
                {resource.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link
              href={loggedIn ? "#" : signInHref}
              className="ef-btn w-full !py-6 !text-xl"
            >
              <DownloadIcon className="fill-white" />
              Download
            </Link>

            <div className="mt-5">
              {loggedIn ? (
                <div className="rounded-2xl bg-ef-indigo p-6 text-center text-white sm:p-10">
                  <SquiggleIcon className="mx-auto mb-4 w-9 fill-ef-yellow" />
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-ef-yellow">
                    New · AI-powered
                  </p>
                  <h4 className="mt-2 text-xl">
                    Make this resource local to your class
                  </h4>
                  <p className="mt-3 text-[1.0625rem] text-white/85">
                    Generate a bespoke Science Capital teaching resource for{" "}
                    {resource.title.toLowerCase()} — built around your students,
                    their families and your local area.
                  </p>
                  <div className="mt-5">
                    <a
                      href="#science-capital-generator"
                      className="ef-btn w-full !border-white !bg-white !text-ef-indigo"
                    >
                      Try it below
                    </a>
                  </div>
                </div>
              ) : (
                <ReadyToAccess signInHref={signInHref} />
              )}
            </div>
          </div>
        </section>

        <section id="science-capital-generator" className="ef-section scroll-mt-8 pb-24">
          {loggedIn ? (
            <ScienceCapitalGenerator resource={resource} />
          ) : (
            <SignInTeaser slug={resource.slug} />
          )}
        </section>

        <RelatedResources resource={resource} />
      </main>
      <SiteFooter />
    </>
  );
}
