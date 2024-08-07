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
      title: 'Gallery of Reflections',
      image: ImgGalleryOfReflections,
      technology: ['HTML', 'CSS', 'JavaScript'],
      description: 'An image gallery showcasing various reflections with interactive features.',
      link: 'https://krishna573821.github.io/GalleryOfReflections/' 
    },
    {
      title: 'Kymall',
      image: ImgKymall,
      technology: ['HTML', 'CSS', 'JavaScript'],
      description: 'A shopping website with basic product listing and cart functionality.',
      link: 'https://krishna573821.github.io/ClothesStore/' 
    },
    {
      title: 'Simple Todo App',
      image: ImgTodoApp,
      technology: ['HTML', 'CSS', 'JavaScript'],
      description: 'A simple todo app that allows users to add, edit, and delete tasks.',
      link: 'https://krishna573821.github.io/simpleToDo/' 
    },
    {
      title: 'Stone Paper Scissor Game',
      image: ImgStonePaperScissor,
      technology: ['HTML', 'CSS', 'JavaScript'],
      description: 'A game where you can play Stone Paper Scissor with the computer.',
      link: 'https://krishna573821.github.io/Stone_Paper_Scissor/' 
    }
  ];
  
  return (
    <>
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
