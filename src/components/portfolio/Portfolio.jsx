import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "myFlix API",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "myFlix-React",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Meet App",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Pokedex",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "ChatMe",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "myFlix-Angular",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 7,
    image: IMG7,
    title: "To Do List App",
    github: "https://github.com",
    demo: "https://google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="myFlix" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://google.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
