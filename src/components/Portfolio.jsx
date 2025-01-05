import React from "react";

const Portfolio = () => {
  

  return (
    <section id="portfolio" className="py-6">
       <div className="box">
         <img src="dev.png" alt="webandmobile" />
        <p>
        Web and Mobile Development

    Web Development: Technologies like HTML, CSS, JavaScript, React, Node.js, and Laravel will help you build interactive websites and web applications.
    Mobile Development: You can use frameworks like React Native, Flutter, or Java for Android development to create mobile apps.
    </p> </div>
       <div className="box">
       <img src="ai.png" alt="aiandml" />
   <p>

        AI and Machine Learning (ML)

    Programming languages like Python and libraries such as TensorFlow, PyTorch, and scikit-learn are essential.
    Learn about data preprocessing, neural networks, and AI concepts like NLP (Natural Language Processing) and computer vision.
    Tools like LangChain and your experience with chatbots are a great foundation for AI-driven applications.
    </p>  </div>
       <div className="box">
       <img src="cyber.png" alt="cyber" />
       <p>
        Cybersecurity

Explore concepts like network security, encryption, penetration testing, and ethical hacking.
Tools like Kali Linux, Wireshark, and Burp Suite can help you learn practical security techniques.
Certifications like CEH (Certified Ethical Hacker) or CISSP (Certified Information Systems Security Professional) can boost your career in this domain.
</p> </div>

    </section>
  );
};

export default Portfolio;
