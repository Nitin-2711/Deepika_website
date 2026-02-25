import React from 'react';
import Section from '../components/Section';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Asset imports
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const ProjectCard = ({ title, description, tags, github, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass overflow-hidden rounded-3xl group"
    >
      <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              <Github className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Simon Says Game",
      description: "A classic memory sequence game built with vanilla JavaScript and CSS, focusing on logic and DOM manipulation.",
      tags: ["JavaScript", "HTML5", "CSS3", "DOM"],
      github: "https://github.com/deepika749/simon_says",
      image: project1
    },
    {
      title: "Portfolio Website",
      description: "My personal developer portfolio built with React, Tailwind, and Framer Motion for high performance and premium design.",
      tags: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "https://github.com/deepika749",
      image: project2
    },
    {
      title: "Calculator Web App",
      description: "A sleek, responsive calculator with advanced mathematical functions and a modern glassmorphism UI.",
      tags: ["JavaScript", "React", "CSS Grid"],
      github: "https://github.com/deepika749/Calculator_web",
      image: project3
    }
  ];

  return (
    <Section id="projects" className="bg-white dark:bg-slate-950">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">A selection of my recent work involving frontend systems and full-stack integration.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2 md:px-0">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
