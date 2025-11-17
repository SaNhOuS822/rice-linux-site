import { motion } from 'motion/react';


export default function ClipFromMidText({ className, delay, children }) {
  return (
    <motion.p className={className}
      initial={{
        clipPath: 'polygon(50% -500%, 50% -500%, 50% 500%, 50% 500%)',
        opacity: 0,
        y: '200%',
        transition: { duration: 0 }
      }}
      whileInView={{
        clipPath: 'polygon(0% -500%, 100% -500%, 100% 500%, 0% 500%)',
        y: '0',
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: 'backOut',
        delay: delay,
      }}
    >
      { children }
    </motion.p>
  )
}
