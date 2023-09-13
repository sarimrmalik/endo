"use client";
import { LogicalSize, appWindow } from "@tauri-apps/api/window";
import { Maximize2Icon, ShrinkIcon } from "lucide-react";
import Tooltip from "./tooltip";
import { useState } from "react";

function MaximizeButton() {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = async () => {
    if (isMaximized) {
      await appWindow.setSize(new LogicalSize(600, 400));
      await appWindow.center();
    } else await appWindow.maximize();
    setIsMaximized((prev) => !prev);
  };
  return (
    <Tooltip desc={isMaximized ? "Collapse" : "Expand"}>
      <button
        className="hover:bg-slate-100 p-1 w-7 h-7 rounded transition-all duration-300 group items-center flex"
        onClick={handleMaximize}
      >
        {isMaximized ? (
          <ShrinkIcon className="text-slate-500 group-hover:text-slate-600" />
        ) : (
          <Maximize2Icon className="text-slate-500 group-hover:text-slate-600" />
        )}
      </button>
    </Tooltip>
  );
}

export default MaximizeButton;
