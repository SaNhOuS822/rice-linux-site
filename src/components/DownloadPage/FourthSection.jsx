import SectionWrapper from "./SectionWrapper.jsx";
import RevealingText from './RevealingText';

import { motion } from 'motion/react';

import '../../styles/DownloadPage/FourthSection.scss';


export default function FourthSection() {
  return (
    <SectionWrapper className="h-screen w-screen relative">
      <h2 className="absolute top-[20%] left-0 text-center w-full overflow-hidden pb-[10px]">
        <motion.p className="text-white text-center w-full font-bold text-[150px]"
          initial={{
            y: '100%',
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: 'backOut',
            delay: 0.2,
          }}
        >
          Congradulations!
        </motion.p>
      </h2>
      <p className='absolute top-[60%] left-0 w-full overflow-hidden flex justify-center gap-[15px] p-[20px_0px]'>
        {'Now you can enjoy using Rice Linux!'.split(' ').map((text, i) => {
          return (
            <motion.p className='text-[70px] text-white font-bold'
              initial={{
                y: (i % 2 == 0) ? '100%' : '-100%',
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: 'backOut',
                delay: 0.5 + 0.1 * i,
              }}
            >
              { text }
            </motion.p>
          )
        })}
      </p>
    </SectionWrapper>
  )
}
