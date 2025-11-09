import { motion } from 'motion/react';


export default function MiniText({ color, width, height, margin }) {
  return (
    <motion.div
      style={{
        borderRadius: 1488,
        height: height,
        backgroundColor: color,
        marginLeft: margin,
      }}
      initial={{
        width: height,
        opacity: 0,
      }}
      animate={{
        width: width,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    />
  )
}
