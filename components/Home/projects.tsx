"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Data from "@/utils/data";
import Image from 'next/image'

 
function Projects() {
  const [rows, setRows] = useState<number[]>([]);
  const [selectedBox, setSelectedBox] = useState<{
    row: number;
    cell: number;
    color: string;
    item: typeof Data[0];
  } | null>(null);

  const boxRefs = useRef<HTMLDivElement[][]>([]);
  const activeColors = ["#fea66a", "#ffe6d6", "#b17dfe"];

  // إنشاء الشبكة
  useEffect(() => {
    const random_column = Math.floor(Math.random() * 4) + 2;
    setRows([7, 7, 7, 7, random_column]);
  }, []);

  // تفعيل البوكسات العشوائية
  useEffect(() => {
    boxRefs.current.slice(0, 3).forEach((row) => {
      if (row.length === 0) return;
      const randomIndex = Math.floor(Math.random() * row.length);
      const color = activeColors[Math.floor(Math.random() * activeColors.length)];
      const box = row[randomIndex];
      if (box) {
        box.classList.add("active");
        box.style.backgroundColor = color;
      }
    });
  }, [rows]);

  if (rows.length === 0) return null;

  return (
    <section className="flex ml-16 lg:ml-0 relative gap-20 lg:gap-5 flex-col items-center mb-190 mt-20 justify-start p-4 rounded-lg">
      {/* ===== عنوان القسم ===== */}
      <div className="">
        <p className="background-text ml-5 text-5xl lg:text-6xl font-semibold text-gray-300 text-center">
          Bringing Ideas to Life with Modern Web Development
        </p>
      </div>

      {/* ===== الشبكة ===== */}
      <div className="flex-1/1 ">
        <h1 className="text-5xl lg:text-7xl mt-10 ml-4 font-semibold oswald-font text-white">
          What I’ve Built
        </h1>

        <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-2 mt-6">
          {rows.map((row, rowIndex) => {
            if (!boxRefs.current[rowIndex]) boxRefs.current[rowIndex] = [];

            return (
              <div key={rowIndex} className="row flex gap-2.5 relative justify-center">
                {Array.from({ length: row }).map((_, cellIndex) => (
                  <div
                    key={cellIndex}
                    ref={(el) => {
                      if (el) boxRefs.current[rowIndex][cellIndex] = el;
                    }}
                    className="md:w-[75px] md:h-[75px] h-[52px] w-[52px] bg-gray-900 rounded-md box cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      const box = boxRefs.current[rowIndex][cellIndex];
                      if (!box?.classList.contains("active")) return;
                      const computedColor = getComputedStyle(box).backgroundColor;
                      const item = Data[rowIndex];
                      setSelectedBox({
                        row: rowIndex,
                        cell: cellIndex,
                        color: computedColor,
                        item: item,
                      });
                    }}
                  ></div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== المودال عند الضغط ===== */}
      <AnimatePresence>
        {selectedBox && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                backgroundColor: selectedBox.color,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 relative">
                <button
                  className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105 z-10"
                  onClick={() => setSelectedBox(null)}
                >
                  Back
                </button>

                <div className="flex flex-col gap-6 mt-8 text-gray-900">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">{selectedBox.item.title}</h1>
                    <div className="w-full  md:h-[350px] border border-gray-300 rounded-md overflow-hidden">
                      <Image
                        width={1200}
                        height={830}
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/..."
                        quality={85}
                        src={selectedBox.item.image}
                        className=" w-[400px] md:w-full h-[250px] md:h-[350px] object-cover"
                        alt={selectedBox.item.title}
                      
                      />
                    </div>
              
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-2">Overview</h2>
                    <p>{selectedBox.item.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {Object.entries(selectedBox.item.key).map(([title, desc], index) => (
                        <li key={index}>
                          <strong>{title}:</strong> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
                    <p>{selectedBox.item.tools}</p>
                  </div>

                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedBox.item.link}
                      className="text-blue-700 text-lg font-semibold hover:underline"
                    >
                      Visit {selectedBox.item.title} →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
