import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { sidebarItems } from "@/data/sidebar-items";
import type { Doc } from "contentlayer/generated";

export function Pager({ doc }: { doc: Doc }) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }
  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href ? (
        <Link
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
          href={pager?.prev?.href ?? "#"}
        >
          <CaretLeft className="h-4 w-4" />
          {pager.prev.title ?? "#"}
        </Link>
      ) : (
        <div />
      )}
      {pager?.next?.href ? (
        <Link
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
          href={pager?.next?.href ?? "#"}
        >
          {pager.next.title}
          <CaretLeft className="h-4 w-4 rotate-180" />
        </Link>
      ) : null}
    </div>
  );
}

export function getPagerForDoc(doc: Doc): {
  prev: { title?: string; href?: string } | null;
  next: { title?: string; href?: string } | null;
} | null {
  const flattenedLinks = [null, ...flatten(sidebarItems), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: any[]): any[] {
  return links
    .reduce<any[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
