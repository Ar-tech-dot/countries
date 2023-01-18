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

  useEffect(() => {
    let lastScroll = 0;
    const defaultOffset = 150;
    const headerScrol = document.querySelector(".header")!;

    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => headerScrol.classList.contains("hide");

    const lazyScroll = () => {
      if (
        scrollPosition() > lastScroll &&
        !containHide() &&
        scrollPosition() > defaultOffset
      ) {
        //scroll down
        headerScrol.classList.add("hide");
      } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        headerScrol.classList.remove("hide");
      }

      lastScroll = scrollPosition();
    };

    window.addEventListener("scroll", lazyScroll);

    return () => window.removeEventListener("scroll", lazyScroll);
  }, []);

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
