import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/markdown";
import { Pager } from "@/components/docs/pager";
import { DashboardTableOfContents } from "@/components/docs/toc";
import { getTableOfContents } from "@/lib/toc";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { ScrollToTop } from "@/components/docs/scroll-to-top";
import { EditPageLink } from "@/components/docs/edit-page-link";

function getDocFromParams({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/") || "";
  const doc = allDocs.find((Doc) => Doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export const generateStaticParams = () =>
  allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata {
  const doc = getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: doc.url,
    },
  };
}

export default async function GettingStartedDocPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const doc = getDocFromParams({ params });
  if (!doc) {
    notFound();
  }
  const toc = await getTableOfContents(doc.body.raw);
  return (
    <main className="container relative w-full px-0.5 py-6 xl:grid xl:grid-cols-[1fr_220px] xl:gap-8 xl:p-8">
      <div>
        <div className="space-y-3">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description ? (
            <p className="text-lg text-neutral-500">{doc.description}</p>
          ) : null}

          {doc.links?.radix && (
            <Link
              className="inline-flex transform items-center justify-center gap-2 rounded-md bg-neutral-100/80 px-3 py-1 text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-900/80 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
              href={doc.links.radix ?? "#"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M11.8369 19.75C9.31565 19.75 7.27173 17.5601 7.27173 14.8587C7.27173 12.1573 9.31565 9.96739 11.8369 9.96739V19.75Z"
                  fill="currentColor"
                />
                <path
                  d="M11.8369 4.75H7.27173V9.31522H11.8369V4.75Z"
                  fill="currentColor"
                />
                <path
                  d="M14.7717 9.31522C16.0324 9.31522 17.0543 8.29326 17.0543 7.03261C17.0543 5.77196 16.0324 4.75 14.7717 4.75C13.5111 4.75 12.4891 5.77196 12.4891 7.03261C12.4891 8.29326 13.5111 9.31522 14.7717 9.31522Z"
                  fill="currentColor"
                />
              </svg>
              Radix UI
            </Link>
          )}
        </div>
        <div className="pb-6 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <Pager doc={doc} />
        <div className="my-3 h-px w-full bg-neutral-300 dark:bg-neutral-800" />
        <div className="flex w-full flex-col items-center justify-between gap-2 text-neutral-500 sm:flex-row">
          <EditPageLink />
          <ScrollToTop />
        </div>
      </div>
      <div
        className="text-sm data-[hidden=yes]:hidden xl:!flex"
        data-hidden="yes"
      >
        <div className="sticky top-16 -mt-10 h-[calc(100vh-4rem)] pt-8">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
