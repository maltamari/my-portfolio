// import Service from '@/components/Home/Services'
import Service from '@/components/Home/Services'
import Services2 from '@/components/Home/Services2'
import React, { Suspense } from 'react'

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