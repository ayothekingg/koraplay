import React from "react";
import Creators from "./Home/CreatorSection";
import Friends from "./Home/Friends";
import HeroSection from "./Home/HeroSection";
import JoinSection from "./Home/JoinSection";
import Navbar from "./Home/Navbar";
import Recognize from "./Home/Recognize";
import Best from "./Home/Best";
import Love from "./Home/Love";
import Footer from "./Home/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`App
    ${darkMode && "dark"}`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <Creators />
      <JoinSection />
      <Friends />
      <Recognize />
      <Best />
      <Love />
      <Footer />
    </div>
  );
}

export default App;
