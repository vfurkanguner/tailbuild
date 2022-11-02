import React, { useState, createContext, useContext } from "react";
import { ThemeContextType } from "../@types/theme";

type Props = {
  children: React.ReactNode;
};

const Context = createContext<ThemeContextType | null>({} as ThemeContextType);

export default function ThemeProvider({ children }: Props) {
  const [activeTheme, setActiveTheme] = useState("light");


  const toggleTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  const openDark = () => {
    setActiveTheme("dark");
  };
  const openLight = () => {
    setActiveTheme("light");
  };
  return (
    <Context.Provider value={{ activeTheme, toggleTheme, openDark, openLight  }}>
      {children}
    </Context.Provider>
  );
}

export const useTheme = () => useContext(Context);
