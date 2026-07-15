"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { CaretIcon, PersonIcon } from "./icons";

// Simulated auth for the prototype: ?state=logged-in stands in for a real
// session until EdCo/Apollo supplies authentication.
export function useSimulatedAuth() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loggedIn = searchParams.get("state") === "logged-in";
  const toggleHref = loggedIn ? pathname : `${pathname}?state=logged-in`;
  return { loggedIn, toggleHref };
}

export function AuthActions() {
  const { loggedIn, toggleHref } = useSimulatedAuth();

  if (loggedIn) {
    return (
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 text-base">
          <PersonIcon className="text-ef-indigo" />
          My Account
          <CaretIcon className="w-3 fill-ef-indigo" />
        </a>
        <Link href={toggleHref} className="text-base underline">
          Log Out
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href={toggleHref} className="text-base underline">
        Register
      </Link>
      <Link href={toggleHref} className="ef-btn !px-5 !py-2 !text-base">
        Log in
      </Link>
    </div>
  );
}

export function StateBadge() {
  const { loggedIn, toggleHref } = useSimulatedAuth();

  return (
    <Link
      href={toggleHref}
      className="fixed bottom-4 right-4 z-50 rounded-full border border-ef-border bg-white/95 px-3.5 py-2 text-xs font-medium shadow-lg backdrop-blur transition hover:border-ef-indigo"
    >
      Prototype · viewing{" "}
      <span className="font-bold">{loggedIn ? "logged in" : "logged out"}</span>{" "}
      · switch
    </Link>
  );
}
