 import React from "react";
import "./Projects.css";
import hospitalImg from "./images/hospital.png";
import portfolioImage from "./images/portfolio.png";
import flappyImage from "./images/flappy.png";
import EMPImage from "./images/EMP.png";
import OJPImage from "./images/OJP.png";

function Projects({setshowProjects}) {
  const projectList = [
    {
      title: "Hospital Management System",
      image: hospitalImg,
      description: "A full-stack system using React and MongoDB",
      link: "https://github.com/Sha-jpg-star/MERN-Group-Project"
    },
    {
      title: "Portfolio Website",
      image: portfolioImage,
      description: "Personal portfolio built with React",
      link: "https://github.com/Tharukshi-hub/portfolio"
    },
    {
      title: "Online Job Portal",
      image: OJPImage,
      description: "This is a project create using HTML and CSS",
      link: "https://github.com/Tharukshi-hub/Individual-website",
    },
    {
      title: "Employee Payroll System",
      image: EMPImage,
      description: "Third semester project bult with javaScript using Netbeans",
      link: "https://github.com/Tharukshi-hub/Employee-Payroll-System"
    },
    {
      title: "Flappy bird game",
      image: flappyImage,
      description: "A small and simple game create using C#",
      link: "https://github.com/Tharukshi-hub/flappy-bird"
    },
    {
      title: "To-Do List App",
      image: "",
      description: "Simple activity which I were done during the semester vacation"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="project-page">
        <h1>My Projects</h1>
      
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} onClick={() => window.open(project.link, "_blank")}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className="button">
        <button onClick={() => setshowProjects(false)}>Back to Home</button>
      </div>
      </div>
    </section>
  );
}

export default Projects;