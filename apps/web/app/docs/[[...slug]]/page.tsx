import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-component";
import { Pager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { allDocs } from "contentlayer/generated";

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
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description ? (
            <p className="text-lg text-neutral-500">{doc.description}</p>
          ) : null}
        </div>
        <div className="pb-6 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <Pager doc={doc} />
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
