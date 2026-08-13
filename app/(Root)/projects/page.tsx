import React from 'react'
import type { Metadata } from "next";
import Projects2 from '@/components/Home/projects2';

export const metadata: Metadata = {
  title: "Projects | Mohammed Abdallah",
  description: "A selection of my recent work in web development, automation, and full-stack engineering.",
};

export default function page() {
  return (
    <div className='flex flex-col w-full min-h-screen pt-12'>
      <Projects2 />
    </div>
  )
}