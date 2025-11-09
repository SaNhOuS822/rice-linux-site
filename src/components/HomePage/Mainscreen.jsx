import { ReactLenis } from 'lenis/dist/lenis-react';

import DesktopModel from '../../modules/Spline.jsx'
import LoadingScreen, { HIDING_DELAY, HIDING_DURATION } from '../LoadingScreen/LoadingScreen.jsx'
import WindowAnimations from './WindowAnimations.jsx'
import ThemeChanging from './ThemeChanging.jsx';

import '../../styles/HomePage/HomePage.scss'
import { useEffect, useState } from 'react';


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
        </ReactLenis>
      </div>
    </>
  )
};

