"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Code2, Layers, CheckCircle2, X } from "lucide-react";
import Data from "@/data/projects";
import type { Project } from "@/types";

export default function Projects2() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-3 oswald-font">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              What I Have Built
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            A selection of my recent work in web development, automation, and full-stack engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div
                className="relative w-full aspect-[4/3] bg-muted overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Tech Stack Pills (Overlay) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.tools.split(",").slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white rounded-md border border-white/10">
                      {tool.trim()}
                    </span>
                  ))}
                  {project.tools.split(",").length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white rounded-md border border-white/10">
                      +{project.tools.split(",").length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-grow p-6">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {project.overview}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold hover:text-blue-500 transition-colors flex items-center gap-1"
                  >
                    View Details <ArrowUpRight size={16} />
                  </button>
                  <Link
                    href={project.link !== "#" ? project.link : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      project.link !== "#" ? "bg-primary text-primary-foreground hover:scale-110" : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (project.link === "#") e.preventDefault();
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Modal / Expanded View */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: "100%", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 md:inset-4 md:top-10 z-[101] flex flex-col bg-card border border-border shadow-2xl md:rounded-3xl overflow-hidden md:max-w-6xl md:mx-auto max-h-[95vh] md:max-h-none"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
                <h2 className="text-2xl md:text-3xl font-bold oswald-font tracking-wide">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors bg-background border border-border"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content Grid */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left Col: Image & Links */}
                  <div className="space-y-8">
                    <div className="relative w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-lg">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.link !== "#" ? (
                        <Link
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-[1.02] transition-transform"
                        >
                          Visit Live Project <ArrowUpRight size={18} />
                        </Link>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-muted text-muted-foreground font-semibold rounded-xl cursor-not-allowed">
                          Link Unavailable
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Col: Details */}
                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <Layers size={20} />
                        <h3 className="text-xl font-bold">Overview</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.overview}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <CheckCircle2 size={20} />
                        <h3 className="text-xl font-bold">Key Features</h3>
                      </div>
                      <ul className="space-y-4">
                        {Object.entries(selectedProject.key).map(([keyTitle, desc], i) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 + 0.2 }}
                            key={keyTitle} 
                            className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl border border-border/50"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                            <div>
                              <strong className="block text-foreground mb-1">{keyTitle}</strong>
                              <span className="text-muted-foreground text-sm">{desc}</span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <Code2 size={20} />
                        <h3 className="text-xl font-bold">Technologies Used</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.split(",").map((tool) => (
                          <span
                            key={tool}
                            className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg border border-border"
                          >
                            {tool.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
