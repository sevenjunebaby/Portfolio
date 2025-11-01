import React from "react";

const AboutMe = () => {
  return (
    <section id="about" >
      <img src="ME.png  " alt="me"></img>

      <div className="x"> 
      

      <h1 className="gradient-text">
      Wissal Yahia
    </h1>
     
      <p>
    Software Engineer with 3 years of experience,Ethical Hacking Learner & AI Engineer Learner specializing in Generative
AI and Data Science. A versatile professional who can be described as a Full-Stack
Developer or a Multidisciplinary Software Engineer. </p>
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
