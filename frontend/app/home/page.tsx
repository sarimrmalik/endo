"use client";
import { parseDate } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type NotesType = { [date: string]: string };

function Home() {
  const [notes] = useState<NotesType>((): {} => {
    if (typeof window !== "undefined") {
      const from_localStorage = window.localStorage.getItem("notes");
      if (from_localStorage === null || from_localStorage === undefined) {
        return {};
      }

      return `${from_localStorage}`
        ? (JSON.parse(from_localStorage) as NotesType)
        : {};
    }
    return {};
  });

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="flex flex-col gap-2 p-5 rounded-md">
      <h1>Notes</h1>
      {/* Notes entries */}
      <div className="flex flex-col gap-2">
        {Object.keys(notes)
          // Sort chronologically
          .sort((a, b) => {
            return new Date(b).getTime() - new Date(a).getTime();
          })
          .map((entry) => (
            <Link
              key={entry}
              href={`/note/${entry}`}
              className="no-underline hover:underline underline-offset-4 transition-all duration-300 rounded"
            >
              {parseDate(entry)}
            </Link>
          ))}
      </div>
    </main>
  );
}

export default Home;
