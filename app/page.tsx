import Image from "next/image";
import Link from "next/link";
import { BookmarkIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { resources } from "@/lib/resources";

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
        <div className="ef-section pt-2">
          <section className="rounded-2xl bg-ef-teal px-6 py-[3.6rem] sm:bg-[url(/ef/assorted-icons-1.svg)] sm:bg-[length:700px] sm:bg-[position:right_-380px_center] sm:bg-no-repeat sm:px-10 sm:py-[4.8rem] min-[900px]:bg-[position:right_-260px_center] min-[1180px]:bg-[position:right_-150px_center]">
            <p className="font-heading text-sm font-bold uppercase tracking-wide">
              Prototype
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl sm:text-[2.5rem]">
              Science teaching resources, made local to your classroom
            </h1>
            <p className="mt-4 max-w-xl text-[1.0625rem]">
              An AI-powered enrichment to Energising Futures resources: bespoke
              Science Capital content built around your students&apos; interests,
              their families&apos; knowledge and your local community.
            </p>
          </section>
        </div>

        <section className="ef-section py-14">
          <h2 className="text-2xl">Featured resources</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="flex flex-col gap-y-4 rounded-2xl bg-ef-tint-page p-4 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(17,14,99,0.14)]"
              >
                <figure className="relative overflow-hidden rounded-2xl">
                  <Link href={`/resource/${resource.slug}${stateSuffix}`}>
                    <Image
                      src={resource.image}
                      alt=""
                      width={998}
                      height={614}
                      className="w-full"
                    />
                  </Link>
                  <span className="absolute bottom-4 left-4 rounded-full bg-ef-surface px-3 py-1.5 font-heading text-xs font-bold uppercase">
                    Resource
                  </span>
                  <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border-2 border-ef-indigo bg-ef-indigo">
                    <BookmarkIcon className="fill-white" />
                  </span>
                </figure>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base">{resource.phase}</p>
                  <span className="ef-pill !bg-ef-green">{resource.ageRange}</span>
                </div>
                <h3 className="text-xl leading-snug">
                  <Link
                    href={`/resource/${resource.slug}${stateSuffix}`}
                    className="hover:underline"
                  >
                    {resource.title}
                  </Link>
                </h3>
                <p className="text-[1.0625rem] leading-relaxed">
                  {resource.description}
                </p>
                <Link
                  href={`/resource/${resource.slug}${stateSuffix}`}
                  className="ef-btn mt-auto w-full !py-3.5"
                >
                  View lesson
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
