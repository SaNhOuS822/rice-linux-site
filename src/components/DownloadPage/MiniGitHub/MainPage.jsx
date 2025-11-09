import { motion, useAnimate } from 'motion/react';

import Header from './Header.jsx';
import Description from './Description.jsx';
import Readme from './Readme.jsx';
import Explorer from './Explorer.jsx';
import MiniIcon from './MiniIcon.jsx';
import MiniText from './MiniText.jsx';

import '../../../styles/DownloadPage/GitHub/MainPage.scss';


export default function MainPage({ csi }) {
  const [miniGH, animateMiniGH] = useAnimate();

  setTimeout(() => {
    if (miniGH.current != null) animateMiniGH(miniGH.current, { y: -3280 }, { delay: 1, duration: 1.5, ease: 'easeInOut' });
  }, 1 * 1000);

  return (
    <motion.div className="miniGitHub__wrapper"
      initial={{
        y: '50%',
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: 'backOut',
      }}
    >
      <motion.div ref={miniGH} className='miniGitHub' style={{ y: 0 }} initial={{ y: 0 }}>
        <Header />
        <div className="miniGitHub__content">
          <div className="miniGitHub__content__repo">
            <div className="miniGitHub__content__repo__autor">
              <MiniIcon color='#929497' size={10} margin={0} />
              <MiniText color='#4493f8' height={10} width={50} margin={10} />
              <MiniText color='#4493f8' height={10} width={50} margin={10} />
            </div>
            <div className='miniGitHub__content__repo__buttons'>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon color='#db61a2' size={10} margin={0} />
                <MiniText color='#ffffff' height={5} width={35} margin={5} />
              </div>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon color='#929497' size={10} margin={0} />
                <MiniText color='#ffffff' height={5} width={35} margin={5} />
              </div>
              <div className="miniGitHub__content__repo__buttons-button">
                <MiniIcon color='#929497' size={10} margin={0} />
                <MiniText color='#ffffff' height={5} width={35} margin={5} />
              </div>
            </div>
          </div>
          <div className="miniGitHub__content__menu">
            <div className="miniGitHub__content__menu__selected">
              <MiniIcon color='#929497' size={7} margin={0} />
              <MiniText color='#ffffff' height={7} width={25} margin={10} />
            </div>
            <MiniIcon color='#929497' size={7} margin={15} />
            <MiniText color='#ffffff' height={7} width={25} margin={10} />
            <MiniIcon color='#929497' size={7} margin={15} />
            <MiniText color='#ffffff' height={7} width={25} margin={10} />
            <MiniIcon color='#929497' size={7} margin={15} />
            <MiniText color='#ffffff' height={7} width={25} margin={10} />
          </div>
          <div className="miniGitHub__content__structure">
            <div className="flex-1">
              <Explorer />
              <Readme />
            </div>
            <Description />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
