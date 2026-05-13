type Props = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeBtn = ({ theme, toggleTheme }: Props) => {
  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg
        bg-black text-white
        dark:bg-white dark:text-black
        transition-all duration-300
        cursor-pointer
      "
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeBtn;