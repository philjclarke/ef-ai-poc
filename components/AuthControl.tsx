"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// Simulated auth for the prototype: ?state=logged-in stands in for a real
// session until EdCo/Apollo supplies authentication.
export function useSimulatedAuth() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loggedIn = searchParams.get("state") === "logged-in";
  const toggleHref = loggedIn ? pathname : `${pathname}?state=logged-in`;
  return { loggedIn, toggleHref };
}

export function AuthButton() {
  const { loggedIn, toggleHref } = useSimulatedAuth();

  return (
    <Link
      href={toggleHref}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
        loggedIn
          ? "border border-white/40 text-white hover:bg-white/10"
          : "bg-ef-coral-deep text-white hover:bg-ef-coral"
      }`}
    >
      {loggedIn ? "Sign out" : "Log in"}
    </Link>
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
