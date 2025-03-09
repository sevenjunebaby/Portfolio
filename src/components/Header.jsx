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
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:underline">About</a>
        <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")} className="hover:underline">Portfolio</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};


export default Header;
