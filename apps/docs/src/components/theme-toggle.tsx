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
      className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center gap-2 rounded-lg bg-neutral-900 text-sm text-white transition-[transform,opacity] hover:opacity-90 active:scale-95 active:opacity-80"
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
