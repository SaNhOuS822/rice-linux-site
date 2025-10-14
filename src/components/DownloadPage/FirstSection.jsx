import { motion } from 'motion/react';
import { useState } from 'react';

import { HIDING_DELAY, HIDING_DURATION } from '../TransitionScreen/TransitionScreen.jsx';
import RevealingText from './RevealingText';
import GitHubIcon from '../../components/svgs/GitHubIcon.jsx';

import '../../styles/DownloadPage/FirstSection.scss';



// NOTE: ТЕКСТ НА ИМИТАЦИИ ГИТ ХАБА СДЕЛАТЬ ПАРАГРАФАМИ С БОРДЕР РАДИУСОМ 50% И ШИРИНОЙ ПО ТИПУ ТЕКСТА, ТАКЖЕ СТРЕЛОЧКИ В Х%ДЕРЕ СДЕЛАТЬ СЕРЫМИ КРУГЛЫМИ ПАРАГРАФАМИ

function MiniText({ color, width, height, margin, delay }) {
  return (
    <motion.div className="miniGitHub__header__text"
      style={{
        height: height,
        backgroundColor: color,
        marginLeft: margin,
      }}
      initial={{
        width: height,
        opacity: 0,
      }}
      whileInView={{
        width: width,
        opacity: 1,
      }}
      transition={{
        delay: delay + 1,
        duration: 0.5,
        ease: 'easeInOut',
      }}
    />
  )
}


function MiniIcon({ color, size, margin, delay }) {
  return (
    <motion.div className="miniGitHub__header__arrow"
      style={{
        backgroundColor: color,
        marginLeft: margin,
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: delay + 1,
        duration: 0.5,
        ease: 'easeInOut',
      }}
    />
  )
}


function ExplorerDirectory({ delay }) {
  return (
    <div className="miniGitHub__explorer__directory">
      <div className="flex-5 flex flex-row items-center ">
        <MiniIcon delay={delay} size={12} margin={0} color='#9198A1' />
        <MiniText delay={delay} height={7} width={35} margin={10} color='#fff' />
      </div>
      <div className="flex-6 flex flex-row items-center justify-between">
        <div className="flex flex-row items-cneter">
          <MiniText delay={delay} height={7} width={17} color='#9198A1' margin={0} />
          <MiniText delay={delay} height={7} width={25} color='#9198A1' margin={5} />
          <MiniText delay={delay} height={7} width={20} color='#9198A1' margin={5} />
        </div>
        <div className="flex flex-row items-center">
          <MiniText delay={delay} height={7} width={7} color='#9198A1' margin={0} />
          <MiniText delay={delay} height={7} width={21} color='#9198A1' margin={5} />
          <MiniText delay={delay} height={7} width={14} color='#9198A1' margin={5} />
        </div>
      </div>
    </div>
  )
}


function ExplorerFile({ delay }) {
  return (
    <div className="miniGitHub__explorer__file">
      <div className="flex-5 flex flex-row items-center">
        <div className="miniGitHub__explorer__file__icon" />
        <MiniText delay={delay} height={7} width={35} margin={10} color='#9198A1' />
      </div>
      <div className="flex-6 flex flex-row items-center justify-between">
        <div className="flex flex-row items-cneter">
          <MiniText delay={delay} height={7} width={17} color='#9198A1' margin={0} />
          <MiniText delay={delay} height={7} width={25} color='#9198A1' margin={5} />
          <MiniText delay={delay} height={7} width={20} color='#9198A1' margin={5} />
        </div>
        <div className="flex flex-row items-center">
          <MiniText delay={delay} height={7} width={7} color='#9198A1' margin={0} />
          <MiniText delay={delay} height={7} width={21} color='#9198A1' margin={5} />
          <MiniText delay={delay} height={7} width={14} color='#9198A1' margin={5} />
        </div>
      </div>
    </div>
  )
}


