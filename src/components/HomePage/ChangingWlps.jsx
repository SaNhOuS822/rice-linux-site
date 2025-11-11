'use client';


import { motion, useAnimate } from 'motion/react';
import { useEffect, useState } from 'react';


export default function ChangingWlps({ children, duration, delay, cwlp }) {
  const [top, topAnimate] = useAnimate();
  const [bottom, bottomAnimate] = useAnimate();

  const [topBlur, topBlurAnimate] = useAnimate();
  const [bottomBlur, bottomBlurAnimate] = useAnimate();

  const wlps = children.split(' ');

  const img_classes = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-auto rounded-[15px]';
  const blur_classes = 'scale-[105%] blur-[40px]';


  useEffect(() => {
    top.current.src = `../../../public/wlps/${wlps[cwlp]}`
    topBlur.current.src = `../../../public/wlps/${wlps[cwlp]}`

    topAnimate(top.current, {
      clipPath: 'circle(1000px)',
    }, { duration: duration, ease: 'easeInOut' });

    topBlurAnimate(topBlur.current, {
      clipPath: 'circle(1000px)',
    }, { duration: duration, ease: 'easeInOut' });

    setTimeout(() => {
      bottom.current.src = `../../../public/wlps/${wlps[cwlp]}`
      bottomBlur.current.src = `../../../public/wlps/${wlps[cwlp]}`

      topAnimate(top.current, {
        clipPath: 'circle(0px)',
      }, { duration: 0 });

      topBlurAnimate(topBlur.current, {
        clipPath: 'circle(0px)',
      }, { duration: 0 });
    }, duration * 1000);
  }, [cwlp]);


  return (
    <div className="relative h-full w-full">
      <motion.img ref={bottom} className={img_classes}
        style={{ zIndex: 3 }}
        src={`wlps/${wlps[0]}`}
        alt={`Wallpaper '${wlps[0]}' haven't been found!`}
      />

      <motion.img ref={top} className={img_classes}
        style={{ zIndex: 4 }}
        src={`wlps/${wlps[0]}`}
        alt={`Wallpaper '${wlps[0]}' haven't been found!`}

        initial={{
          clipPath: 'circle(0px)'
        }}
      />

      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${blur_classes}`}>
        <motion.img ref={bottomBlur} className={img_classes}
          style={{ zIndex: 1 }}
          src={`wlps/${wlps[0]}`}
          alt={`Wallpaper '${wlps[0]}' haven't been found!`}
        />

        <motion.img ref={topBlur} className={img_classes}
          style={{ zIndex: 2 }}
          src={`wlps/${wlps[0]}`}
          alt={`Wallpaper '${wlps[0]}' haven't been found!`}

          initial={{
            clipPath: 'circle(0px)'
          }}
        />
      </div>
    </div>
  )
}
