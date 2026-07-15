"use client";

import Link from "next/link";
import { useState } from "react";
import { BookmarkIcon } from "./icons";

function BookmarkFilledIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" className={className}>
      <path d="m1,2v13l6-4,6,4V2c0-.55228-.44772-1-1-1H2c-.55228,0-1,.44772-1,1Z" />
    </svg>
  );
}

const circleClasses =
  "flex size-8 items-center justify-center rounded-full border-2 border-ef-indigo transition";

// Logged in: toggles locally (persistence is out of scope for the prototype).
// Logged out: links to sign-in, matching the live site's /login/ bookmark link.
export function BookmarkButton({
  loggedIn,
  signInHref,
}: {
  loggedIn: boolean;
  signInHref: string;
}) {
  const [active, setActive] = useState(false);

  if (!loggedIn) {
    return (
      <Link
        href={signInHref}
        aria-label="Log in to add to bookmarks"
        className={`${circleClasses} bg-ef-indigo`}
      >
        <BookmarkIcon className="fill-white" />
      </Link>
    );
  }

  return (
    <button
      aria-label={active ? "Remove bookmark" : "Add to bookmarks"}
      aria-pressed={active}
      onClick={() => setActive(!active)}
      className={`${circleClasses} ${active ? "bg-white" : "bg-ef-indigo"}`}
    >
      {active ? (
        <BookmarkFilledIcon className="fill-ef-indigo" />
      ) : (
        <BookmarkIcon className="fill-white" />
      )}
    </button>
  );
}
