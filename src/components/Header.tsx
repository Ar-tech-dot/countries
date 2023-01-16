import React, { useEffect } from "react";
import { useState } from "react";
import { IoMoon, IoMoonOutline, IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="container header__wrapper">
        <Link to="/" className="header__title">
          Where is the world?
        </Link>
        <div className="header__switch-theme" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoMoonOutline size="14px" />
          ) : (
            <IoMoon size="14px" />
          )}
          <span>{theme} Theme</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
