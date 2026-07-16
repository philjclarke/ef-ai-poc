"use client";

import { useEffect, useState } from "react";
import { CopyIcon, HandsIcon, PaperPlaneIcon } from "./icons";

// Banner entry point that opens the "share with your students" panel as a modal.
export function BannerShareButton({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  function openModal() {
    const code = Math.random().toString(36).slice(2, 8);
    setShareUrl(`${window.location.origin}/resource/${slug}?share=${code}`);
    setCopied(false);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function copyShareLink() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex h-8 items-center gap-2 rounded-full border-2 border-white bg-white px-3.5 font-heading text-sm font-bold text-ef-indigo transition hover:bg-white/90"
      >
        <PaperPlaneIcon className="fill-ef-indigo" />
        Share
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ef-indigo/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Share this resource with your students"
            className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-3 text-3xl leading-none text-ef-indigo/40 transition hover:text-ef-indigo"
            >
              ×
            </button>
            <HandsIcon className="mx-auto mb-4 fill-ef-indigo" />
            <h3 className="text-2xl">Share this resource with your students</h3>
            <p className="mt-3 text-[1.0625rem]">
              Copy this URL and share with your students - they won&apos;t have to
              login to use it
            </p>
            <div className="mt-4 flex text-left">
              <input
                readOnly
                value={shareUrl}
                aria-label="Share link"
                className="h-11 flex-1 rounded-l-md border border-ef-border px-3 text-sm outline-none"
              />
              <button
                onClick={copyShareLink}
                className="flex h-11 items-center gap-1 rounded-r-md border border-l-0 border-ef-border px-4 text-sm"
              >
                <CopyIcon className="size-5 fill-ef-indigo" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
