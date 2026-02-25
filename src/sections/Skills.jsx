import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const SkillCard = ({ name, iconSlug, customUrl, color, category }) => {
  const iconUrl = customUrl || `https://cdn.simpleicons.org/${iconSlug}/${color.replace('#', '')}`;
  
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border border-slate-100 dark:border-slate-800"
    >
      <div 
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm p-2"
      >
        <img 
          src={iconUrl} 
          alt={name} 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`;
          }}
        />
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-slate-200">{name}</h4>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{category}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", iconSlug: "react", color: "#61DAFB", category: "Frontend" },
        { name: "HTML5", iconSlug: "html5", color: "#E34F26", category: "Frontend" },
        { name: "JavaScript", iconSlug: "javascript", color: "#F7DF1E", category: "Frontend" },
        { name: "Tailwind CSS", iconSlug: "tailwindcss", color: "#06B6D4", category: "Frontend" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", iconSlug: "nodedotjs", color: "#339933", category: "Backend" },
        { name: "MongoDB", iconSlug: "mongodb", color: "#47A248", category: "Backend" },
        { name: "Express", iconSlug: "express", color: "#000000", category: "Backend" },
        { name: "MySQL", iconSlug: "mysql", color: "#4479A1", category: "Backend" },
      ]
    },
    {
      title: "Programming",
      skills: [
        { 
          name: "Java", 
          customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
          color: "#ED8B00", 
          category: "Language" 
        },
        { name: "C++", iconSlug: "cplusplus", color: "#00599C", category: "Language" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", iconSlug: "git", color: "#F05032", category: "Tool" },
        { name: "GitHub", iconSlug: "github", color: "#181717", category: "Tool" },
        { 
          name: "VS Code", 
          customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
          color: "#007ACC", 
          category: "Tool" 
        },
        { 
          name: "Firebase", 
          customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
          color: "#FFCA28", 
          category: "Tool" 
        },
      ]
    }
  ];

  return (
    <Section id="skills">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="mb-4">
          Technical <span className="text-primary">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-30" />
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-0">
        {skillCategories.map((cat, i) => (
          <div key={i} className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4 tracking-tight">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <SkillCard key={j} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
