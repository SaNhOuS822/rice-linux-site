'use client';


import { motion, useAnimate } from 'motion/react';

import ChangingWlps from "./ChangingWlps";
import AnimatedH2 from "./PoppingOutText";

import '../../styles/HomePage/ThemeChanging.scss';
import { useEffect, useState } from 'react';


const colors = [
  '#C259E7',
  '#758EDB', // #9F97A1
  '#EE5519',
  '#4173D7', // #A16F93 #5B6495 
  '#CE9F6E', // #385D8F #4C91CB
  '#BA42C7', // #6D91B8
  '#A87856', // #316896
]


export default function ThemeChanging() {
  const [cwlp, setCwlp] = useState(0);

  const delay = 3;
  const duration = 0.8;

  let cards = [{}, {}];
  let cards_params = [
    {
      xy: 'top-[50%] left-[5%] w-[300px] h-[400px]',
      title: 'Colors',
      text: 'OS colors adapsts to your wallpapers colors automaticly when you changing your wallpapers. So you should not worry about your theme colors, just pick right wallpaper and your\'re done',
    },
    {
      xy: 'top-[70%] left-[60%] w-[600px] h-[250px]',
      title: 'Apps',
      text: 'Many app colors also adapts to your wallpapers colors, it works with GTK custom themes. But many CMDs also have colors depended on OS themes. But sadly: Neovim, Dolphin, Nautilus themes does not have OS colors',
    },
  ];

  for (let i = 0; i < cards.length; i++) {
    [cards[i].card, cards[i].cardAnimate] = useAnimate();
    [cards[i].blur, cards[i].blurAnimate] = useAnimate();
    [cards[i].underline, cards[i].underlineAnimate] = useAnimate();
  }

  useEffect(() => {
    setTimeout(() => {
      if (cwlp < colors.length - 1) setCwlp(cwlp + 1);
      else setCwlp(0);
    }, delay * 1000);
  }, [cwlp]);

  useEffect(() => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].cardAnimate(cards[i].card.current, {
        border: `5px solid ${colors[cwlp]}`
      }, { duration: duration, ease: 'easeInOut' });

      cards[i].blurAnimate(cards[i].blur.current, { 
        border: `5px solid ${colors[cwlp]}`
      }, { duration: duration, ease: 'easeInOut' });

      cards[i].underlineAnimate(cards[i].underline.current, { 
        borderBottom: `5px solid ${colors[cwlp]}`
      }, { duration: duration, ease: 'easeInOut' });
    }
  }, [cwlp]);

  return (
    <div className="bg-[#222436] h-screen w-screen p-[130px_100px_70px_100px] overflow-hidden">
      <div className="h-full w-full relative">
        <ChangingWlps cwlp={cwlp} duration={duration} delay={delay}>neon_hole.jpg show.gif ocean.jpg bridge.jpg cafe.gif pc.gif street.gif</ChangingWlps>
        <AnimatedH2>Adaptive Theme</AnimatedH2>
        {cards_params.map((param, i) => {
          return (
            <>
              <motion.div ref={cards[i].blur} className={`card__blur ${param.xy}`}
                initial={{
                  border: `5px solid ${colors[0]}`
                }}
              />
              <motion.div ref={cards[i].card} className={`card ${param.xy}`}
                initial={{
                  border: `5px solid ${colors[0]}`
                }}
              >
                <h3 className="card__title">
                  { param.title }
                </h3>
                <motion.div ref={cards[i].underline} className="card__underline"
                  initial={{
                    borderBottom: `5px solid ${colors[0]}`
                  }}
                />
                <p className="card__content">
                  { param.text }
                </p>
              </motion.div>
            </>
          )
        })}
      </div>
    </div>
  )
}
