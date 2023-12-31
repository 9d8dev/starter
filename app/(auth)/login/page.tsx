import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

import MagicLinkForm from "@/components/auth/form";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-neutral-100">
      <div className="flex flex-col items-center gap-8 rounded-lg border bg-neutral-50 p-8 shadow-sm md:p-12">
        <Image src="/icon.svg" alt="logo" width={50} height={72}></Image>
        <p className="text-center">Login to access your account.</p>

        <div className="flex flex-col items-center gap-4">
          <MagicLinkForm />
        </div>
      </div>

      <p className="mt-4 max-w-xs text-center text-sm opacity-60 md:mb-24">
        By signing up for 9d8.dev you agree to our{" "}
        <Link className="underline underline-offset-4" href="/">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link className="underline underline-offset-4" href="/">
          Terms of Service
        </Link>
        .
      </p>
    </main>
  );
}
