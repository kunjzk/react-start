import { useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // This function is used to set the theme mode to dark
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // This function is used to set the theme mode to light
  const lightTheme = () => {
    setThemeMode("light");
  };

  // This useEffect is used to add "light"/"dark" classes to the entire html document (manipulating using Tailwind directly)
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]); // useEffect says that if anything changes in the state, I will run a function. In this case, we want to run a function when themeMode changes.

  // Now we just need to trigger the darkTheme or lightTheme functions when the button is clicked
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
