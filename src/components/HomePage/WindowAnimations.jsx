'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import '../../styles/HomePage/WindowAnimations.scss';


function RevealingText({className, children}) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.95', 'end 0.8']
  });

  const words = children.split(' ');

  return (
    <p className={className}
      ref={element}
    >
      {words.map((word, i) => {
        const characters = word.split('');

        const start = i / words.length;
        const end = start + (1 / words.length);

        const amount = end - start;
        const step = amount / word.length;
      
        return (
          <span className={`${className}-word`}
            key={i}
          >
            {characters.map((char, i) => {
              const start_c = start + (step * i);
              const end_c = start + (step * (i + 1))

              const opacity = useTransform(scrollYProgress, [start_c, end_c], [0, 1]);

              return (
                <span className={`${className}-word-char-wrapper`} key={i}>
                  <span className={`${className}-word-char ${className}-word-char-shadow`}>
                    {char}
                  </span>
                  <motion.span className={`${className}-word-char`} style={{opacity}}>
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        )
      })}
    </p>
  )
}


export default function WindowAnimations() {
  return (
    <div className="animations__wrapper">
      <div className="animations__content__wrapper">
        <div className="animations__content__infoBlock">
          <h2 className="animations__content__infoBlock-title">
            Animations
          </h2>
          <RevealingText className="animations__content__infoBlock-text">
            My dotfiles provides you beautiful animations right from the box. You can easily adjust them so they can match your preferences.
          </RevealingText>
        </div>
        <motion.div className="animations__preview__wrapper" drag dragSnapToOrigin>
          <div className="animations__preview-background" />
          <div className="animations__preview-background animations__preview-background-glow" />
          <video muted={true} autoPlay={true} loop={true} src="../../../public/windows_animations_preview.mp4" className="animations__preview" />
        </motion.div>
      </div>
    </div>
  );
}

