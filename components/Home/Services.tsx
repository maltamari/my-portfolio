import { services } from '@/utils/links'
import React from 'react'

function Service() {
  return (
    <section className='flex flex-col ml-15 lg:ml-0 items-center justify-center mt-10  p-4 rounded-lg  '>
    <section className='flex ml-15 lg:ml-0 flex-col items-center justify-center mt-10  p-4 rounded-lg  '>

      <h2 className="text-5xl font-bold  text-center">
        What I Can Build For You
    </h2>
   
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g:gap-x-24 gap-x-34 gap-y-7 w-full  mt-20 justify-items-center '>
   { services.map((service, index) => (
    <div className='card text-amber-50 shadow-[0_4px_8px_rgba(0,0,0,0.8)] dark:shadow-[0_8px_18px_rgba(255,255,255,0.4)] rounded-lg'  key={index}>
      <div className='card-face flex items-center w-full  font-bold  justify-center bg-[linear-gradient(120deg,#e74c3c,orange)]'>
        <h2>{service.name}</h2>
      </div>
      <div className='card-face card-back py-5 text-2xl px-3'>{service.description}</div>
    </div>
    )
  )}
  </div>
    
    </section>
        </section>

)
}

export default Service
