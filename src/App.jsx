import React, { useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    const sections = document.querySelectorAll("main > section");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      <title>Wissal Yahia</title>
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <main className="px-4 py-6">
        <AboutMe />
        <Portfolio />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
