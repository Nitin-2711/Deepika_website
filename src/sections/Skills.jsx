import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const SkillCard = ({ name, icon, category }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass p-4 rounded-xl flex items-center gap-4 transition-all duration-300"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-slate-200">{name}</h4>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{category}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", category: "Frontend" },
        { name: "HTML5/CSS3", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", category: "Backend" },
        { name: "MongoDB", category: "Backend" },
        { name: "SQL", category: "Backend" },
        { name: "Express", category: "Backend" },
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", category: "Language" },
        { name: "C++", category: "Language" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", category: "Tool" },
        { name: "GitHub", category: "Tool" },
        { name: "VS Code", category: "Tool" },
        { name: "Firebase", category: "Tool" },
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
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">{cat.title}</h3>
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
