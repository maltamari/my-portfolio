import React from 'react';

// Mock data for demonstration
const services = [
  { name: 'Web Development', description: 'Building responsive and modern websites' },
  { name: 'Mobile Apps', description: 'Creating native and cross-platform applications' },
  { name: 'UI/UX Design', description: 'Designing beautiful user experiences' },
  { name: 'Backend Development', description: 'Building robust server-side solutions' },
  { name: 'Database Design', description: 'Structuring efficient data systems' },
  { name: 'API Integration', description: 'Connecting services seamlessly' }
];

function Service() {
  return (
    <section className='flex flex-col items-center justify-center mt-10 px-4 lg:px-0 w-full'>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
        What I Can Build For You
      </h2>
   
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto'>
        {services.map((service, index) => (
          <div 
            className='card text-amber-50 shadow-[0_4px_8px_rgba(0,0,0,0.8)] dark:shadow-[0_8px_18px_rgba(255,255,255,0.4)] rounded-lg w-full' 
            key={index}
          >
            <div className='card-face flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-t-lg font-bold text-lg md:text-xl'>
              <h2>{service.name}</h2>
            </div>
            <div className='card-face card-back py-5 px-4 text-2xl bg-gray-800 rounded-b-lg'>
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
