import React from 'react';
import Section from '../components/Section';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Invertis University",
      period: "2024 – 2026",
      description: "Focusing on advanced software development, cloud computing, and MERN stack specialization."
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "MJPRU",
      period: "2021 – 2024",
      description: "Completed with a strong foundation in programming, databases, and web technologies."
    },
    {
      degree: "12th Standard",
      institution: "UP Board",
      period: "",
      description: "Science stream with a focus on Mathematics and Physics."
    }
  ];

  return (
    <Section id="education" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="mb-4">
          Education <span className="text-primary">Timeline</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-30" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />
        
        {education.map((item, i) => (
          <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 -translate-x-1/2 z-10" />
            
            <div className="ml-12 md:ml-0 md:w-[45%] glass p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <GraduationCap className="w-5 h-5" />
                <span className="font-bold text-lg">{item.institution}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{item.period}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
