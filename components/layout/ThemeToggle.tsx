"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark mode"
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-card text-foreground"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}
