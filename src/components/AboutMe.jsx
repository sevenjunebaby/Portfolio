import React from "react";

const AboutMe = () => {
  return (
    <section id="about" >
      <img  className="me" src="me.png" alt="me"></img>
      <div className="x"> 
        <h1>
          WISSAL YAHIA
        </h1>
        <p>
          Software Engineer and Information Systems graduate with a strong foundation in full-stack web development and a growing specialization in Artificial Intelligence, Machine Learning, and Data Science. Experienced in building web applications, backend services, REST
APIs, and data-driven solutions using modern development frameworks and tools. Strong analytical and problem-solving abilities, with
an interest in developing scalable, intelligent, and maintainable software solutions.
        </p>
        <div className="cv">
          <a href="/cv.pdf" target="_blank">
            <img  src="cv.png" alt="cv" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
