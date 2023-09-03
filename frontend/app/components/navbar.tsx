"use client";
import { useGlobalShortcut } from "@/lib/hooks/use-global-shorcut";
import { appWindow } from "@tauri-apps/api/window";
import { HomeIcon, ShellIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   setVisible(await appWindow.isVisible());
  // }, []);

  // Hide window if "escape" is toggled from the keyboard
  // useEffect(() => {
  //   const handleEscape = async (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       await appWindow.hide();
  //     }
  //   };

  //   window.addEventListener("keydown", handleEscape);

  //   return () => window.removeEventListener("keydown", handleEscape);
  // }, []);

  // Register global shortcut for toggling application with Command + `
  // const shortcutHandler = useCallback(async () => {
  //   if (visible) await appWindow.hide();
  //   else await appWindow.show();
  // }, [visible]);
  // useGlobalShortcut("Command+`", shortcutHandler);

  return (
    <header className="absolute right-5 top-5">
      <nav className="flex flex-col items-center">
        {/* {pathname !== "/home" && (
          <Link href="/home" className="group">
            <HomeIcon className="w-7 h-7 text-slate-500 group-hover:text-slate-600 group-hover:bg-slate-100 p-1 rounded transition-all duration-300" />
          </Link>
        )} */}
        {pathname === "/home" && (
          <Link href="/" className="group">
            <ShellIcon className="w-7 h-7 text-slate-500 group-hover:text-slate-600 group-hover:bg-slate-100 p-1 rounded transition-all duration-300" />
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
