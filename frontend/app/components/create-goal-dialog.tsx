import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { useState } from "react";
import Tooltip from "./tooltip";

function CreateGoalDialog() {
  const [goal, setGoal] = useState("");

  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip desc="Create goal">
          <button className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex">
            <PlusIcon className="text-slate-500 group-hover:text-slate-600" />
          </button>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add goal</DialogTitle>
          <div className="flex flex-col gap-2">
            <input
              placeholder="Enter goal"
              onChange={(e) => setGoal(e.target.value)}
              value={goal}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateGoalDialog;
