import Image from "next/image";
import type { Resource } from "@/lib/resources";
import { BookmarkIcon } from "./icons";

export function RelatedResources({ resource }: { resource: Resource }) {
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
          {resource.related.map((card) => (
            <article key={card.title} className="flex w-[300px] shrink-0 flex-col gap-y-4">
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
                <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border-2 border-ef-indigo bg-ef-indigo">
                  <BookmarkIcon className="fill-white" />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
