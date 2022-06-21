import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./Content";
import useLocalStorage from "use-local-storage";

function DefaultLayout() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Content />
      <Footer />
    </div>
  );
}
 
export default DefaultLayout;
