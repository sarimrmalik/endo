import Editor from "@/app/components/editor";

function Note({ params }: { params: { date: string } }) {
  return (
    <main className="flex flex-col">
      <Editor entryDate={params.date} />
    </main>
  );
}

export default Note;
