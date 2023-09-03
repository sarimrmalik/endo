import {
  isRegistered,
  register,
  ShortcutHandler,
  unregister,
} from "@tauri-apps/api/globalShortcut";
import { useEffect } from "react";

// A React hook to register global shortcuts using Tauri's globalShortcut API.
export const useGlobalShortcut = (
  shortcut: string,
  shortcutHandler: ShortcutHandler
) => {
  useEffect(() => {
    let ignore = false;

    async function registerShortcut() {
      const isShortcutRegistered = await isRegistered(shortcut);
      if (!ignore && !isShortcutRegistered) {
        await register(shortcut, shortcutHandler);
      }
    }

    void registerShortcut().catch((err) => {
      console.error(`Failed to register global shortcut '${shortcut}'`, err);
    });

    return () => {
      ignore = true;
      void unregister(shortcut);
    };
  }, [shortcut, shortcutHandler]);
};
