import React from 'react';
import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-30" />
        </div>
        
        <div className="glass p-6 md:p-12 rounded-3xl space-y-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I am a passionate <span className="font-semibold text-primary">MERN Stack Web Developer</span> currently pursuing my MCA at Invertis University. With a strong foundation in both frontend and backend technologies, I specialize in building reactive, user-centric web applications.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            My journey in tech is driven by curiosity and a commitment to solving complex problems through elegant code. I thrive in collaborative environments and am always eager to learn and implement the latest modern web standards.
          </p>
          

        </div>
      </div>
    </Section>
  );
};

export default About;
