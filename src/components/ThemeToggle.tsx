import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg ${
          theme === "dark"
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white transition-colors z-50`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;

// onClick = { toggleTheme };
