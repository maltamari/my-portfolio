"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { services } from '@/constants/links';
import { Sparkles, Code, Database, LayoutTemplate, Settings, Zap, ArrowRight, Server, Shield, BrainCircuit, Share2, Cloud } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Custom Web Applications': <Code size={24} />,
  'Full-Stack Development': <Database size={24} />,
  'E-commerce Platforms': <LayoutTemplate size={24} />,
  'Admin Dashboards': <Settings size={24} />,
  'Frontend Development with Tailwind CSS': <Sparkles size={24} />,
  'Website Migration to Next.js': <Zap size={24} />,
  'Authentication & Authorization': <Shield size={24} />,
  'API Development & Integration': <Server size={24} />,
  'Automation Workflows (n8n)': <Share2 size={24} />,
  'AI-Powered Data Analysis': <BrainCircuit size={24} />,
  'Social Media Analytics Dashboards': <LayoutTemplate size={24} />,
  'Cloud Integration & Hosting': <Cloud size={24} />,
};

export default function Services2() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-3 oswald-font">
              Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              What I Can Build For You
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
            Comprehensive solutions tailored to your business needs, from stunning frontends to robust backend architectures.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.name] || <Sparkles size={24} />}
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Let's discuss <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}