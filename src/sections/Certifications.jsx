import React from 'react';
import Section from '../components/Section';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Full Stack Developer",
      issuer: "EduSkills",
      icon: <Award className="w-10 h-10 text-primary" />,
      description: "Comprehensive training in MERN stack development and cloud deployment."
    },
    {
      title: "SQL & Relational Database",
      issuer: "Cognitive Class",
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      description: "Specialized certification in database design, normalization, and complex queries."
    }
  ];

  return (
    <Section id="certifications" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="mb-4">
          Professional <span className="text-primary">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-30" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certs.map((cert, i) => (
          <div key={i} className="glass p-8 rounded-3xl flex items-start gap-6 hover:shadow-2xl transition-all duration-500">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
              {cert.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">{cert.issuer}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
