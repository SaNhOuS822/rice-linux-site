import { forwardRef, useRef } from "react";
import { animate } from 'motion/react';

export default function WavyText({ xy, xys, fz, startOffset, children }) {
  const path = useRef([]);

  startOffset.on('change', (latest) => {
    path.current.forEach((p, _) => {
      animate(p, {
        startOffset: `${latest}%`,
      }, { duration: 0 });
    });
  });

  return (
    <>
      <svg className={`absolute ${xys} w-full z-[9] transform-3d transform -rotate-x-180 -rotate-y-[150deg] mix-blend-screen`} viewBox="0 0 300 300">
        <path fill="none" id="curve" d="M300,150c-25.614537-14.001183-59.541996-29.857371-93.685339-27.941609s-47.818989,30.766026-99.33968,27.941609-42.064354-27.782634-106.974982-27.941609" transform="translate(0 100)" />
        <text className={`${fz} font-bold fill-[#222222]`}>
          <textPath ref={ref => path.current[0] = ref} href="#curve">{ children }</textPath>
        </text>
      </svg>
      <svg className={`absolute ${xy} w-full z-10 transform-3d transform -rotate-x-180 -rotate-y-[150deg] mix-blend-screen`} viewBox="0 0 300 300">
        <path fill="none" id="curve" d="M300,150c-25.614537-14.001183-59.541996-29.857371-93.685339-27.941609s-47.818989,30.766026-99.33968,27.941609-42.064354-27.782634-106.974982-27.941609" transform="translate(0 100)" />
        <text className={`${fz} font-bold fill-white`}>
          <textPath ref={ref => path.current[1] = ref} href="#curve">{ children }</textPath>
        </text>
      </svg>
    </>
  )
}