export default function FirstSection() {
  const [delay, setDelay] = useState(HIDING_DELAY + 0.1);

  setTimeout(() => {
    setDelay(0);
  }, (HIDING_DELAY + HIDING_DURATION) * 1000);

  return (
    <div className="downloadPage__firstSection bg-blue-300">
      <RevealingText fontSize={100} space={25} delay={delay}>1) Copy command on GitHub</RevealingText>
      <motion.div className="miniGitHub"
        initial={{
          y: '50%',
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: delay,
          duration: 1.5,
          ease: 'backOut',
        }}
      >
        <div className="miniGitHub__header">
          <div className="miniGitHub__header__left">
            <GitHubIcon />
            <MiniText delay={delay} color='#ffffff' height={7} width={70} margin={25} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={10} />
            <MiniText delay={delay} color='#ffffff' height={7} width={70} margin={25} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={10} />
            <MiniText delay={delay} color='#ffffff' height={7} width={70} margin={25} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={10} />
            <MiniText delay={delay} color='#ffffff' height={7} width={70} margin={25} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={10} />
          </div>
          <div className="miniGitHub__header__right">
            <div className="miniGitHub__header__search">
              <MiniIcon delay={delay} color='#818B98' size={7} margin={0} />
              <MiniText delay={delay} color='#818B98' height={5} width={35} margin={5} />
            </div>
            <MiniText delay={delay} color='#ffffff' height={5} width={30} margin={20} />
            <div className="miniGitHub__header__login">
              <MiniText delay={delay} color='#25292e' height={5} width={30} margin={0} />
            </div>
            <div className="miniGitHub__header__menu">
              <MiniIcon delay={delay} color='#ffffff' size={10} margin={0} />
            </div>
          </div>
        </div>
        <div className="miniGitHub__content">
          <div className="miniGitHub__content__repo">
            <div className="miniGitHub__content__repo__autor">
              <MiniIcon delay={delay} color='#929497' size={10} margin={0} />
              <MiniText delay={delay} color='#4493f8' height={10} width={50} margin={10} />
              <MiniText delay={delay} color='#4493f8' height={10} width={50} margin={10} />
            </div>
            <div className='miniGitHub__content__repo__buttons'>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon delay={delay} color='#db61a2' size={10} margin={0} />
                <MiniText delay={delay} color='#ffffff' height={5} width={35} margin={5} />
              </div>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon delay={delay} color='#929497' size={10} margin={0} />
                <MiniText delay={delay} color='#ffffff' height={5} width={35} margin={5} />
              </div>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon delay={delay} color='#929497' size={10} margin={0} />
                <MiniText delay={delay} color='#ffffff' height={5} width={35} margin={5} />
              </div>
            </div>
          </div>
          <div className="miniGitHub__content__menu">
            <div className="miniGitHub__content__menu__selected">
              <MiniIcon delay={delay} color='#929497' size={7} margin={0} />
              <MiniText delay={delay} color='#ffffff' height={7} width={25} margin={10} />
            </div>
            <MiniIcon delay={delay} color='#929497' size={7} margin={15} />
            <MiniText delay={delay} color='#ffffff' height={7} width={25} margin={10} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={15} />
            <MiniText delay={delay} color='#ffffff' height={7} width={25} margin={10} />
            <MiniIcon delay={delay} color='#929497' size={7} margin={15} />
            <MiniText delay={delay} color='#ffffff' height={7} width={25} margin={10} />
          </div>
          <div className="miniGitHub__content__structure">
            <div className="miniGitHub__content__structure__files">
              <div className="miniGitHub__content__structure__files__top">
                <div className='flex flex-row items-center'>
                  <div className="miniGitHub__content__structure__files__forks">
                    <MiniText delay={delay + 0.5} height={5} width={35} margin={0} color='#F0F6FC' />
                  </div>
                  <MiniIcon delay={delay + 0.5} color='#9198A1' size={10} margin={15} />
                  <MiniText delay={delay + 0.5} color='#fff' height={7} width={14} margin={5} />
                  <MiniText delay={delay + 0.5} color='#9198A1' height={7} width={30} margin={5} />
                  <MiniIcon delay={delay + 0.5} color='#9198A1' size={10} margin={20} />
                  <MiniText delay={delay + 0.5} color='#fff' height={7} width={14} margin={5} />
                  <MiniText delay={delay + 0.5} color='#9198A1' height={7} width={30} margin={5} />
                </div>
                <div className='flex flex-row items-center'>
                  <div className="miniGitHub__content__structure__files__search flex flex-row items-center">
                    <MiniIcon delay={delay + 0.5} size={7} margin={0} color='#3D444D' />
                    <MiniText delay={delay + 0.5} height={5} width={20} margin={5} color='#3D444D' />
                  </div>
                  <div className="miniGitHub__content__structure__files__code">
                    <MiniText delay={delay + 0.5} height={7} width={30} margin={0} color='#fff' />
                  </div>
                </div>
              </div>
              <div className="miniGitHub__explorer">
                <div className="miniGitHub__explorer__lastCommit">
                  <div className="miniGitHub__explorer__lastCommit__left">
                    <MiniText delay={delay + 0.5} height={10} width={30} margin={0} color='#fff' />
                    <MiniText delay={delay + 0.5} height={7} width={20} margin={5} color='#888F98' />
                    <MiniText delay={delay + 0.5} height={7} width={20} margin={5} color='#888F98' />
                    <MiniText delay={delay + 0.5} height={7} width={25} margin={5} color='#888F98' />
                    <MiniText delay={delay + 0.5} height={7} width={20} margin={5} color='#4493F8' />
                    <MiniIcon delay={delay + 0.5} size={10} margin={5} color='#238636' />
                  </div>
                  <div className="miniGitHub__explorer__lastCommit__right">
                    <MiniText delay={delay + 0.5} height={7} width={20} margin={0} color='#888F98' />
                    <MiniText delay={delay + 0.5} height={7} width={25} margin={5} color='#888F98' />
                    <MiniText delay={delay + 0.5} height={7} width={30} margin={5} color='#fff' />
                  </div>
                </div>
                <ExplorerDirectory delay={delay + 0.5} />
                <ExplorerDirectory delay={delay + 0.5} />
                <ExplorerDirectory delay={delay + 0.5} />
                <ExplorerDirectory delay={delay + 0.5} />
                <ExplorerFile delay={delay + 0.5} />
                <ExplorerFile delay={delay + 0.5} />
                <ExplorerFile delay={delay + 0.5} />
                <ExplorerFile delay={delay + 0.5} />
              </div>
            </div>
            <div className="miniGitHub__content__structure__info">
              <MiniText delay={delay + 0.5} height={10} width={35} color='#fff' margin={0} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
