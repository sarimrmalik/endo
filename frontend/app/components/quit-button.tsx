import { exit } from "@tauri-apps/api/process";
import { XIcon } from "lucide-react";
import Tooltip from "./tooltip";

function QuitButton() {
  const handleQuit = async () => {
    await exit(1);
  };
  return (
    <Tooltip desc="Quit app">
      <button
        className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex"
        onClick={handleQuit}
      >
        <XIcon className="text-slate-500 group-hover:text-slate-600" />
      </button>
    </Tooltip>
  );
}

export default QuitButton;
