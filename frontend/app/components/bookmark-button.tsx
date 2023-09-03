"use client";
import { BookmarkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Tooltip from "./tooltip";

function BookmarkButton() {
  const router = useRouter();
  return (
    <Tooltip desc="Bookmarks">
      <button
        className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex"
        onClick={() => router.push("/bookmarks")}
      >
        <BookmarkIcon className="text-slate-500 group-hover:text-slate-600" />
      </button>
    </Tooltip>
  );
}

export default BookmarkButton;
