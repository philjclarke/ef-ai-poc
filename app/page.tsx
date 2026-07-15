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
        <section
          className="bg-ef-teal"
          style={{
            backgroundImage: "url(/ef/assorted-icons-1.svg)",
            backgroundPosition: "right -15px top 30px",
            backgroundSize: "660px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ef-section py-12 sm:py-16">
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
          </div>
        </section>

        <section className="ef-section py-14">
          <h2 className="text-2xl">Try it on a resource</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.slug} className="flex flex-col gap-y-4">
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
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
