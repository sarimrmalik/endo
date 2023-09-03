"use client";
import { GoalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Tooltip from "./tooltip";

function GoalsButton() {
  const router = useRouter();
  return (
    <Tooltip desc="Goals">
      <button
        className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex"
        onClick={() => router.push("/goals")}
      >
        <GoalIcon className="text-slate-500 group-hover:text-slate-600" />
      </button>
    </Tooltip>
  );
}

export default GoalsButton;
