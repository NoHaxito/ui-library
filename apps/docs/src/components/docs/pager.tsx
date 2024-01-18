import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { sidebarItems } from "@/config/sidebar";
import type { Doc } from "contentlayer/generated";
import { Button } from "@deluxe/ui";

export function Pager({ doc }: { doc: Doc }) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
      {pager?.prev?.href ? (
        <Button
          size="sm"
          left={<CaretLeft className="h-4 w-4" />}
          variant="ghost"
          className="w-full sm:w-auto"
          asChild
        >
          <Link href={pager?.prev?.href ?? "#"}>{pager.prev.title ?? "#"}</Link>
        </Button>
      ) : (
        <div />
      )}
      {pager?.next?.href ? (
        <Button
          size="sm"
          right={<CaretLeft className="h-4 w-4 rotate-180" />}
          variant="ghost"
          className="w-full sm:w-auto"
          asChild
        >
          <Link href={pager?.next?.href ?? "#"}>{pager.next.title ?? "#"}</Link>
        </Button>
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
