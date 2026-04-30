"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

function getSlugFromPathname(pathname: string): string {
  const match = pathname.match(/^\/chapters\/([^/]+)/);
  return match?.[1] ?? "";
}

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const slug = getSlugFromPathname(pathname);

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-0 lg:px-10">
      <Sidebar currentSlug={slug} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
