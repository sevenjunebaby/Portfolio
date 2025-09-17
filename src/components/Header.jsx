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
        <a className="gradient-text" href="#about" onClick={(e) => handleScroll(e, "about")} >About</a>
        <a className="gradient-text" href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")} >Portfolio</a>
        <a className="gradient-text" href="#contact" onClick={(e) => handleScroll(e, "contact")} >Contact</a>
      </nav>
    </header>
  );
};


export default Header;
