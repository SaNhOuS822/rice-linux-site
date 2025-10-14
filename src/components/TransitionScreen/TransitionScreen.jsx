import { motion, usePresence } from 'motion/react';

import '../../styles/TransitionScreen/TransitionScreen.scss';
import { animate } from 'motion';
import { useEffect } from 'react';


export const LETTERS_DELAY = 0.02;
export const SHOWING_DELAY = 0
export const SHOWING_DURATION = 0.5
export const HIDING_DELAY = SHOWING_DELAY + SHOWING_DURATION + 0.0
export const HIDING_DURATION = SHOWING_DURATION


export default function TransitionScreen({ topText, bottomText}) {
  const [isPresent, safeToRemove] = usePresence();

  const topTextAnimated = topText.split('').map((c, i) => {
    const delayCoof = 0.2 * Math.floor(Math.abs((topText.length - 1) / 2 - i));

    return (
      <motion.span key={i} className='transitionScreen__half-text-char transitionScreen__half-text-char-top'
        initial={{
          y: '100%',
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2 * delayCoof,
          ease: 'backOut',
        }}
      >{c}</motion.span>
    )
  });

  const bottomTextAnimated = bottomText.split('').map((c, i) => {
    const delayCoof = 0.2 * Math.floor(Math.abs((bottomText.length - 1) / 2 - i));

    return (
      <motion.span key={i} className='transitionScreen__half-text-char transitionScreen__half-text-char-bottom'
        initial={{
          y: '-100%',
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2 * delayCoof,
          ease: 'backOut',
        }}
      >{c}</motion.span>
    )
  });

  const newBorder = '15px solid white';
  const hidingEase = [0.37, 0, 0.63, 1];
  const hidingShapeEase = [0.32, 0, 0.67, 0];
  const exitShapeTransition = {
    duration: HIDING_DELAY - 0.3,
    delay: HIDING_DELAY,
    ease: hidingShapeEase,
  }

  useEffect(() => {
    if (isPresent) {
      animate('.transitionScreen__half',
        {
          width: '100vh',
        }, exitShapeTransition
      );

      animate('.transitionScreen__top',
        {
          borderRadius: '100vw 100vw 0 0',
        }, exitShapeTransition
      );
      animate('.transitionScreen__bottom',
        {
          borderRadius: '0 0 100vw 100vw',
        }, exitShapeTransition
      );
    };
  }, [isPresent]);

  return (
    <>
      <motion.div className="transitionScreen"
        animate={{
          rotate: 120,
          scale: 0,
        }}
        transition={{
          delay: HIDING_DELAY,
          duration: HIDING_DURATION,
          ease: hidingEase,
        }}
      >
        <motion.div className="transitionScreen__half transitionScreen__top"
          initial={{
            border: '5px solid white',
            borderBottom: 0,
          }}
          animate={{
            border: newBorder,
            width: '100vh'
          }}
          transition={{
            delay: HIDING_DELAY,
            duration: HIDING_DURATION,
            ease: hidingEase,
          }}
        >
          <motion.div className="transitionScreen__half-container">
            <motion.span className="transitionScreen__half-text"
              initial={{

              }}
              animate={{

              }}
              transition={{
                delay: SHOWING_DELAY,
                duration: SHOWING_DURATION,
                ease: 'easeInOut',
              }}
            >{topTextAnimated}</motion.span>
          </motion.div>
          <motion.div className="transitionScreen__underline transitionScreen__underline-top"
            initial={{
              width: 0,
            }}
            animate={{
              width: '110%',
            }}
            transition={{
              delay: SHOWING_DELAY,
              duration: SHOWING_DURATION,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
        <motion.div className="transitionScreen__half transitionScreen__bottom"
          initial={{
            border: '5px solid white',
            borderTop: 0,
          }}
          animate={{
            borderRadius: '0 0 100vw 100vw',
            border: newBorder,
            width: '100vh',
          }}
          transition={{
            delay: HIDING_DELAY,
            duration: HIDING_DURATION,
            ease: hidingEase,
          }}
        >
          <motion.div className="transitionScreen__underline transitionScreen__underline-bottom"
            initial={{
              width: 0,
            }}
            animate={{
              width: '110%',
            }}
            transition={{
              delay: SHOWING_DELAY,
              duration: SHOWING_DURATION,
              ease: "easeInOut",
            }}
          />
          <motion.div className="transitionScreen__half-container">
            <motion.span className="transitionScreen__half-text"
              initial={{
                
              }}
              animate={{

              }}
              transition={{
                delay: SHOWING_DELAY,
                duration: SHOWING_DURATION,
                ease: 'easeInOut'
              }}
            >{bottomTextAnimated}</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

