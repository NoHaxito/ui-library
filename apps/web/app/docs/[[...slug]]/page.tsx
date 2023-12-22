import { Mdx } from "@/components/mdx-component";
import { allDocs } from "contentlayer/generated";
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

export default async function GettingStartedDocPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const doc = await getDocFromParams({ params });
  if (!doc) {
    notFound();
  }
  return (
    <main className="relative  p-6 lg:p-8 grid lg:gap-10 lg:grid-cols-[1fr_275px]">
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
      </div>
      <div className="hidden w-[275px] lg:block text-sm">
        <div className="sticky top-16 -mt-10 pt-4">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-4rem)] py-12">
            <div className="space-y-2">
              <p className="font-medium">On this page</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
