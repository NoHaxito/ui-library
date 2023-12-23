import { sidebarItems } from "@/data/sidebar-items";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { Doc } from "contentlayer/generated";
import Link from "next/link";

export function Pager({ doc }: { doc: Doc }) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }
  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href ? (
        <Link
          href={pager.prev.href}
          className="transition-colors text-sm text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-700 flex items-center gap-2 px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg"
        >
          <CaretLeft className="h-4 w-4" />
          {pager.prev.title}
        </Link>
      ) : (
        <div />
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className="transition-colors text-sm text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-700 flex items-center gap-2 px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg"
        >
          {pager.next.title}
          <CaretLeft className="rotate-180 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(sidebarItems), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
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
