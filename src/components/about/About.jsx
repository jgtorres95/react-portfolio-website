import React from "react";
import "./about.css";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import City from "../city/City.jsx";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <City />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <small>
                Bachelor's in Mathematics/Full Stack Web Developer Certificate
              </small>
            </article>

            <article className="about__card">
              <BsBriefcaseFill className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <BsBriefcaseFill className="about__icon" />
              <h5>Projects</h5>
              <small>80+ projects</small>
            </article>
          </div>

          <p>
            My name is Jose and I am a Web Developer from California. In my free
            time I enjoy watching sports, staying fit, and listening to music. I
            have a passion for solving complex problems using creative and
            critical thinking skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
