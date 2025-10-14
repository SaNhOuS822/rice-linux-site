import '../../styles/HomePage/HomePage.scss'

import { ReactLenis } from 'lenis/dist/lenis-react';
import DesktopModel from '../../modules/Spline.jsx'
import WindowAnimations from './WindowAnimations.jsx'


export default function MainScreen({ setLoaded }) {
  return (
    <div className="main">
      <ReactLenis root>
        <DesktopModel className="main__model" setLoaded={setLoaded} />
        <WindowAnimations />
        <div className="h-screen bg-pink-300"></div>
      </ReactLenis>
    </div>
  )
};

