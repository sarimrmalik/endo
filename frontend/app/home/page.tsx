"use client";
import { parseDate } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type NotesType = { [date: string]: string };

function Home() {
  const [notes, setNotes] = useState<NotesType>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load all entries from localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.match(/^\d{4}-\d{2}-\d{2}$/)) {
          const value = localStorage.getItem(key);
          if (value) {
            setNotes((prevNotes) => ({
              ...prevNotes,
              [key]: value,
            }));
          }
        }
      }
    }
  }, []);

  return (
    <main className="flex flex-col gap-2 p-7 rounded-md">
      <h1 className="text-xl text-slate-700 font-bold">Notes</h1>
      <div className="flex flex-col gap-2">
        {Object.keys(notes)
          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
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
