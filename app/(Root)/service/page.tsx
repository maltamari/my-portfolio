// import Service from '@/components/Home/Services'
import Service from '@/components/Home/Services'
import React, { Suspense } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development and full-stack services by Mohammed Abdallah — specializing in React, Next.js, and Supabase solutions.",
};
 
function page() {
  return (
    <div className='mt-20'>
      {/* <Service/> */}
      <Suspense fallback={<p className="text-center">Loading services...</p>}>    
        <Service />
      </Suspense>
    </div>
  )
}

export default page
