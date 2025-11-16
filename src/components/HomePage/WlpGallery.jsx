import { useAnimate, useScroll, useTransform, animate } from 'motion/react';
import { useRef } from 'react';

import '../../styles/HomePage/WlpGallery.scss';
import WavyText from './WavyText';


export default function WlpGallery({ children }) {
  const wlps = children.split(' ');

  const [carousel, carouselAnimate] = useAnimate();

  const wave_left = useRef([]);
  const wave_right = useRef([]);
  const waves_count = 15;

  const { scrollYProgress } = useScroll({
    target: carousel,
    offset: ['start end', 'end start']
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7, 1], [180, 190, 210, 230, 240]);
  const startOffset = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7, 1], [90, 40, 20, 0, -50]);
  const waveHeight = useTransform(scrollYProgress, [0, 1], [0, waves_count - 1])

  waveHeight.on('change', (latest) => {
    wave_left.current.forEach((wave, i) => {
      animate(wave, {
        width: `${Math.max((Math.max(latest, i) - Math.min(latest, i)) / (waves_count - 1) * 100, 0)}%`,
      }, { duration: 0 });
    });
    wave_right.current.forEach((wave, i) => {
      animate(wave, {
        width: `${Math.max((Math.max(latest, i) - Math.min(latest, i)) / (waves_count - 1) * 100, 0)}%`,
      }, { duration: 0 });
    });
  });

  rotateX.on('change', (latest) => {
    carouselAnimate(carousel.current, {
      transform: `perspective(10000px) rotateY(-40deg) rotateX(${latest}deg)`,
    }, { duration: 0 });
  });

  return (
    <div className="carousel__wrapper bg-[#222436] h-[120vh] w-screen overflow-hidden relative">
      <div className="absolute h-full w-[30%] top-0 left-0 flex flex-col justify-around">
        {[...Array(waves_count)].map((_, i) => {
          return <div ref={ref => wave_left.current[i] = ref} className="h-[5%] bg-[#1F9BF3]" key={i} />
        })}
      </div>
      <div className="absolute h-full w-[30%] top-0 right-0 flex flex-col justify-around rotate-y-180">
        {[...Array(waves_count)].map((_, i) => {
          return <div ref={ref => wave_right.current[i] = ref} className="h-[5%] bg-[#C259E7]" key={i} />
        })}
      </div>

      <WavyText fz="text-[20px]" xy="left-[-10%] top-[0%]" xys="left-[-9%] top-[1%]" startOffset={startOffset}>Many 4K Wallpapers</WavyText>
      <WavyText fz="text-[20px] scale-[60%]" xy="left-[-31%] top-[-38%]" xys="left-[-30.5%] top-[-37.5%]" startOffset={startOffset}>Live 60fps 4K wallpapers</WavyText>
      <WavyText fz="text-[20px] scale-[60%]" xy="left-[-31%] top-[-30%]" xys="left-[-30.5%] top-[-29.5%]" startOffset={startOffset}>And wallpaper manager</WavyText>

      <div ref={carousel} className="carousel absolute z-20 h-full w-full top-0 left-0 transform-3d">
        {wlps.map((wlp, i) => {
          return (
            <img className='carousel__item carousel__item__blur absolute rounded-[25px]' key={i}
              src={`carousel/${wlp}`}
              style={{
                transform: `rotateX(calc(${i}deg * (360 / ${wlps.length + 10}))) translateZ(1399px)`,
              }}
            />
          )
        })}
        {wlps.map((wlp, i) => {
          return (
            <img className='carousel__item absolute rounded-[25px]' key={i}
              src={`carousel/${wlp}`}
              style={{
                transform: `rotateX(calc(${i}deg * (360 / ${wlps.length + 10}))) translateZ(1400px)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
