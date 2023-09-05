"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import QuitButton from "./quit-button";
import BookmarkButton from "./bookmark-button";
import Link from "next/link";
import CreateBookmarkDialog from "./create-bookmark-dialog";
import GoalsButton from "./goals-button";
import CreateGoalDialog from "./create-goal-dialog";
import { parseDate } from "@/lib/utils";

function Layout({ children }: { children: ReactNode }) {
  return (
    <footer className="flex justify-between max-h-12 h-full items-center px-7 py-2 fixed left-0 bottom-0 w-full rounded-b-md border-t bg-white shadow-2xl">
      {children}
    </footer>
  );
}

function Footer({ date }: { date?: string }) {
  const pathname = usePathname();
  if (pathname === "/home")
    return (
      <Layout>
        <span className="text-sm">endo</span>
        <div className="flex gap-2">
          <GoalsButton />
          <BookmarkButton />
          <QuitButton />
        </div>
      </Layout>
    );
  else if (["/bookmarks", "/goals"].includes(pathname))
    return (
      <Layout>
        <Link
          href="/home"
          className="no-underline hover:underline underline-offset-4 transition-all duration-300"
        >
          <span className="text-sm">endo</span>
        </Link>
        {pathname === "/bookmarks" && <CreateBookmarkDialog />}
        {pathname === "/goals" && <CreateGoalDialog />}
      </Layout>
    );
  else if (date)
    return (
      <Layout>
        <Link
          href="/home"
          className="no-underline hover:underline underline-offset-4 transition-all duration-300"
        >
          <span className="text-sm">{parseDate(date)}</span>
        </Link>
      </Layout>
    );
}

export default Footer;
