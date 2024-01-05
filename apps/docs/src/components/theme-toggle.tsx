"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Set mounted to true after the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="absolute top-5 right-5 active:scale-95 h-8 w-8 hover:opacity-90 active:opacity-80 transition-[transform,opacity] text-sm flex items-center justify-center gap-2 rounded-lg bg-neutral-900 text-white"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun size={16} weight="fill" />
      ) : (
        <Moon size={16} weight="fill" />
      )}
    </button>
  );
}
