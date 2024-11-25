import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeStore } from "../../../store/use-theme-store";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      className="p-3 rounded-md border dark:border-gray-500"
      onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}
