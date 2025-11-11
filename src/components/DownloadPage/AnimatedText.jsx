import { motion } from 'motion/react';


export default function AnimatedText({ children, space }) {
  const shadow = '#ffffff77 0 0 15px';
  const text = 'text-white font-bold text-[80px]';
  const text_box = 'inline-block pb-[16px]';

  return (
    <div className="overflow-hidden relative">
      <div>
        {children.split('').map((c, i) => {
          return (
            <motion.span key={i} className={`${text} ${text_box}`}
              style={{
                marginRight: (c == ' ') ? space : 0,
                textShadow: shadow,
              }}
              initial={{
                y: (c == '•') ? 0 : (i % 2 == 0) ? '100%' : '-100%'
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 0.2,
              }}
            >
              { c }
            </motion.span>
          )
        })}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((c, i) => {
          return (
            <motion.span key={i} className={`${text} ${text_box}`}
              style={{
                marginRight: (c == ' ') ? space : 0,
                textShadow: shadow,
              }}
              initial={{
                y: (c == '•') ? '-100%' : 0,
              }}
              animate={{
                y: (i % 2 == 0) ? '-100%' : '100%',
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 0.2,
              }}
            >
              { c }
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}
