import Image from "next/image";

const footerMenu1 = ["News", "About us", "FAQs", "Contact us"];
const footerMenu2 = [
  "Cookie policy",
  "Legal notice",
  "Privacy policy",
  "Accessibility statement",
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-white pb-16 pt-14">
      <div className="ef-section grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <Image
            src="/ef/logo.svg"
            alt="Energising Futures logo"
            width={105}
            height={80}
          />
        </div>
        <div className="text-center md:col-span-5">
          <h2 className="text-[1.375rem]">Their future begins here. With you.</h2>
          <p className="mt-3 text-[1.3125rem]">
            Access free teaching resources, online help and more.
          </p>
        </div>
        <div className="text-center md:col-span-3 md:col-start-10">
          <a href="#" className="ef-btn w-full !py-5 !text-xl">
            Register Now
          </a>
          <p className="mt-4 text-base">
            Already registered?{" "}
            <a href="#" className="underline">
              Log In
            </a>
          </p>
        </div>
      </div>

      <div className="ef-section mt-14 grid gap-8 md:grid-cols-12">
        <nav className="md:col-span-4">
          <ul className="flex flex-col gap-2">
            {footerMenu1.map((item) => (
              <li key={item}>
                <a href="#" className="text-base underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-4">
          <ul className="flex flex-col gap-2">
            {footerMenu2.map((item) => (
              <li key={item}>
                <a href="#" className="text-base underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="ef-section mt-10">
        <p className="text-base">© 2026 We Are Futures. All rights reserved.</p>
        <p className="mt-2 text-sm text-ef-indigo/50">
          Prototype — not a live service; all generated content is illustrative.
        </p>
      </div>
    </footer>
  );
}
