import { motion } from 'motion/react';

import '../../styles/TransitionScreen/ExitScreenHorizontal.scss';


export default function ExitScreenHorizontal() {
  return (
    <>
      <motion.div className="exitScreenHorizontal__half exitScreenHorizontal__half__top"
        exit={{
          left: 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      />
      <motion.div className="exitScreenHorizontal__half exitScreenHorizontal__half__bottom"
        exit={{
          right: 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      />
    </>
  );
};
