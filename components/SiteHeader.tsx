import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { AuthActions, StateBadge } from "./AuthControl";
import { SearchIcon } from "./icons";

const menuItems = [
  "Primary",
  "Secondary",
  "Ultimate STEM Challenge",
  "Collections",
  "Careers connections",
  "STEM Futures Unlocked CPD",
];

export function SiteHeader({ loggedIn }: { loggedIn: boolean }) {
  return (
    <>
      <header className="bg-white">
        <div className="ef-section flex items-center justify-between gap-6 py-4">
          <Link
            href={loggedIn ? "/?state=logged-in" : "/"}
            aria-label="Energising Futures"
            className="shrink-0"
          >
            <Image
              src="/ef/logo.svg"
              alt="Energising Futures logo"
              width={140}
              height={106}
              className="w-[90px] md:w-[140px]"
              priority
            />
          </Link>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-5">
              <form
                className="hidden items-center rounded-full bg-ef-surface pl-4 md:flex"
                action="#"
              >
                <input
                  type="text"
                  placeholder="Search for..."
                  aria-label="Search for..."
                  className="w-44 bg-transparent py-2 text-base outline-none placeholder:text-ef-indigo/60"
                />
                <button className="px-3" aria-label="Search">
                  <SearchIcon className="fill-ef-indigo" />
                </button>
              </form>
              <Suspense fallback={null}>
                <AuthActions />
              </Suspense>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[17px] hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Suspense fallback={null}>
        <StateBadge />
      </Suspense>
    </>
  );
}
