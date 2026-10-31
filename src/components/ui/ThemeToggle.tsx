"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { motion } from "motion/react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-border border-2 border-border flex items-center p-0.5">
        <div className="w-5 h-5 bg-muted-foreground" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-14 h-7 bg-border border-2 border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        className="w-5 h-5 bg-foreground flex items-center justify-center absolute left-0.5"
        animate={{
          x: isDark ? 0 : 28,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className="text-[10px]">{isDark ? "☾" : "☀"}</span>
      </motion.div>
    </button>
  );
}
