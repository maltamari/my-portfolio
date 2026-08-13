import React from 'react'
import type { Metadata } from "next";
import Services2 from '@/components/Home/Services2';

export const metadata: Metadata = {
  title: "Services | Mohammed Abdallah",
  description: "Explore the professional services I offer in full-stack web development.",
};

export default function page() {
  return (
    <div className='flex flex-col w-full min-h-screen pt-12'>
      <Services2 />
    </div>
  )
}