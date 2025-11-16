import { motion } from 'motion/react';


export default function ClipFromMidText({ className, delay, children }) {
  return (
    <motion.p className={className}
      initial={{
        clipPath: 'polygon(50% -500%, 50% -500%, 50% 500%, 50% 500%)',
        opacity: 0,
        transition: { duration: 0 }
      }}
      whileInView={{
        clipPath: 'polygon(0% -500%, 100% -500%, 100% 500%, 0% 500%)',
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      { children }
    </motion.p>
  )
}
