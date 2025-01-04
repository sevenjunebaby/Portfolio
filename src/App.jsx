import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main className="px-4 py-6">
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
