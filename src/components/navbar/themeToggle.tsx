"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | null;
  setTheme: (arg0: string) => void;
}) {
  /* moved theme state to parent component*/
  function handleToggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains("light") ? "light" : "dark";

    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("portfolio-theme", newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
  }

  return (
    <button
      onClick={handleToggleTheme}
      className="max-w-max rounded-full p-1 text-foreground hover:bg-gray-100 dark:hover:bg-neutral-500/20"
    >
      <AnimatePresence>
        {theme === "light" ? (
          <motion.svg
            key="sun-icon"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            exit={{
              rotate: 180,
              display: "none",
              transition: { duration: 0.5 },
            }}
            // transition={{ duration: 2 }}
            className="sun-icon"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="19px"
            width="19px"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 3v1"></path>
            <path d="M12 20v1"></path>
            <path d="M3 12h1"></path>
            <path d="M20 12h1"></path>
            <path d="m18.364 5.636-.707.707"></path>
            <path d="m6.343 17.657-.707.707"></path>
            <path d="m5.636 5.636.707.707"></path>
            <path d="m17.657 17.657.707.707"></path>
          </motion.svg>
        ) : (
          <motion.svg
            key="moon-icon"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            exit={{
              rotate: 180,
              display: "none",
              transition: { duration: 0.5 },
            }}
            // transition={{ duration: 2 }}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="19px"
            width="19px"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            <path d="M19 3v4"></path>
            <path d="M21 5h-4"></path>
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
