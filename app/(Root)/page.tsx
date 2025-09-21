"use client"
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects from "@/components/Home/projects";
import Projects2 from "@/components/Home/projects2";
import Services2 from "@/components/Home/Services2";
import { Suspense } from "react";

export default function Home() {


  return (
   <div  >
      <Introduction />
      
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Projects2 />
      </Suspense>
     
      <Suspense fallback={<p className="text-center">Loading services...</p>}>
        <Services2 />
      </Suspense>
   
      <Contents />
   </div>
  );
}

