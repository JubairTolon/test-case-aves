import { FaSun, FaMoon } from "react-icons/fa";

import { useThemeStore } from "../../../store/use-theme-store"

export default function ThemeToggleButton() {
  const { theme, setTheme } = useThemeStore()

  const toggleTheme = () => {
    const newTheme: string = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button className="p-3 rounded-md border dark:border-gray-500" onClick={toggleTheme}>
      {
        theme === 'light' 
          ? <FaMoon size={18} /> 
          : <FaSun size={18} />
      }
    </button>
  )
}
