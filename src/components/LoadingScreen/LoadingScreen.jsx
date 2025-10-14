'use client';

import { motion, useAnimate } from 'motion/react'

import '../../styles/LoadingScreen/LoadingScreen.scss'
import { useEffect, useState } from 'react'


export const SHOWING_DELAY = 1;
export const SHOWING_DURATION = 0.5;
export const HIDING_DELAY = SHOWING_DELAY + SHOWING_DURATION + 0.2;
export const HIDING_DURATION = SHOWING_DURATION;


export default function LoadingScreen({ loaded }) {
  const [topScope, topAnimate] = useAnimate();
  const [topText, topTextAnimate] = useAnimate();
  const [topUnderline, topUnderlineAnimate] = useAnimate();

  const [bottomScope, bottomAnimate] = useAnimate();
  const [bottomText, bottomTextAnimate] = useAnimate();
  const [bottomUnderline, bottomUnderlineAnimate] = useAnimate();

  useEffect(() => {
    if (loaded == true) {
      topAnimate(topScope.current, { x: '100%' }, { delay: HIDING_DELAY, duration: HIDING_DURATION, ease: 'easeInOut' });
      topTextAnimate(topText.current, { y: 0 }, { delay: SHOWING_DELAY, duration: SHOWING_DURATION, ease: 'easeInOut' });
      topUnderlineAnimate(topUnderline.current, { x: 0 }, { delay: SHOWING_DELAY, duration: SHOWING_DURATION, ease: 'easeInOut' });

      bottomAnimate(bottomScope.current, { x: '-100%' }, { delay: HIDING_DELAY, duration: HIDING_DURATION, ease: 'easeInOut' });
      bottomTextAnimate(bottomText.current, { y: 0 }, { delay: SHOWING_DELAY, duration: SHOWING_DURATION, ease: 'easeInOut' });
      bottomUnderlineAnimate(bottomUnderline.current, { x: 0 }, { delay: SHOWING_DELAY, duration: SHOWING_DURATION, ease: 'easeInOut' });
    }
  }, [loaded]);

  return (
    <div className="loadingScreen">
      <motion.div ref={topScope} className="loadingScreen__half loadingScreen__top" initial={{ x: 0 }}>
        <motion.div className="loadingScreen__half-container">
          <motion.span ref={topText} className="loadingScreen__half-text" initial={{ y: '100%', }}>Make it</motion.span>
        </motion.div>
        <motion.div ref={topUnderline} className="loadingScreen__underline" initial={{ x: '-100%' }} />
      </motion.div>
      <motion.div ref={bottomScope} className="loadingScreen__half loadingScreen__bottom" initial={{ x: 0 }}>
        <motion.div ref={bottomUnderline} className="loadingScreen__underline" initial={{ x: '100%' }} />
        <motion.div className="loadingScreen__half-container">
          <motion.span ref={bottomText} className="loadingScreen__half-text" initial={{ y: '-100%', }}>Easier</motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}
