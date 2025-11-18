import React from 'react';
import { services } from '@/utils/links';

function Services2() {
  return (
    <div className="introSection py-16 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        What I Can Build For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white dark:bg-gray-900 rounded-2xl 
                       border border-gray-200 dark:border-gray-800
                       p-6 hover:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(245,148,1,0.55)]  transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-amber-50">
              {service.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services2;
