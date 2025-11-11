import { motion } from 'motion/react';

import '../../styles/TransitionScreen/ExitScreenVertical.scss';


export const DURATION = 0.5;


export default function ExitScreenVertical() {
  return (
    <>
      <motion.div className="exitScreenVertical__half exitScreenVertical__half__top"
        exit={{
          top: 0,
        }}
        transition={{
          duration: DURATION,
          ease: 'easeInOut',
        }}
      />
      <motion.div className="exitScreenVertical__half exitScreenVertical__half__bottom"
        exit={{
          bottom: 0,
        }}
        transition={{
          duration: DURATION,
          ease: 'easeInOut',
        }}
      />
    </>
  );
};

