import NavSocialLinks from "@/components/nav-social-links";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getPreview } from "./lib/contentful";
import LoadingPreview from "@/components/loading-preview";

export default async function HomePage() {
  const preview = await getPreview();

  return (
    <main className="flex min-h-screen items-center max-w-6xl mx-auto md:px-12 justify-between flex-col md:flex-row">
      <div className="w-full p-12 md:p-0 gap-4 ">
        <div className="flex gap-4 flex-col">
          <p className="text-sm">
            Coming soon in <code>2024</code>&nbsp;
          </p>
          <h1 className="text-4xl">Nameless, Faceless</h1>
          <p className="text-base">
            A grafic novel written and ilustratted by{" "}
            <a
              href="https://luanagoes.vercel.app"
              target="_blank"
              className="underline"
            >
              Luana G&oacute;es
            </a>
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row text-center">
          <Suspense fallback={<LoadingPreview />}>
            {preview ? (
              <Link
                href={`/preview`}
                className="text-base px-6 py-3 border border-black hover:bg-neutral-100 transition duration-300 flex items-center justify-center"
              >
                Check out preview
              </Link>
            ) : (
              <p className="text-base px-6 py-3 border border-black hover:bg-neutral-100 transition duration-300 flex items-center justify-center">
                Preview coming soon :)
              </p>
            )}
          </Suspense>
          <Link
            href="/newsletter"
            className="text-base px-6 py-3 border border-black hover:bg-neutral-100 transition duration-300 flex items-center justify-center"
          >
            Subscribe to newsletter
          </Link>
        </div>
      </div>
      <div className="h-48 w-full  md:w-1/2 flex items-center justify-center">
        <Image
          src="/city.png"
          alt="Girl in the city"
          width={301}
          height={288}
          priority
        />
      </div>
      {/* Fixed right header with social links */}
      <NavSocialLinks />
    </main>
  );
}
