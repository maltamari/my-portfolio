"use client"
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects from "@/components/Home/projects";
import Service from "@/components/Home/Services";
import { Suspense, useEffect } from "react";

export default function Home() {

  return (
   <div >
      <Introduction />
      
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Projects />
      </Suspense>

      <Service />
      <Contents />
   </div>
  );
}

