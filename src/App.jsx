import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskManager from "./components/TaskManager";
import ItemList from "./components/ItemList";
import PostList from "./components/PostList";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const active = saved || (prefersDark ? "dark" : "light");

    setTheme(active);
    document.documentElement.classList.toggle("dark", active === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition"
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Logos Centered */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react w-20" alt="React logo" />
        </a>
      </div>

      <h1 className="text-center text-3xl font-bold mt-6">Vite + React</h1>

      <div className="card text-center mt-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>

      {/* Custom Components */}
      <div className="my-10 px-4">
        <TaskManager />
        <PostList />
      </div>
    </div>
  );
}

export default App;
