import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // adjust if path is different

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      <h1 className="text-xl font-bold">My App</h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all"
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
