import React from 'react'
import { ScrollSection } from '../global/ScrollSection'
import { services } from '@/utils/links'
function Services2() {
  return (
    <div className="introSection">        
            <h2 className="text-5xl font-bold mt-20 -mb-15 text-center">
                What I Can Build For You
            </h2>
        <ScrollSection direction="horizontal">
      <section role="listitem" className='relative overflow-hidden  flex justify-end  w-full h-[70vh] p-4 rounded-lg  '>
    <div>
    {services.map((service, index) => (
  <div
    key={service.name}
    role="listitem"
    className="item absolute lg:left-1/3 inset-0 min-w-[350px] max-w-md h-full flex-shrink-0
               snap-center bg-white dark:bg-black dark:text-amber-50
               rounded-2xl shadow-lg border border-gray-200
               p-6 hover:shadow-xl transition"
  >
    <div className="text-xl font-semibold mb-3 text-gray-800 dark:text-amber-50">
      <h2>{service.name}</h2>
    </div>
    <div className="text-gray-600/70 dark:text-gray-300 text-lg leading-relaxed">
      {service.description}
    </div>
  </div>
))}
            </div>
          </section>
        </ScrollSection>
        </div>
  )
}

export default Services2