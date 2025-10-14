import { motion, useAnimate, usePresence } from 'motion/react'

import '../../styles/LoadingScreen/LoadingScreen.scss'
import { useEffect } from 'react'


export const SHOWING_DELAY = 1.5
export const SHOWING_DURATION = 0.5
export const HIDING_DELAY = SHOWING_DELAY + SHOWING_DURATION + 0.2
export const HIDING_DURATION = SHOWING_DURATION


export default function LoadingScreen() {
  return (
    <>
      <div className="loadingScreen">
        <motion.div className="loadingScreen__half loadingScreen__top"
          initial={{
            x: 0
          }}
          animate={{
            x: '100%'
          }}
          transition={{
            delay: HIDING_DELAY,
            duration: HIDING_DURATION,
            ease: 'easeInOut',
          }}
        >
          <motion.div className="loadingScreen__half-container">
            <motion.span className="loadingScreen__half-text"
              initial={{
                y: '100%',
              }}
              animate={{
                // y: '22%',
                y: 0,
              }}
              transition={{
                delay: SHOWING_DELAY,
                duration: SHOWING_DURATION,
                ease: 'easeInOut'
              }}
            >Make it</motion.span>
          </motion.div>
          <motion.div className="loadingScreen__underline"
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            transition={{
              delay: SHOWING_DELAY,
              duration: SHOWING_DURATION,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div className="loadingScreen__half loadingScreen__bottom"
          initial={{
            x: 0,
          }}
          animate={{
            x: '-100%'
          }}
          transition={{
            delay: HIDING_DELAY,
            duration: HIDING_DURATION,
            ease: 'easeInOut',
          }}
        >
          <motion.div className="loadingScreen__underline"
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            transition={{
              delay: SHOWING_DELAY,
              duration: SHOWING_DURATION,
              ease: "easeInOut",
            }}
          />
          <motion.div className="loadingScreen__half-container">
            <motion.span className="loadingScreen__half-text"
              initial={{
                y: '-100%',
              }}
              animate={{
                // y: '-10%',
                y: 0,
              }}
              transition={{
                delay: SHOWING_DELAY,
                duration: SHOWING_DURATION,
                ease: 'easeInOut'
              }}
            >Easier</motion.span>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
