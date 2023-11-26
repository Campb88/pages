import React from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  if (!data) return null;

  const { project, github, name } = data;

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          
          <h1 className="responsive-headline">{name}</h1>
          <h3>Closing the Accessibility Gap</h3>
          <h3>Transforming Education</h3>
          <h3>Advocating for Inclusivity</h3>
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <li>Projects</li>
            </a>
            <a href={github} className="button btn github-btn">
              <li>Github</li>
            </a>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;