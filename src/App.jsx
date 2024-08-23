import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import Header from "./components/Header.jsx";
import Video from "./assets/videos/background.webm"
import Socials from "./components/Socials.jsx";
import ImgKymall from "./assets/images/ProjectOne.webp"
import ImgTodoApp from "./assets/images/ProjectTwo.webp"
import ImgStonePaperScissor from "./assets/images/ProjectThree.webp"
import ImgGalleryOfReflections from "./assets/images/ProjectFour.webp"
import Footer from "./components/Footer.jsx";


function App() {
  const projects = [
    {
      title: 'Kymall',
      image: ImgKymall,
      technology: ['HTML', 'CSS', 'JavaScript'],
      description: 'A shopping website with basic product listing and cart functionality.',
      link: 'https://krishna573821.github.io/ClothesStore/' 
    },
  ];
  
  return (
    <>
    <div className="black-background-permanent"></div>
      <div className="main-container">
        <video autoPlay loop muted src={Video}></video>
        <Socials />
        <Header />
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
