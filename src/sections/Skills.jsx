import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiMysql, 
  SiJava, 
  SiCplusplus, 
  SiGit, 
  SiGithub, 
  SiVisualstudiocode, 
  SiFirebase 
} from 'react-icons/si';

const SkillCard = ({ name, icon: Icon, color, category }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass p-4 rounded-xl flex items-center gap-4 transition-all duration-300"
    >
      <div 
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm"
        style={{ color: color }}
      >
        <Icon className="w-6 h-6" />
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
        { name: "ReactJS", icon: SiReact, color: "#61DAFB", category: "Frontend" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", icon: SiNodedotjs, color: "#339933", category: "Backend" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
        { name: "Express", icon: SiExpress, color: "#000000", category: "Backend" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Backend" },
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: SiJava, color: "#007396", category: "Language" },
        { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Language" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", category: "Tool" },
        { name: "GitHub", icon: SiGithub, color: "#181717", category: "Tool" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC", category: "Tool" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Tool" },
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
