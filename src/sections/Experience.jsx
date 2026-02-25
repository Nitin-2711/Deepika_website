import React from 'react';
import Section from '../components/Section';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Developer Intern",
      company: "EduSkills",
      period: "April 2025 - June 2025",
      tasks: [
        "Developing RESTful APIs with NodeJS and Express.",
        "Building responsive UI components using ReactJS.",
        "Managing data with MongoDB and SQL databases.",
        "Collaborating on modern web application architectures."
      ]
    }
  ];

  return (
    <Section id="experience">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="mb-4">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-30" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all group-hover:bg-primary/10" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-6 h-6" />
                  <span className="text-xl font-bold">{exp.company}</span>
                </div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
              </div>
              <div className="flex items-center gap-2 text-slate-500 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-fit">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {exp.tasks.map((task, j) => (
                <div key={j} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{task}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
