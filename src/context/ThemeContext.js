import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("mini-task-manager.theme", "light");
  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
