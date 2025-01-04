import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
      
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        
      </nav>
    </header>
  );
};

export default Header;
