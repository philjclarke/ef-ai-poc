import Link from "next/link";
import { Suspense } from "react";
import { AuthButton, StateBadge } from "./AuthControl";

export function SiteHeader({ loggedIn }: { loggedIn: boolean }) {
  return (
    <>
      <header className="bg-ef-indigo text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href={loggedIn ? "/?state=logged-in" : "/"} className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold leading-tight">
              Energising Futures
            </span>
            <span className="rounded-full bg-ef-yellow px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ef-indigo">
              AI prototype
            </span>
          </Link>
          <Suspense fallback={null}>
            <AuthButton />
          </Suspense>
        </div>
      </header>
      <Suspense fallback={null}>
        <StateBadge />
      </Suspense>
    </>
  );
}
