import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
