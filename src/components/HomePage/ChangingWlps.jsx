'use client';


import { motion, useAnimate } from 'motion/react';
import { useEffect, useState } from 'react';


export default function ChangingWlps({ children, duration, delay }) {
  const [cwlp, setCwlp] = useState(0);
  const [top, topAnimate] = useAnimate();
  const [bottom, bottomAnimate] = useAnimate();

  const wlps = children.split(' ');


  useEffect(() => {
    topAnimate(top.current, {
      clipPath: 'circle(1000px)',
    }, { duration: duration, ease: 'easeInOut' });

    setTimeout(() => {
      if (cwlp < wlps.length) setCwlp(cwlp + 1);
      else setCwlp(0);
    }, delay * 1000);
  }, [cwlp]);


  return (
    <div className="relative h-full w-full">
      <motion.img ref={bottom} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto rounded-[15px]'
        style={{ zIndex: 1 }}
        src={`../../../public/wlps/${wlps[0]}`}
        alt={`Wallpaper '${wlps[0]}' haven't been found!`}

        initial={{
          clipPath: 'circle(0px)'
        }}
        animate={{
          clipPath: 'circle(1000px)'
        }}
        transition={{
          duration: duration,
          ease: 'easeInOut',
        }}
      />

      <motion.img ref={top} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto rounded-[15px]'
        style={{ zIndex: 2 }}
        src={`../../../public/wlps/${wlps[0]}`}
        alt={`Wallpaper '${wlps[0]}' haven't been found!`}

        initial={{
          clipPath: 'circle(0px)'
        }}
        animate={{
          clipPath: 'circle(1000px)'
        }}
        transition={{
          duration: duration,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
