import { UseTheme } from "./Context"


const ThemeButton = () => {
    const {theme , toggleTheme} = UseTheme();
  return (
    <button onClick={toggleTheme}>

        switch to {theme === "light" ? "Dark" : "Light"} Mode

    </button>
  );
};

export default ThemeButton