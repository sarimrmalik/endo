import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { useState } from "react";

function CreateBookmarkDialog() {
  const [URL, setURl] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <Dialog>
      <DialogTrigger>
        <button className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex">
          <PlusIcon className="text-slate-500 group-hover:text-slate-600" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add bookmark</DialogTitle>
          <div className="flex flex-col gap-2">
            <input
              placeholder="URL"
              onChange={(e) => setURl(e.target.value)}
              value={URL}
            />
            <textarea
              placeholder="Notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateBookmarkDialog;
