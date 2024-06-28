"use client"
import { useEffect } from "react";

/* call this hook from your root component */
const useTheme = () => {
  useEffect(() => {
    /* Updates theme */
      const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
      // remove any "dark" or "light" class before applying new theme
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(savedTheme);
  }, []);
};
export default useTheme;
