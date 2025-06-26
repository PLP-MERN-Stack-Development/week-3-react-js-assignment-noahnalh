import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = (useState < "light") | ("dark" > "light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <header className="flex items-center justify-between p-4 shadow-md dark:shadow-lg">
        <h1 className="text-2xl font-bold">Responsive UI</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 transition-colors duration-300 bg-gray-200 rounded dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-4 transition-transform duration-500 transform bg-gray-100 rounded shadow hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="mb-2 text-xl font-semibold">Card {i + 1}</h2>
            <p>This card adapts to light/dark mode and screen size.</p>
          </div>
        ))}
      </main>
    </div>
  );
}
