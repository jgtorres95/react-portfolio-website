import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jose Torres
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jose-torres-64a406119/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/jgtorres95" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100013693839518"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
