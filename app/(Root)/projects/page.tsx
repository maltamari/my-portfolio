import Projects from '@/components/Home/projects'
import React, { Suspense } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the latest web development projects built by Mohammed Abdallah using Next.js, React, and Supabase.",
};
function page() {
  return (
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Projects />
      </Suspense>
  )
}

export default page
