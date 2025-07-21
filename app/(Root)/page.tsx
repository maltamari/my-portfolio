"use client"
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects from "@/components/Home/projects";
import Service from "@/components/Home/Services";
import { Suspense, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
   <div  data-aos="fade-up">
      <Introduction />
      
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Projects />
      </Suspense>

      <Service />
      <Contents />
   </div>
  );
}

