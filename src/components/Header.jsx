import React from "react";

const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  const headerHeight = document.querySelector("header").offsetHeight;
  
  window.scrollTo({
    top: element.offsetTop - headerHeight - 20, // Adjust 20px as needed
    behavior: "smooth",
  });
};

const Header = () => {
  return (
    <header >
      <nav>
        <a href="#about" onClick={(e) => handleScroll(e, "about")} >About</a>
        <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")} >Portfolio</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} >Contact</a>
      </nav>
    </header>
  );
};


export default Header;
