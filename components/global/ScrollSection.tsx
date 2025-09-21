// components/ScrollSection.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  direction: 'vertical' | 'horizontal';
  children: React.ReactNode;
}

export const ScrollSection = ({ direction, children }: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.item', sectionRef.current);
    const isHorizontal = direction === 'horizontal';

    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { [isHorizontal ? 'xPercent' : 'yPercent']: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start:"top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: 'none' },
    });
    items.forEach((item, index) => {
          const nextItem = items[index + 1];
          

      timeline.to(item, {
        scale: 0.9,
        borderRadius: '10px',
      });

     
      if (nextItem) {
        timeline.to(nextItem, { [isHorizontal ? 'xPercent' : 'yPercent']: 0 });
      }
    });
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      className={`scroll-section  section  ${direction === 'vertical' ? 'vertical-section' : 'horizontal-section'}`}
    >
      <div className="h-[105vh]  mt-10">
        <div role="list" className=" flex relative  justify-start items-center h-full p-1">
          {children}
        </div>
      </div>
    </div>
  );
};