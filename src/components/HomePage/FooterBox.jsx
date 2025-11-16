import { motion } from 'motion/react';


export default function FooterBox({ className, delay, children }) {
  return (
    <motion.div className={className}
      initial={{
        y: '100%',
        opacity: 0,
        transition: { duration: 0 }
      }}
      whileInView={{
        y: '0',
        opacity: 1,
      }}
      transition={{
        ease: 'backOut',
        duration: 1,
        delay: delay,
      }}
    >
      { children }
    </motion.div>
  )
}
