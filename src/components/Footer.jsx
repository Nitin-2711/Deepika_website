import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary mb-2">Deepika Saxena</h2>
            <p className="text-slate-500 dark:text-slate-400">Crafting digital experiences with excellence.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/deepika749" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/deepika0905/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>

            <a href="mailto:deepikasaxena322@gmail.com" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-900 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Deepika Saxena. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center gap-2 hover:text-primary transition-colors group"
          >
            Scroll to Top 
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
