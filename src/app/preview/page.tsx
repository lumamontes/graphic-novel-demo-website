import NavSocialLinks from "@/components/nav-social-links";
import Link from "next/link";
import { getPreview } from "../lib/contentful";
import { Suspense } from "react";
import LoadingPreview from "@/components/loading-preview";
import PDFViewer from "@/components/pdf-viewer";

export default async function Preview() {
  const preview = await getPreview();
  return (
    <main className="flex min-h-screen flex-col items-center max-w-6xl mx-auto p-12 gap-16">
      <header className=" flex flex-col gap-6 md:flex-row md:w-full md:justify-between md:items-center ">
        <Link
          href="/"
          className="text-base px-6 py-2 border border-black hover:bg-neutral-100 transition duration-300 flex items-center justify-center"
        >
          Home
        </Link>
        <p className="text-sm">Check out the preview of the first pages!!</p>
        <a
          href={preview.previewpdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base px-4 py-3 border border-black hover:bg-neutral-100 transition duration-300"
        >
          Download
        </a>
      </header>
      {/* Add pdf preview here (when ready!) :) */}
      <div className="bg-neutral-500 w-full h-screen">
        <Suspense fallback={<LoadingPreview />}>
          <PDFViewer url={preview.previewpdf.url} />
        </Suspense>
      </div>
      {/* Fixed right header with social links */}
      <NavSocialLinks />
    </main>
  );
}
