import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/dist/lenis-react';

import LoadingScreen, { HIDING_DELAY, HIDING_DURATION } from '../LoadingScreen/LoadingScreen.jsx'
import DesktopModel from '../../modules/Spline.jsx'
import WindowAnimations from './WindowAnimations.jsx'
import ThemeChanging from './ThemeChanging.jsx';
import WlpGallery from './WlpGallery.jsx';

import '../../styles/HomePage/HomePage.scss'


export default function MainScreen() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <WlpGallery>berserk.jpg bridge.jpg eagle.jpg jely.jpg lake.jpg lighthouse.jpg mclaren.jpg mountain.jpg neon-hole.jpg ocean.jpg peace.jpg samurai.jpg sunakku.jpg</WlpGallery>
        </ReactLenis>
      </div>
    </>
  )
};

