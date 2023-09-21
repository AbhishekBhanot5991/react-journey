import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //actual change in a theme
useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="p-4 bg-red-800 text-center m-5 font-semibold text-white">
        Abhishek
      </div>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebutton */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
