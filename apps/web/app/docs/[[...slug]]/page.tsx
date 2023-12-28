import { Mdx } from "@/components/mdx-component";
import { Pager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getDocFromParams({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

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
  const doc = await getDocFromParams({ params });
  if (!doc) {
    notFound();
  }
  const toc = await getTableOfContents(doc.body.raw);
  return (
    <main className="relative px-1 py-6 lg:grid lg:grid-cols-[1fr_275px] lg:gap-10 lg:p-8">
      <div>
        <div className="space-y-2">
          <h1 className={"scroll-m-20 text-4xl font-bold tracking-tight"}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-neutral-500">{doc.description}</p>
          )}
        </div>
        <div className="pb-6 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <Pager doc={doc} />
      </div>
      <div
        data-hidden="yes"
        className="w-[275px] text-sm data-[hidden=yes]:hidden lg:!flex"
      >
        <div className="sticky top-16 -mt-10 h-[calc(100vh-4rem)] pt-8">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
