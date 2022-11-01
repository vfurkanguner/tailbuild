import React, { useState, createContext, useContext } from "react";
import { ThemeContextType } from "../@types/theme";

type Props = {
  children: React.ReactNode;
};

const Context = createContext<ThemeContextType | null>({} as ThemeContextType);

export default function ThemeProvider({ children }: Props) {
  const [activeColor, setActiveColor] = useState("green");
  return (
    <Context.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </Context.Provider>
  );
}

export const useTheme = () => useContext(Context);
