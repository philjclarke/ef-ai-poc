import Image from "next/image";
import type { Resource } from "@/lib/resources";
import { BookmarkButton } from "./BookmarkButton";
import { DownloadIcon, VideoIcon } from "./icons";

export function RelatedResources({
  resource,
  loggedIn,
}: {
  resource: Resource;
  loggedIn: boolean;
}) {
  const signInHref = `/resource/${resource.slug}?state=logged-in`;

  return (
    <section className="pb-24">
      <div className="ef-section">
        <h3 className="text-2xl">
          Related resources in{" "}
          <a href="#" className="underline">
            {resource.relatedTopic}
          </a>
        </h3>
      </div>
      <div className="ef-section mt-6 overflow-x-auto pb-4">
        <div className="flex gap-5">
          {resource.related.map((card) => {
            const action = card.action ?? "download";
            return (
              <article
                key={card.title}
                className="flex w-[300px] shrink-0 flex-col gap-y-4"
              >
                <figure className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt=""
                    width={297}
                    height={183}
                    className="w-full"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-ef-surface px-3 py-1.5 font-heading text-xs font-bold uppercase">
                    Resource
                  </span>
                  <span className="absolute right-4 top-4">
                    <BookmarkButton loggedIn={loggedIn} signInHref={signInHref} />
                  </span>
                </figure>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base">{card.phase}</p>
                  {card.ageRange && (
                    <span className="ef-pill !bg-ef-green">{card.ageRange}</span>
                  )}
                </div>
                <h3 className="text-xl leading-snug">
                  <a href="#" className="hover:underline">
                    {card.title}
                  </a>
                </h3>
                <p className="text-[1.0625rem] leading-relaxed">{card.text}</p>
                {loggedIn && (
                  <div className="mt-auto">
                    {card.partOfLesson && (
                      <p className="mb-2 text-base">
                        <a href="#" className="underline">
                          Download the entire lesson
                        </a>
                      </p>
                    )}
                    <a href="#" className="ef-btn w-full">
                      {action === "watch" ? (
                        <>
                          <VideoIcon className="fill-white" />
                          Watch
                        </>
                      ) : (
                        <>
                          <DownloadIcon className="fill-white" />
                          Download
                        </>
                      )}
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
