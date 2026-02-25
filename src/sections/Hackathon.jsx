import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Rocket, Cpu, X, Maximize2 } from 'lucide-react';

// Asset imports
import teamImg from '../assets/hackathon_team.png';
import certImg from '../assets/hackathon_cert.png';

const Hackathon = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const hackathonData = {
    event: "Hyperspace Innovation Hackathon",
    duration: "36 Hour National Level Hackathon",
    date: "February 2026",
    participant: "Deepika Saxena",
    teamName: "Internovators",
    teamSize: "4 Members",
    project: "SWF – Space Waste Footprint",
    description: "SWF (Space Waste Footprint) is an innovation-based project focused on monitoring and analyzing space pollution and orbital waste around Earth using technology-driven concepts related to Space Tech and AI innovation.",
    domains: ["Space Technology", "Artificial Intelligence", "Innovation"]
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <Section id="hackathon" className="relative overflow-hidden">
      {/* Space-tech subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="mb-4">
            Innovation & <span className="text-primary">Hackathon</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Hackathon Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Rocket size={120} className="rotate-12" />
            </div>

            <div className="space-y-6">
              <div>
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                  {hackathonData.date}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {hackathonData.event}
                </h3>
                <p className="text-primary font-semibold mt-2 flex items-center gap-2">
                  <Award size={20} /> {hackathonData.duration}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <p className="text-xs uppercase text-slate-500 font-bold">Team Name</p>
                  <p className="font-bold flex items-center gap-2">
                    <Users size={16} className="text-primary" /> {hackathonData.teamName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-slate-500 font-bold">Team Size</p>
                  <p className="font-bold">{hackathonData.teamSize}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 text-accent rounded-lg">
                    <Cpu size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{hackathonData.project}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {hackathonData.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {hackathonData.domains.map((domain, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-medium">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <div className="space-y-8">
            {/* Team Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage({ src: teamImg, alt: "Hackathon Team Preview Image" })}
            >
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl relative">
                <img 
                  src={teamImg} 
                  alt="Deepika Saxena Hyperspace Innovation Hackathon Team Internovators 2026"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 size={32} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-bold text-slate-500 uppercase tracking-widest">Hackathon Team Preview</p>
            </motion.div>

            {/* Certificate Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-[2.5rem] flex items-center gap-6 group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedImage({ src: certImg, alt: "Hyperspace Hackathon Certificate" })}
            >
              <div className="relative w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800">
                <img 
                  src={certImg} 
                  alt="Deepika Saxena Hyperspace Innovation Hackathon Certificate 2026"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 size={20} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Achievement Certificate</h4>
                <p className="text-slate-500 text-sm">National Level Innovation Award</p>
                <div className="mt-3 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                  <Award size={14} /> Accomplishment Verified
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10"
              />
              <p className="mt-6 text-center text-white text-lg font-medium">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Hackathon;
