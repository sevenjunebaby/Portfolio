import React from "react";

const AboutMe = () => {
  return (
    <section id="about" >
      <img src="Me.png  " alt="me"></img>

      <div className="x"> 
      

      <h1 >
      Wissal Yahia
    </h1>
     
      <p>
     AI Engineer Student with 3 years of experience, specializing in Generative AI and Data Science.
      A versatile professional who can be described as a Full-Stack Developer or a Multidisciplinary Software Engineer. </p>
      <div className="cv">
        <a href="/cv.pdf" download>
        <img src="cv.png" alt="cv"  />
      </a>
      
</div>

      </div>



    </section>
  );
};

export default AboutMe;
