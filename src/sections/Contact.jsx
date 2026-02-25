import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Linkedin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! (Demo Mode)');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <Section id="contact">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4">Let's <span className="text-primary">Talk</span></h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-6 opacity-30" />
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>
          </div>
          
          <div className="space-y-4">
            <a href="mailto:deepikasaxena322@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 rounded-xl text-primary"><Mail /></div>
              <div>
                <p className="text-xs uppercase text-slate-500 font-bold">Email Me</p>
                <p className="font-semibold">deepikasaxena322@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/deepika0905/" target="_blank" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 rounded-xl text-primary"><Linkedin /></div>
              <div>
                <p className="text-xs uppercase text-slate-500 font-bold">LinkedIn</p>
                <p className="font-semibold">Deepika Saxena</p>
              </div>
            </a>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2"><User size={16}/> Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2"><Mail size={16}/> Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2"><MessageSquare size={16}/> Your Message</label>
              <textarea 
                rows="4" 
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
            
            {status && <p className="text-center text-accent font-semibold animate-fade-in">{status}</p>}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
