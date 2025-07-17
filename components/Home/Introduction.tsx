import { linksImages } from '@/utils/links'
import Image from 'next/image'
import React, { useState } from 'react'

function Introduction() {
  const [showMore, setShowMore] = useState(false)

  const toggleShow = () => setShowMore(!showMore)

  const description = `I'm a Software Engineering graduate from Jordan, passionate about building modern full-stack applications with technologies like React, Next.js, Node.js, Python, and Supabase. My projects include a complete furniture e-commerce platform with admin/user dashboards, and a banking simulation system with secure authentication and transaction flows. I love crafting clean UIs, writing scalable backend logic, and continuously exploring new tools like Prisma and Clerk to build better digital solutions.`;

  const maxChars = 200;
  const isLong = description.length > maxChars;
  const displayedText = showMore ? description : description.slice(0, maxChars) + (isLong ? "..." : "");

  return (
    <section className='border w-full mt-30 *:border-gray-200 dark:border-gray-700 rounded-lg shadow-md'>
      <div className="flex flex-col lg:flex-row justify-baseline items-center lg:items-start gap-10 p-4">
        <Image width={300} height={300} src={"/me.jpg"} alt="My photo" /> 
        <div className='flex flex-col justify-center items-start gap-2'>
          <span className='oswald-font name'>🧑‍💻 Mohamed Abdallah — Full Stack Web Developer</span>
          <h2 className='text-3xl w-full md:text-4xl font-bold'>Turning ideas into interactive, real-world web experiences</h2>

          <p className='oswald-font leading-relaxed letter-spacing text-xl font-serif'>
            {displayedText}
            {isLong && (
              <button
                onClick={toggleShow}
                className="ml-2 text-blue-500 underline hover:text-blue-700 transition duration-200 text-base"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </p>

          <div className='flex flex-col md:flex-row items-center gap-6 mt-2'>
            <div className="overflow-hidden w-[350] flex">
              <div className="flex gap-8 py-4 whitespace-nowrap animate-infinite-scroll min-w-max"> 
                {[...linksImages, ...linksImages].map((image, index) => (
                  <div className='bg-gray-50 relative hover:scale-110 transition-transform duration-300 ease-in-out w-[65px] h-[60px] rounded shadow-md flex items-center justify-center' key={index}>
                    <Image
                      src={image.href}
                      width={50}
                      height={50}
                      alt={"Mohamed Abdallah Profile Picture"}
                    />
                    <div className="absolute border-sky-100 border-1 rounded-sm inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-350 bg-black text-white text-sm font-bold">
                      {image.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h5 className='text-2xl oswald-font'>1+ year of hands-on experience with industry-standard design tools</h5>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Introduction
