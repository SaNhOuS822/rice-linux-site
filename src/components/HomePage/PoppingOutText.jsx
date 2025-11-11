import { motion } from 'motion/react';


export default function AnimatedH2({ children }) {
  return (
    <motion.div className="absolute top-[10%] h-[120px] w-full text-center z-10 overflow-hidden flex flex-row justify-center gap-[25px]">
      {children.split('').map((c, i) => {
        const delayCoof = Math.floor(Math.abs((children.length - 1) / 2 - i));

        return (
          <motion.span key={i} className='cwlps__title inline-block'
            initial={{
              y: '100%',
              width: (c == ' ') ? '50px' : 'auto',
            }}
            whileInView={{
              y: '0',
            }}
            transition={{
              duration: 1,
              delay: 0.05 * delayCoof,
              ease: 'backOut',
            }}
          >
            { c }
          </motion.span>
        )
      })}
    </motion.div>
  )
}
