import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/dist/lenis-react';

import LoadingScreen, { HIDING_DELAY, HIDING_DURATION } from '../LoadingScreen/LoadingScreen.jsx'
import DesktopModel from '../../modules/Spline.jsx'
import WindowAnimations from './WindowAnimations.jsx'
import ThemeChanging from './ThemeChanging.jsx';
import WlpGallery from './WlpGallery.jsx';

import '../../styles/HomePage/HomePage.scss'
import FooterBox from './FooterBox.jsx';
import ClipFromMidText from './ClipFromMidText.jsx';


export default function MainScreen() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loaded == false) {
      setTimeout(() => {
        setLoaded(true);
      }, 3 * 1000);
    }
    if (loaded == true) {
      setTimeout(() => {
        setLoading(false);
      }, (HIDING_DELAY + HIDING_DURATION) * 1000)
    }
  }, [loaded]);

  return (
    <>
      { loading && <LoadingScreen loaded={loaded} /> }
      <div className="main">
        <ReactLenis root>
          <DesktopModel className="main__model" setLoaded={setLoaded} />
          <WindowAnimations />
          <ThemeChanging />
          <WlpGallery>ocean.jpg bridge.jpg neon-hole.jpg jely.jpg lighthouse.jpg mclaren.jpg mountain.jpg eagle.jpg lake.jpg berserk.jpg sunakku.jpg samurai.jpg peace.jpg</WlpGallery>
          <div className="h-screen w-screen bg-[#222436] flex flex-col overflow-hidden">
            <div className="flex-1 relative">
              <ClipFromMidText className='main__title w-full' delay={0.2}>Check Installation Guide</ClipFromMidText>
              <ClipFromMidText className="main__title main__title__blur w-full" delay={0.2}>Check Installation Guide</ClipFromMidText>

              <ClipFromMidText className='main__info w-full' delay={0.25}>All source code provided on GitHub</ClipFromMidText>
            </div>
            <div className="h-[12%] bg-[#121212] flex items-center justify-around text-white font-bold text-[14px] overflow-hidden">
              <FooterBox className='flex flex-col items-center gap-[10px]' delay={0.2}>
                <p>Creator:</p>
                <p>SaNhOuS228</p>
              </FooterBox>
              <FooterBox className="flex flex-col items-center gap-[10px]" delay={0.3}>
                <p>Tech stack:</p>
                <p>React JS + Vite + Motion + Spline</p>
              </FooterBox>
              <FooterBox className="flex flex-col items-center gap-[10px]" delay={0.4}>
                <p>Hosting:</p>
                <p>GitHub Pages</p>
              </FooterBox>
              <FooterBox className="flex flex-col items-center gap-[10px]" delay={0.5}>
                <p>Mark:</p>
                <p>Hope 3</p>
              </FooterBox>
            </div>
          </div>
        </ReactLenis>
      </div>
    </>
  )
};

