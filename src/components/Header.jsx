import React from "react";

const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  const headerHeight = document.querySelector("header").offsetHeight;
  
  window.scrollTo({
    top: element.offsetTop - headerHeight - 20,
    behavior: "smooth",
  });
};

const Header = () => {
  return (
    <header >
      <nav>
        <h4  href="#about" onClick={(e) => handleScroll(e, "about")} >ABOUT</h4>
        <h4 href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")} >QUALIFICATIONS</h4>
        <h4 href="#projects" onClick={(e) => handleScroll(e, "projects")} >PROJECTS</h4>
        <h4  href="#contact" onClick={(e) => handleScroll(e, "contact")} >CONTACT</h4>
      </nav>
    </header>
  );
};

export default Header;
