import { motion } from 'motion/react';

import '../../styles/DownloadPage/RevealingText.scss';


export default function RevealingText({ fontSize, space, children }) {
  return (
    <div className="revealingText">
      {children.split('').map((c, i) => {
        return (
          <motion.div key={i} className="revealingText__char"
            style={{
              fontSize: fontSize,
              marginRight: (c == ' ') ? space : 0,
              paddingBottom: fontSize / 10,
            }}
            initial={{
              y: '100%',
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.02 * i,
              duration: 0.5,
              ease: 'backOut',
            }}
          >
            {c}
          </motion.div>
        )
      })}
    </div>
  )
}
