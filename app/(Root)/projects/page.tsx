import Projects from '@/components/Home/projects'
import Projects2 from '@/components/Home/projects2'
import React, { Suspense } from 'react'

function page() {
  return (
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Projects />
      </Suspense>
  )
}

export default page