import React , { useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


const App = () => {


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure scrolling works
  }, []);
  return (
    <div>
      <title>Wissal Yahia</title>
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <main className="px-4 py-6">
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;