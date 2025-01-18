import React from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import "../styles/TechnologiesGrid.css";

const TechnologiesGrid = () => {
  const technologies = [
    { name: "React", icon: <FaReact size={60} color="#61dafb" /> },
    { name: "Python", icon: <FaPython size={60} color="#3776ab" /> },
    { name: "Java", icon: <FaJava size={60} color="#007396" /> },
    { name: "JavaScript", icon: <FaJs size={60} color="#f7df1e" /> },
    { name: "Node.js", icon: <FaNodeJs size={60} color="#68a063" /> },
    { name: "CSS3", icon: <FaCss3Alt size={60} color="#2965f1" /> },
    { name: "HTML5", icon: <FaHtml5 size={60} color="#e34f26" /> },
  ];

  return (
    <div className="technologies-grid-container">
      <h2 className="grid-heading">Technologies I Work With</h2>
      <div className="grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="grid-item">
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesGrid;
