import { createContext, useContext, useEffect, useState } from "react";
import { getStorage, removeStorage, saveStorage } from "../storage/storage";

const Theme = createContext();

const DarkModeProvider = ({ children }) => {
  const mode = getStorage("theme");
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("darkMode");
    }
  }, [mode]);

  const handleChange = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    if (isDarkMode) {
      document.body.classList.add("darkMode");
      saveStorage("theme", "dark");
    } else {
      document.body.classList.remove("darkMode");
      removeStorage("theme");
    }
  };

  const styles = {
    handleChange,
  };

  return <Theme.Provider value={styles}>{children}</Theme.Provider>;
};

export const useDarkMode = () => useContext(Theme);
export default DarkModeProvider;
