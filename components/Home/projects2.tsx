// app/page.tsx
"use client"
import { ScrollSection } from '@/components/global/ScrollSection';
import Data from '@/components/global/data' 
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Projects2() {
   const [showMore, setShowMore] = useState(false)
  
  const toggleShow = () => setShowMore(!showMore)
  const maxChars = 200;
function Desc(item:any){
  const isLong = item.overview.length > maxChars;
  const displayedText = showMore ? item.overview : item.overview.slice(0, maxChars) + (isLong ? "..." : "");
  return {displayedText, isLong};
}
  return (
    <main>
      <div className="introSection">
        <h1 className="text-[2.5rem] h-[50vh] flex items-center justify-center [text-shadow:0.04em_0.04rem_0_#81b5ab]">What I Have Built</h1>
      </div>

      <ScrollSection direction="vertical">
        {/* Your individual card content goes here */}
  {
    Data.map((item, index) =>(
      <div key={item.title} role="listitem" className="item ml-2 w-[98vw] flex-col md:flex-row rounded-md bg-gray-50 dark:bg-black dark:text-amber-50 h-[100%] flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
          <div className=" relative flex flex-col justify-center items-start p-7 w-1/1 md:w-1/2 ">
          <Link href={item.link}> <h2 className="mt-0 mb-4 text-3xl light:text-gray-800 leading-tight hover:text-4xl hover:text-blue-800/100 transition-all duration-300">{item.title}</h2></Link>
         <p className='oswald-font leading-relaxed letter-spacing text-xl font-serif'>
            {Desc(item).displayedText}
            {Desc(item).isLong && (
              <button
                onClick={toggleShow}
                className="ml-2 text-blue-500 underline hover:text-blue-700 transition duration-200 text-base"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </p>
              <div className="hidden md:block w-full mt-4">
                <p className="text-lg mb-3 font-semibold">Key Features</p>
                 <ul className="list-disc pl-5 space-y-2">
                  {Object.entries(item.key).map(([title, desc], index) => (
                            <li key={index}>
                              <strong>{title}:</strong> {desc}
                            </li>
                          ))}
                        </ul>
                </div>    
              </div>

             <div className='w-1/1 lg:w-1/2 ml-2 -mt-10 h-full flex flex-col  justify-center  rounded-md'>
             <Link href={item.link} target="_blank" className="w-[98%]   h-[65%] ">
               <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="w-[100%]   h-[100%] object-cover rounded-md  shadow-1xl shadow-gray-800 dark:shadow-gray-100 transition-all duration-300"
                priority
              />
              </Link>
              <div className="card-item text-content mt-4">
                        <h2 className="text-lg font-bold">Tech Stack</h2>
                        <p className="text-lg">{item.tools}</p>
                    </div>
             </div>
             
        </div>
        ))
    }
       
      
      </ScrollSection>

    </main>
  );
}

// You might also need a separate CSS module for the page layout
// app/page.module.css
