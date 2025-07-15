  "use client"
  import React, { useEffect, useRef, useState } from 'react'
  import { motion, AnimatePresence } from "framer-motion"
  import Data from '@/components/global/data' // تأكد من مسار الاستيراد الصحيح للبيانات
  function Projects() {
    const [rows, setRows] = useState<number[]>([])
    const [selectedBox, setSelectedBox] = useState<{ row: number; cell: number; color: string;item: typeof Data[0];  } | null>(null)
    const boxRefs = useRef<HTMLDivElement[][]>([])
    const activeColors = ["#fea66a ", "#ffe6d6","#b17dfe",]

    useEffect(() => {
      const random_column = Math.floor(Math.random() * 4) + 2
      setRows([7, 7, 7, 7, random_column])
    }, [])

    useEffect(() => {
      boxRefs.current.slice(0, 2).forEach(row => {
        if (row.length === 0) return

        const randomIndex = Math.floor(Math.random() * row.length)
        const color = activeColors[Math.floor(Math.random() * activeColors.length)]

        const box = row[randomIndex]
        if (box) {
          box.classList.add("active")
          box.style.backgroundColor = color
        }
      })
    }, [rows])

    if (rows.length === 0) return null

    return (
      <section className='flex relative flex-col  gap-5 lg:flex-row mt-50  min-h-[1250px] max-sm:min-h-[1370px]  p-4 rounded-lg '>
        <div className='flex-1/2 flex flex-col  gap-10 max-sm:items-start max-sm:gap-2'>
         <p className="background-text  text-6xl font-semibold">Bringing Ideas to Life with Modern Web Development</p>
        </div>

        <div className='flex-1/2 max-sm:-mt-150  '>
                  <h1 className='text-7xl font-semibold oswald-font'>What I’ve Built</h1>
          <div className='bg-gray-800 p-3  rounded-md  flex flex-col gap-2'>
            {rows.map((row, rowIndex) => {
              if (!boxRefs.current[rowIndex]) boxRefs.current[rowIndex] = []

              return (
                <div key={rowIndex} className="row "> 
                  {selectedBox?.row === rowIndex && selectedBox?.item  ? (
                    <AnimatePresence mode="wait">
                    <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 80, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-0 left-0 z-40 w-full h-full bg-white text-black rounded-md shadow-xl p-6 q"
                          style={{
                            backgroundColor: selectedBox?.color || "#fff", // ← الخلفية من الصندوق
                            }}
                        >
                    <div className="p-4 z-40 flex items-center  gap-4  absolute  top-0 left-0 w-[100%] h-[100%] card-content text-black rounded-md shadow-md">
                      <button
                        className="mb-2 px-4 py-1  absolute z-50 right-4 bottom-2 cursor-pointer bg-gray-600  text-white rounded-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-lg"
                        onClick={() => setSelectedBox(null)}
                      >
                        Back
                      </button>
                    
                    <div  className="relative flex flex-col gap-10 items-strat z-40">
                      <div className='flex flex-col items-center justify-center mb-2'>
                      <div className="card-item mb-2 text-content">
                        <h1 className="text-3xl background-text font-bold">{selectedBox.item.h1}</h1>
                      </div>

                      <div className="card-item w-[80%] gap-10 border border-gray-300 rounded-md mb-2 mt-2">
                        <video
                          src={selectedBox.item.video}
                          className="w-full rounded-md shadow-2xl shadow-gray-800 transition-all duration-300 object-contain"
                          controls
                          autoPlay
                          muted
                          loop
                        />
                      </div>
                      </div>
                      <div className="card-item text-content">
                        <h2 className="text-lg font-bold">Overview</h2>
                        <p className="text-lg">{selectedBox.item.Overview}</p>
                    </div>
                    <div className="card-item text-content">
                        <p className="text-lg font-bold">Key Features</p>
                        <ul className="list-disc pl-5 space-y-2">
                          {Object.entries(selectedBox.item.Key).map(([title, desc], index) => (
                            <li key={index}>
                              <strong>{title}:</strong> {desc}
                            </li>
                          ))}
                        </ul>
                    </div>
                    <div className="card-item text-content">
                        <h2 className="text-lg font-bold">Tech Stack</h2>
                        <p className="text-lg">{selectedBox.item.Tech}</p>
                    </div>
                    </div>
                    </div>
                    </motion.div>
                    </AnimatePresence>
                  ) : (
                    // ✅ عرض الصناديق
                    <div className="flex gap-2.5  relative">
                      {Array.from({ length: row }).map((_, cellIndex) => (
                        <div
                          key={cellIndex}
                          ref={(el) => {
                            if (el) boxRefs.current[rowIndex][cellIndex] = el
                          }}
                          className="md:w-[75px] md:h-[75px] h-[50px] w-[50px]  bg-gray-900 rounded-md box "
                          onClick={() => {
                            const box = boxRefs.current[rowIndex][cellIndex]
                            if (!box?.classList.contains("active")) return
                            const computedColor = getComputedStyle(box).backgroundColor
                            const item = Data[rowIndex] 
                            setSelectedBox({ row: rowIndex, cell: cellIndex ,  color: computedColor,item: item})
                          }}
                        ></div>
                      ))}
                    </div>
                    
                  )}
                </div>
              
              )
              
            })}
            
          </div>
        </div>
      </section>
    )
  }

  export default Projects
