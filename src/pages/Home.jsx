import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Project from "../components/Project";
import Scroller from "../components/Scroller";
import Education from "../components/Education";

const Home = ({projects }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <div className={`overlay ${scrollPosition > 0.5 * window.innerHeight ? 'active' : ''}`} />
      <HomeAbout className={scrollPosition > 0.7 * window.innerHeight ? 'active' : ''} />
        <Scroller/>
      <Project projects={projects} />
      <Education />
      <div className="footer-message">
        <p>Thanks for visiting!✌️🙏</p>
      </div>
    </>
  );
};

export default Home;
