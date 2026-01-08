import { CiDark, CiBrightnessDown } from "react-icons/ci";
import { useTheme } from "../contexts/ThemeContext";


export default function ThemeToggleBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-xl transition">
                {theme === "light" ? <CiDark size="32" /> : <CiBrightnessDown  size="32" />}
            </button>

        </>
    )
}

