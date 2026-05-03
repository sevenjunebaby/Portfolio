import React from "react";

const Contact = () => {
  return (
    <section id="contact" >
      <h3>Connect</h3>
      <div className="links">
        <div className="cnt">
          <a href="mailto:yahiawissal76@gmail.com">
            <img src="gmail.png" alt="email" className="cnt-img"></img>
          </a>
        </div>
        <div className="cnt">
          <a href="https://leetcode.com/u/sevenjunebaby/">
            <img src="leetcode.png" alt="leetcode" className="cnt-img"></img>
          </a>
        </div>
        <div className="cnt">
          <a href="https://github.com/sevenjunebaby" >
            <img src="github.png" alt="github" className="cnt-img"></img>
          </a>
        </div>
        <div className="cnt"> 
          <a href="https://www.linkedin.com/in/wissal-yahia-16793a19b/"> 
            <img src="linkedin.png" alt="linkedin" className="cnt-img" ></img>
          </a>  
        </div>
        <div className="cnt">
          <a href="https://www.youtube.com/@sevenjunebaby">
            <img src="youtube.png" alt="youtube" className="cnt-img"></img>
          </a>
        </div>
      </div>
      <h6>  Made by @Me thanks for visiting my portfolio ♡</h6>
    </section>
  );
};

export default Contact;
