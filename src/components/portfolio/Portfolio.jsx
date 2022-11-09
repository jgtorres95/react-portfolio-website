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
    description:
      "The backend REST API for the myFlix application. The API was built using Node.js, Mongoose, and Express. It interacts with a Movies and Users collection in MongoDB.",
    github: "https://github.com/jgtorres95/movie_api",
  },
  {
    id: 2,
    image: IMG2,
    title: "myFlix-React",
    description:
      "The client-side of the myFlix application that allows users to access data about their favorites movies, directors, and genres. Users can also register for an account and save movies to their favorites. The application is built using the MERN stack",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Meet App",
    description:
      "Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. It uses Google OAuth2 for login, Amazon Lambda functions for hosting, and Enzyme for testing",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Pokedex",
    description:
      "A small web application built with Javascript, HTML, CSS, jQuery, and Bootstrap that allows users to search through a list of pokemon loaded from the PokeAPI. Users can click on a pokemon's name to display a detailed view of each pokemon",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "myFlix-Angular",
    description:
      "A client-side redesign of the myFlix application This application supports the same features as myFlix-React, but is built using Angular and Angular Material",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "To Do List App",
    description:
      "A Simple to-do-list application built using jQuery that allows users to add, delete, rearrange, and mark tasks as complete",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 7,
    image: IMG7,
    title: "ChatMe",
    description:
      "A chat application for mobile devices that allows users to chat, share images, and share their location. The application is built using Gifted Chat and React Native Async Strorage. Data for the application is stored using Firestore",
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
