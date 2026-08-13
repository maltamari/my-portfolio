"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";
import { linksImages } from "@/constants/links";

export default function Introduction() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const description = `I'm a Software Engineering graduate from Jordan, passionate about building modern full-stack applications with technologies like React, Next.js, Node.js, Python, and Supabase. My projects include complete e-commerce platforms with admin dashboards, and robust automation systems with secure integration flows. I love crafting clean UIs, writing scalable backend logic, and continuously exploring new tools to build better digital solutions.`;

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center py-20 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        {/* Left Column (Text) */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <TerminalSquare size={16} className="text-blue-500" />
            <span className="oswald-font tracking-wide">MOHAMMED ABDALLAH</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building modern <br className="hidden lg:block" />
            <span className="text-gradient-primary">digital experiences.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/MohammedAbdallah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-foreground bg-secondary/80 hover:bg-secondary rounded-xl transition-all hover:scale-105 active:scale-95 border border-border"
            >
              Download CV
              <Download size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <motion.div variants={itemVariants} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex-shrink-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 transform rotate-6 scale-105 -z-10 transition-transform duration-700 hover:rotate-12" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl glass">
            <Image
              src="/me.jpg"
              alt="Mohammed Abdallah Profile Picture"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Ticker (Animated Marquee using Framer Motion) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full mt-24 pt-8 border-t border-border/40 flex flex-col items-center"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6 oswald-font">
          Technologies & Tools
        </p>
        <div className="w-full overflow-hidden flex relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...linksImages, ...linksImages].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
                <div className="relative w-8 h-8 md:w-10 md:h-10">
                  <Image src={tech.href} alt={tech.name} fill className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <span className="font-semibold text-lg">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
