import React, { FC } from "react";
import { IoLogoGithub } from "react-icons/io5";

const Footer: FC = () => (
  <footer className="footer">
    <div className="container footer__wrapper">
      <a
        className="footer__git"
        href="https://github.com/Ar-tech-dot/countries"
        target="_blank"
      >
        <IoLogoGithub size="30px" /> <span>Project on GitHub</span>
      </a>
    </div>
  </footer>
);

export default Footer;
