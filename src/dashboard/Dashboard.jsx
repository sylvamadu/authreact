import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Styles from "./Dashboard.module.css";
import useLocalStorage from "use-local-storage";

function Dashboard() {
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
    <div className={Styles.dashboard} data-theme={theme}>
      <div className={Styles.sidebar}>
        <Sidebar />
      </div>
      <div className={Styles.content}>
        <div className={Styles.navbar}>
          <Navbar theme={theme} switchTheme={switchTheme} />
        </div>
        <div className={Styles.main}>
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
