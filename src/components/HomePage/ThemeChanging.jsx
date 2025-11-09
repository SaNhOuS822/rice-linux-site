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
  '#A87856', // #316896
  '#BA42C7', // #6D91B8
]


export default function ThemeChanging() {
  const [cwlp, setCwlp] = useState(0);

  const delay = 3;
  const duration = 0.8;

  const [card, cardAnimate] = useAnimate();
  const [cardBlur, cardBlurAnimate] = useAnimate();
  const [underline, underlineAnimate] = useAnimate();

  const [card1, card1Animate] = useAnimate();
  const [cardBlur1, cardBlur1Animate] = useAnimate();
  const [underline1, underline1Animate] = useAnimate();

  let cards = [{}, {}];
  let cards_params = [
    'top-[50%] left-[5%] w-[300px] h-[400px]',
    'top-[60%] left-[50%] w-[1000px] h-[300px]',
  ];

  for (let i = 0; i < 2; i++) {
    [cards[i].card, cards[i].cardAnimate] = useAnimate();
    [cards[i].blur, cards[i].blurAnimate] = useAnimate();
    [cards[i].underline, cards[i].underlineAnimate] = useAnimate();
  }

  console.log(cards[1].card, card)

  useEffect(() => {
    setTimeout(() => {
      if (cwlp < colors.length - 1) setCwlp(cwlp + 1);
      else setCwlp(0);
    }, delay * 1000);
  }, [cwlp]);

  useEffect(() => {
    cardAnimate(card.current, { 
      border: `5px solid ${colors[cwlp]}`
    }, { duration: duration, ease: 'easeInOut' });

    cardBlurAnimate(cardBlur.current, { 
      border: `5px solid ${colors[cwlp]}`
    }, { duration: duration, ease: 'easeInOut' });

    underlineAnimate(underline.current, { 
      borderBottom: `5px solid ${colors[cwlp]}`
    }, { duration: duration, ease: 'easeInOut' });
  }, [cwlp]);

  return (
    <div className="bg-[#222436] h-screen w-screen p-[130px_100px_70px_100px] overflow-hidden">
      <div className="h-full w-full relative">
        <ChangingWlps cwlp={cwlp} duration={duration} delay={delay}>neon_hole.jpg show.gif ocean.jpg bridge.jpg cafe.gif street.gif pc.gif</ChangingWlps>
        <AnimatedH2>Adaptive Theme</AnimatedH2>
        <motion.div ref={cardBlur} className="card__blur top-[50%] left-[5%] w-[300px] h-[400px]"
          initial={{
            border: `5px solid ${colors[0]}`
          }}
        />
        <motion.div ref={card} className="card top-[50%] left-[5%] w-[300px] h-[400px]"
          initial={{
            border: `5px solid ${colors[0]}`
          }}
        >
          <h3 className="card__title">
            Colors
          </h3>
          <motion.div ref={underline} className="card__underline"
            initial={{
              borderBottom: `5px solid ${colors[0]}`
            }}
          />
          <p className="card__content">
            OS colors adapsts to your wallpapers colors automaticly when you changing your wallpapers. So you should not worry about your theme colors, just pick right wallpaper and your're done
          </p>
        </motion.div>

        <motion.div ref={cards[1].blur} className="card__blur top-[60%] left-[50%] w-[1000px] h-[300px]"
          initial={{
            border: `5px solid ${colors[0]}`
          }}
        />
        <motion.div ref={cards[1].card} className="card top-[60%] left-[50%] w-[1000px] h-[300px]"
          initial={{
            border: `5px solid ${colors[0]}`
          }}
        >
          <h3 className="card__title">
            Colors
          </h3>
          <motion.div ref={cards[1].underline} className="card__underline"
            initial={{
              borderBottom: `5px solid ${colors[0]}`
            }}
          />
          <p className="card__content">
            OS colors adapsts to your wallpapers colors automaticly when you changing your wallpapers. So you should not worry about your theme colors, just pick right wallpaper and your're done
          </p>
        </motion.div>
      </div>
    </div>
  )
}
