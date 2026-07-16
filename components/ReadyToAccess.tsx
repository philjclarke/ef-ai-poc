import Link from "next/link";
import { SquiggleIcon } from "./icons";

// Mirror of the live logged-out "Ready to access this resource?" box
// (.boxed--dark on energisingfutures.co.uk).
export function ReadyToAccess({ signInHref }: { signInHref: string }) {
  return (
    <div className="rounded-2xl bg-ef-indigo p-6 text-center text-white sm:p-10">
      <SquiggleIcon className="mx-auto mb-4 w-9 fill-white" />
      <h4 className="text-xl">Ready to access this resource?</h4>
      <p className="mt-3 text-[1.0625rem]">
        Please{" "}
        <Link href={signInHref} className="underline">
          Log in
        </Link>{" "}
        or{" "}
        <Link href={signInHref} className="underline">
          Register
        </Link>{" "}
        to access this and all resources across Energising Futures.
      </p>
      <div className="my-5">
        <Link
          href={signInHref}
          className="ef-btn w-full !border-white !bg-white !text-ef-indigo"
        >
          Login to download this resource
        </Link>
      </div>
      <p className="text-base">
        Not yet registered?{" "}
        <Link href={signInHref} className="underline">
          Register now
        </Link>
      </p>
    </div>
  );
}
