'use client';

import { motion, useAnimate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { HIDING_DELAY, HIDING_DURATION } from '../TransitionScreen/TransitionScreen.jsx';
import UtilsCount from './UtilsCount.jsx';
import { UtilInfo, UtilDesc } from './UtilInfo.jsx';

import '../../styles/UtilsPage/UtilsPage.scss';


const transitionDuration = 1;
const transitionEase = [0.33, 1, 0.68, 1];

const getUtils = () => {
  let utils = [
    {
      title: 'Neovim',
      github: 'neovim/neovim',
      stars: '93.2k',
      watching: '981',
      forks: '6.4k',
      preview: 'utils_imgs/nvim-1.png',
      desc: [
        'Lightweight and customi-',
        'zable Vim-based text edi-',
        'tor with LSP CMP and Tre-',
        'esitter support',
      ],
    },
    {
      title: 'Kitty',
      github: 'kovidgoyal/kitty',
      stars: '29.2k',
      watching: '191',
      forks: '1.2k',
      preview: 'utils_imgs/kitty-0.png',
      desc: [
        'Simple terminal emulator  ',
        'with cursor trail',
        ' ',
        ' ',
      ],
    },
    {
      title: 'Tmux',
      github: 'tmux/tmux',
      stars: '39.1k',
      watching: '437',
      forks: '2.3k',
      preview: 'utils_imgs/tmux-0.png',
      desc: [
        'Terminal multiplexer with ',
        'oh-my-tmux and color',
        'scheme depended on',
        'OS colors',
      ],
    },
    {
      title: 'Waybar',
      github: 'Alexays/Waybar',
      stars: '9.3k',
      watching: '41',
      forks: '900',
      previewPosition: 'center center',
      previewSize: 'auto 100%',
      preview: 'utils_imgs/waybar-0.png',
      desc: [
        'Customizable desktop bar  ',
        'with adjusted colors for  ',
        'each wallpaper',
        ' ',
      ],
    },
    {
      title: 'Eww',
      github: 'elkowar/eww',
      stars: '11.5k',
      watching: '48',
      forks: '489',
      preview: 'utils_imgs/eww-0.png',
      previewPosition: 'center center',
      previewSize: 'auto 100%',
      desc: [
        'Custom desktop widgets,   ',
        'like desktop clocks,',
        'volume and brightness',
        'slider, bar popups',
      ],
    },
    {
      title: 'Swww',
      github: 'LGFae/swww',
      stars: '3.4k',
      watching: '12',
      forks: '94',
      preview: 'utils_imgs/swww-3.png',
      previewPosition: '60% center',
      previewSize: 'auto 100%',
      desc: [
        'Utilit for swapping wallp-',
        'apers with cool transitions',
        ' ',
        ' ',
      ],
    },
    {
      title: 'Rofi',
      github: 'davatorium/rofi',
      stars: '15.1k',
      watching: '95',
      forks: '655',

      preview: 'utils_imgs/rofi-0.png',
      previewPosition: 'center center',
      desc: [
        'Custom menu for creating',
        'app launcher, wallpaper', 
        'launcher and emoji picker ',
      ],
    },
  ]

  return utils;
}

const utils = getUtils();


function step(l, num, r) {
  if (l <= num && num <= r) return num;
    else if (l > num) return l;
      else return r;
}

function round(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}


function UtilImage({ index, util, cpi }) {
  const [scope, animate] = useAnimate();
  const [animDelay, setAnimDelay] = useState(HIDING_DELAY + HIDING_DURATION);

  useEffect(() => {
    animate(scope.current,
      {
        translateX: '-50%',
        rotate: 75 * step(-2, cpi - index, 2), 
      },
      {
        delay: animDelay,
        duration: transitionDuration,
        ease: transitionEase,
      }
    );
    if (animDelay != 0) setAnimDelay(0);
  }, [cpi]);

  return (
    <motion.div ref={scope} className="utils__image__wrapper"
      initial={{
        translateX: '-50%',
        rotate: -150,
      }}
      animate={{
        translateX: '-50%',
        rotate: 75 * step(-2, 0 - index, 2),
      }}
      transition={{
        delay: HIDING_DELAY + HIDING_DURATION,
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.div className="utils__image">
        <div className="utils__image-img__wrapper" style={{
          backgroundImage: `url(${util.preview})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: util.previewPosition || '10% center',
          backgroundSize: util.previewSize || 'auto 103%',
        }} />
      </motion.div>
    </motion.div>
  );
};


export default function UtilsPage() {
  const [cpi, setCpi] = useState(0);
  const stopScroll = useRef(false);

  const [delay, setDelay] = useState(HIDING_DELAY + HIDING_DURATION);
  const [countLength, setCountLength] = useState(9);

  const handleWheel = (event) => {
    if (!stopScroll.current) {
      const d = 2 * (event.deltaY > 0) - 1;

      if (0 <= cpi + d && cpi + d < utils.length) {
        stopScroll.current = true;
        setCpi(previous => previous + d);

        setTimeout(() => {
          stopScroll.current = false;
        }, (transitionDuration) * 1000);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    }
  }, [cpi]);

  setTimeout(() => {
    setCountLength(utils.length - 1);
    setDelay(0);
  }, (HIDING_DELAY + HIDING_DURATION) * 1000);

  return (
    <div className="utils">
      <UtilInfo utils={utils} cpi={cpi} transition={{
        ease: transitionEase,
        duration: transitionDuration,
        delay: delay,
      }} />
      <UtilDesc utils={utils} cpi={cpi} transition={{
        ease: transitionEase,
        duration: transitionDuration,
        delay: delay,
      }} />
      <div className="utils__count__wrapper">
        <UtilsCount cpi={cpi} delay={delay} style={{
          transform: `translateX(30%) translateY(2%) scale(${window.innerHeight / 1808})`
        }} />
        <motion.p className="utils__count-separator"
          initial={{
            fontSize: '1px',
          }}
          animate={{
            fontSize: `${window.innerHeight / 10}px`,
          }}
          transition={{
            delay: HIDING_DELAY + HIDING_DURATION,
            duration: transitionDuration,
            ease: transitionEase,
          }}
        >/</motion.p>
        <UtilsCount cpi={countLength} delay={delay} style={{
          transform: `translateX(-30%) translateY(2%) scale(${window.innerHeight / 1808})`
        }} />
      </div>
      {utils.map((util, index) => {
        return (
          <UtilImage key={index} util={util} index={index} cpi={cpi} />
        )
      })}
    </div>
  )
}

