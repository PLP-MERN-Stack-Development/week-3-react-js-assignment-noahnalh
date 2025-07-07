import { useEffect, useState } from "react";
import TaskManager from "./components/TaskManager";
import PostList from "./components/PostList";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const active = saved || (prefersDark ? "dark" : "light");

    setTheme(active);

    if (active === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Theme Toggle */}
      <header className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition"
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <TaskManager />
        <PostList />
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
        © 2025 Noah Nalh. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
