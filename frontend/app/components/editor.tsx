"use client";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import {
  BoldIcon,
  CheckIcon,
  CodeIcon,
  HeadingIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  StrikethroughIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { parseDate } from "@/lib/utils";

const Toolbar = ({ editor }: { editor: any }) => {
  return (
    <BubbleMenu
      editor={editor}
      className="border bg-slate-50 w-full p-1 rounded-md"
      tippyOptions={{ duration: 100 }}
    >
      <div className="rounded flex flex-wrap gap-2">
        {/* Heading */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <HeadingIcon />
        </button>

        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <BoldIcon />
        </button>

        {/* Strikethrough */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikethroughIcon />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <ItalicIcon />
        </button>

        {/* Code */}
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <CodeIcon />
        </button>

        {/* Bullets */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <ListIcon />
        </button>

        {/* Numbers */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <ListOrderedIcon />
        </button>

        {/* Checklist */}
        <button
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={editor.isActive("taskList") ? "is-active" : ""}
        >
          <CheckIcon />
        </button>
      </div>
    </BubbleMenu>
  );
};

const Editor = ({ entryDate }: { entryDate?: string }) => {
  const [content, setContent] = useState("");
  const now = new Date();
  const today = entryDate ? entryDate : now.toISOString().split("T")[0];

  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Image.configure({
          inline: true,
        }),
        Dropcursor,
        Placeholder.configure({
          placeholder: "Start typing...",
          emptyNodeClass:
            "first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
        }),
        TaskList.configure({
          HTMLAttributes: {
            class: "pl-8 list-none flex",
          },
        }),
        TaskItem.configure({
          nested: true,
        }),
      ],
      content: content,
      onUpdate: ({ editor }) => {
        const json = editor.getHTML();
        const notes = JSON.parse(localStorage.getItem("notes") || "{}");
        notes[today] = json; // Update the entry for today's date
        localStorage.setItem("notes", JSON.stringify(notes));
      },
      editorProps: {
        attributes: {
          class: "focus:outline-none",
        },
      },
    },

    []
  );

  // Get content from local storage upon page load
  useEffect(() => {
    const savedContent = JSON.parse(localStorage.getItem("notes") || "{}")[
      today
    ];
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Update local storage when there is a change
  useEffect(() => {
    if (content && editor) {
      // set content only if it exists
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-slate-400">{parseDate(today)}</h1>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
