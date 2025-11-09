import { motion } from 'motion/react';
import { useState } from 'react';


export default function TypingText({ children, space, delay, CHAR_DELAY }) {
  const [isDelayed, setIsDelayed] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  let comment = false;

  setTimeout(() => {
    setIsDelayed(false);
  }, (delay) * 1000);

  setTimeout(() => {
    setIsTyping(false);
  }, (children.length * CHAR_DELAY + delay) * 1000);

  if (children[0] == children[1] && children[0] == '/') comment = true;

  return (
    <div className={`font-normal flex flex-row flex-wrap`}>
      {children.split('').map((c, i) => {
        return <motion.span key={i} className={`${(comment) ? 'text-[#9198A1]' : 'text-white'} overflow-hidden inline-block h-[35px]`}
          initial={{
            width: 0
          }}
          animate={{
            width: (c == ' ') ? space : 'auto'
          }}
          transition={{
            duration: 0,
            delay: delay + CHAR_DELAY * i
          }}
        >
          { c }
        </motion.span>
      })}
      { isTyping && (!isDelayed) && <motion.div className="bg-white h-[30px] w-[3px] ml-[1px]"/> }
    </div>
  )
}
