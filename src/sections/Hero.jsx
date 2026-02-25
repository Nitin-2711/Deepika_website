import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import Section from '../components/Section';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-screen-2xl mx-auto">
        <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm md:text-base">Welcome to my universe</h2>
            <h1 className="text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-primary">Deepika Saxena</span>
            </h1>
            <div className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 h-10 md:h-12">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Full Stack Engineer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build modern, scalable web applications with a focus on clean code and exceptional user experience. Specializing in the MERN stack and performance optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/resume/Deepika_CV.pdf" 
              download="Deepika_CV.pdf"
              className="w-full sm:w-auto btn-outline flex items-center justify-center gap-2"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a href="https://github.com/deepika749" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/deepika0905/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:deepikasaxena322@gmail.com" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          <div className="relative z-10 w-full max-w-[320px] md:max-w-[400px] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full rotate-6 opacity-20 blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl glass transition-transform hover:scale-[1.02] duration-500">
              <img 
                src={profileImg} 
                alt="Deepika Saxena" 
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
