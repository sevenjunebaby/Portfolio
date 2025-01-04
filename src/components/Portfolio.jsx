import React from "react";

const Portfolio = () => {
  const projects = [
    { name: "Project 1", description: "A cool project about X.", link: "#" },
    { name: "Project 2", description: "Another cool project about Y.", link: "#" },
  ];

  return (
    <section id="portfolio" className="py-6">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
