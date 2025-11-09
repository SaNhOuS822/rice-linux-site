import { motion } from 'motion/react';


export default function MiniIcon({ color, size, margin }) {
  return (
    <motion.div
      style={{
        borderRadius: 1488,
        backgroundColor: color,
        marginLeft: margin,
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    />
  )
}
