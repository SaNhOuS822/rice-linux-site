'use client';

import { motion, useAnimate } from 'motion/react';

import '../../../styles/DownloadPage/GitHub/Readme.scss';


export default function Readme() {
  const [scope, animate] = useAnimate();

  setTimeout(() => {
    if (scope.current != null) animate(scope.current, { maskImage: 'radial-gradient(transparent 72%, black 72% 100%)' }, { delay: 3.3, duration: 0.5, ease: 'easeInOut' });
  }, 2000);

  return (
    <div className="miniGitHub__readme mt-[20px] mb-[100px] pb-[100px]">
      <div className="capitalize text-[100px] text-center text-transparent mt-[50px] bg-clip-text bg-linear-30 from-[#1F9BF3] to-[#C259E7]" style={{ fontFamily: 'Anurati Pro Filled' }}>My Dotfiles</div>

      <div className="border-b-[2px] border-[#3D444D] m-[50px] mb-0" />

      <div className="text-center text-white text-[40px] font-bold mt-[20px]">Gallery</div>

      <div className="flex flex-col items-center gap-[30px] mt-[20px] mr-[40px] ml-[40px]">
        <img className='rounded-[10px]' src='../../../../public/gallery/morning-ocean-sea-sunset-art-minimalistic.png' alt="" />
        <img className='rounded-[10px]' src='../../../../public/gallery/neon-hole-art-minimalistic-space-blackhole-fetch-cava-rofi.png' alt="" />
        <img className='rounded-[10px]' src='../../../../public/gallery/samurai-japanese-light-art-live-0-video-minimalistic-fastfetch.png' alt="" />
        <img className='rounded-[10px]' src='../../../../public/gallery/lake-tree-sunset-mountain-yazi-pipes.png' alt="" />
        <img className='rounded-[10px]' src='../../../../public/gallery/berserk-swords-anime-art-minimalistic-telegram.png' alt="" />
        <img className='rounded-[10px]' src='../../../../public/gallery/sunakku-pixel-street-house-morning-day-live-0-video-btop.png' alt="" />
      </div>

      <div className="border-b-[2px] border-[#3D444D] m-[50px] mb-0" />

      <div className="mt-[20px] ml-[40px] text-white text-[35px] font-bold">Todo List</div>
      <div className="mt-[15px] ml-[50px] flex flex-col gap-[12px]">
        <div className="text-white text-[18px] font-bold">&gt; Shaders</div>
        <div className="text-white text-[18px] font-bold">&gt; Custom gdm</div>
        <div className="text-white text-[18px] font-bold">&gt; Widgets</div>
        <div className="text-white text-[18px] font-bold">&gt; Inner borders</div>
        <div className="text-white text-[18px] font-bold">&gt; Cava on bg</div>
        <div className="text-white text-[18px] font-bold">&gt; Mp3 player</div>
        <div className="text-white text-[18px] font-bold">&gt; Quickshell bar</div>
      </div>

      <div className="border-b-[2px] border-[#3D444D] m-[50px] mb-0" />

      <div className="mt-[20px] ml-[40px] text-white text-[35px] font-bold">How To Install</div>
      <div className="mt-[15px] ml-[40px] text-white text-[16px] font-bold">First you need install git cli. After this just copy command below, past it in terminal and run it.</div>

      <div className="miniGitHub__readme__code mt-[20px] ml-[40px] mr-[40px]">
        <motion.div ref={scope} className="miniGitHub__readme__code__overlay bg-green-500"
          initial={{
            maskImage: 'radial-gradient(transparent 0%, black 0% 100%)',
            borderRadius: '100%',
            height: '0',
            width: '0',
          }}
          animate={{
            borderRadius: '5px',
            height: '100%',
            width: '100%',
          }}
          transition={{
            delay: 5,
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          Copy this
        </motion.div>
        git clone https://github.com/SaNhOuS228/dotfiles <br />
        cd dotfiles <br />
        sh ./install.sh
      </div>

      <div className="mt-[15px] ml-[40px] text-white text-[16px] font-bold">After this script will do everything for you.</div>

      <div className="border-b-[2px] border-[#3D444D] m-[50px] mb-0" />

      <div className="mt-[20px] ml-[40px] text-white text-[35px] font-bold">Troubleshooting</div>
      <div className="mt-[15px] ml-[40px] text-white text-[16px] font-bold">If something went wrong during instalation you should first run script as root user, if it does not help, you should report your error, provide screenshots and i will help you.</div>
    </div>
  )
}
