'use client';

import { motion, useAnimate } from 'motion/react';

import '../../styles/UtilsPage/UtilInfo.scss';
import { useEffect } from 'react';


function SectionedText({ utils, stat, textSur, cpi, height, transition }) {
  return (
    <div className={`util__info__${stat}__wrapper`} style={{
      height: height,
    }}>
      {utils.map((util, i) => {
        const [scope, animate] = useAnimate();

        useEffect(() => {
          animate(scope.current, { top: height * (i - cpi), }, transition);
        }, [cpi]);

        return (
          <motion.div ref={scope} key={i} className={`util__info__${stat}`}
            initial={{
              top: height * (i + 1),
            }}
          >
            {`${textSur[0]}${util[stat]}${textSur[1]}`}
          </motion.div>
        )
      })}
    </div>
  )
}


export function UtilInfo({ utils, cpi, transition }) {
  return (
    <div className="util__info__wrapper">
      <div className="util__info">
        <SectionedText utils={utils} cpi={cpi} stat='title' textSur={['', '']} height={90} transition={transition} />
        <SectionedText utils={utils} cpi={cpi} stat='github' textSur={['', '']} height={40} transition={transition} />

        <SectionedText utils={utils} cpi={cpi} stat='stars' textSur={['stars: ', '']} height={28} transition={transition} />
        <SectionedText utils={utils} cpi={cpi} stat='forks' textSur={['forks: ', '']} height={28} transition={transition} />
        <SectionedText utils={utils} cpi={cpi} stat='watching' textSur={['watching: ', '']} height={28} transition={transition} />
      </div>
    </div>
  )
}


export function UtilDesc({ utils, cpi, transition }) {
  return (
    <div className="util__desc__wrapper">
      <div className="util__desc">
        <div className="util__desc__title__wrapper">
          <motion.p className="util__desc__title"
            initial={{
              top: 73,
            }}
            animate={{
              top: 0,
            }}
            transition={transition}
          >
            Description:
          </motion.p>
        </div>
        {[0, 1, 2, 3].map((lineIndex, _) => {
          return (
            <div key={lineIndex} className="util__desc__content__wrapper">
              {utils.map((util, i) => {
                const [scope, animate] = useAnimate();

                useEffect(() => {
                  console.log(`TOP: ${40 * (i - cpi)}`);
                  animate(scope.current, { top: 40 * (i - cpi) }, transition);
                }, [cpi]);

                return (
                  <motion.div ref={scope} key={i} className="util__desc__content"
                    initial={{
                      top: 40 * (i + 1)
                    }}
                  >
                    {util.desc[lineIndex]}
                  </motion.div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

