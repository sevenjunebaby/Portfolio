import React , { useState } from "react";


const Contact = () => {


  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert("Message sent anonymously!");
      setMessage(""); // Clear input after submission
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <section id="contact" >
     


     <div >
  <h3 className="text-lg font-semibold mb-2">Message Anonymously</h3>
  <form onSubmit={handleSubmit}>
    <textarea
      rows="8"
      placeholder="Type here..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    >
    </textarea>
    <br></br>
    <img
          src="/send.png"
          alt="Send"
          className="cnt-img cursor-pointer "
          onClick={handleSubmit} // Manually trigger form submission
        />
    
  </form>
</div>







      <div className="links">

      <div className="cnt">
      <a href="mailto:yahiawissal76@gmail.com">
          <img src="gmail.png" alt="email" className="cnt-img"></img>
          </a>
        
        </div>
        <div className="cnt">
          <a href="tel:+21656944230">
          <img src="phone.png" alt="phone" className="cnt-img"></img>
          </a>
        
        </div>


      <div className="cnt">
        <a href="https://github.com/sevenjunebaby" ><img src="github.png" alt="github" className="cnt-img"></img></a>
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
      <h2> @copy right reserved 2025</h2>
    </section>
  );
};

export default Contact;
