import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-6">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="links">
      <div className="cnt">
        <a href="https://github.com/sevenjunebaby" ><img src="github.png" alt="github" className="cnt-img"></img></a>
        </div>
        <div className="cnt"> 
          <a href="https://www.linkedin.com/in/wissal-yahia-16793a19b/"> 
          <img src="linkedin.jpg" alt="linkedin" className="cnt-img" ></img>
          </a>
        
        
        </div>
        <div className="cnt">
          <a href="https://www.youtube.com/@sevenjunebaby">
          <img src="youtube.png" alt="youtube" className="cnt-img"></img>
          </a>
        
        </div>
       

      </div>
     
    </section>
  );
};

export default Contact;
