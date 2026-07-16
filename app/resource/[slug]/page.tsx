import Image from "next/image";
import { notFound } from "next/navigation";
import { BannerShareButton } from "@/components/BannerShareButton";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ScienceCapitalGenerator } from "@/components/generator/ScienceCapitalGenerator";
import { DownloadIcon } from "@/components/icons";
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
        <div className="ef-section pt-2">
          {resource.bannerImage ? (
            <section
              style={{ "--banner-img": `url(${resource.bannerImage})` } as React.CSSProperties}
              className="relative flex min-h-[280px] items-center rounded-2xl bg-[#82c5c4] px-6 py-8 sm:px-10 sm:py-10 md:bg-[image:var(--banner-img)] md:bg-[length:auto_100%] md:bg-right md:bg-no-repeat"
            >
              <div className="absolute right-4 top-4 flex items-center gap-2">
                {loggedIn && <BannerShareButton slug={resource.slug} />}
                <BookmarkButton
                  loggedIn={loggedIn}
                  signInHref={signInHref}
                  inverted
                />
              </div>
              <div className="md:max-w-[55%]">
                <h2 className="hidden text-lg underline sm:block">
                  <a href="#">{resource.phase}</a>
                </h2>
                <h1 className="mt-1 text-3xl sm:text-[2.5rem]">
                  {resource.title}
                </h1>
                <div className="mt-4 flex flex-col items-start gap-[30px]">
                  <span className="ef-pill !bg-white/70">{resource.ageRange}</span>
                  {loggedIn && (
                    <a
                      href={resource.downloadUrl ?? "#"}
                      className="ef-btn !px-6 !py-3 !text-lg"
                    >
                      <DownloadIcon className="fill-white" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </section>
          ) : (
            <section className="rounded-2xl bg-ef-teal px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid items-center gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="hidden text-lg underline sm:block">
                    <a href="#">{resource.phase}</a>
                  </h2>
                  <h1 className="mt-1 text-3xl sm:text-[2.5rem]">
                    {resource.title}
                  </h1>
                </div>
                <div className="relative lg:col-span-5">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={resource.image}
                      alt=""
                      width={998}
                      height={614}
                      className="w-full"
                      priority
                    />
                  </div>
                  <div className="absolute right-3 top-3 flex items-center gap-3">
                    <span className="ef-pill !bg-ef-teal">{resource.ageRange}</span>
                    <BookmarkButton loggedIn={loggedIn} signInHref={signInHref} />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {(() => {
          const aboutColumn = (
            <>
              <h2 className="mb-4 text-[2rem]">About this resource</h2>
              <div className="space-y-4 text-[1.0625rem] leading-relaxed">
                {resource.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <h3 className="mt-6 text-lg">Why your students will benefit</h3>
              <ul className="mt-3 space-y-2.5">
                {resource.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2.5 text-[1.0625rem] leading-relaxed">
                    <span aria-hidden className="mt-1 text-ef-coral-deep">
                      ✦
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-ef-box p-4 sm:p-5">
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-ef-indigo/60">
                  Topics
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {resource.topics.map((topic) => (
                    <li key={topic} className="ef-pill !bg-white !px-3 !py-1.5 !text-sm">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              {loggedIn && (
                <a
                  href={resource.downloadUrl ?? "#"}
                  className="ef-btn mt-6 !px-7 !py-3.5 !text-lg"
                >
                  <DownloadIcon className="fill-white" />
                  Download
                </a>
              )}
              {!loggedIn && (
                <div className="mt-6">
                  <ReadyToAccess signInHref={signInHref} />
                </div>
              )}
            </>
          );

          return loggedIn ? (
            <ScienceCapitalGenerator resource={resource} aboutColumn={aboutColumn} />
          ) : (
            <section className="ef-section grid gap-8 pb-24 pt-12 lg:grid-cols-5">
              <div className="lg:col-span-3">{aboutColumn}</div>
              <div className="lg:col-span-2">
                <SignInTeaser slug={resource.slug} />
              </div>
            </section>
          );
        })()}

        <RelatedResources resource={resource} loggedIn={loggedIn} />
      </main>
      <SiteFooter />
    </>
  );
}
