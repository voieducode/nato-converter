import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { getTheme, setTheme } from "../lib/theme";

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState(getTheme);

  const toggleTheme = () => {
    const themes: Array<"light" | "dark" | "system"> = [
      "light",
      "dark",
      "system",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    setThemeState(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 p-2 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" && <Sun size={24} />}
      {theme === "dark" && <Moon size={24} />}
      {theme === "system" && <Monitor size={24} />}
    </button>
  );
}
