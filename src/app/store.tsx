"use client";
import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface AppState {
  count: number;
  theme: string | null;
  setTheme: (arg0: string) => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with an initial value
const AppContext = createContext<AppState | undefined>(undefined);

// Create a provider component
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));

  return (
    <AppContext.Provider value={{ theme, setTheme, count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
