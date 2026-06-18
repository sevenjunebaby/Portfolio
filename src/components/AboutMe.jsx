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
          Software Engineer & Information Systems Graduate seeking a Software Engineer position. Passionate about AI Engineering, with a strong interest in Generative AI, Machine Learning, and Data Science. Experienced in full-stack software development and committed to applying industry best practices through real-world projects. Multidisciplinary engineer with strong analytical, problem-solving, and software design skills, capable of developing scalable and intelligent solutions.
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
