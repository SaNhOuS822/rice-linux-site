import { motion } from 'motion/react';
import { useEffect, useState } from "react";

import TransitionScreen, { HIDING_DELAY, HIDING_DURATION } from "../TransitionScreen/TransitionScreen.jsx";
import ExitScreenVertical from "../TransitionScreen/ExitScreenVertical.jsx";
import ExitScreenHorizontal from "../TransitionScreen/ExitScreenHorizontal.jsx";


const texsts = {
  '/':              ['Make it', 'Easier'],
  '/download':      ['How to ', 'Set up'],
  '/documentation': ['Rice Linux', 'Manuals'],
  '/utils':         ['Utilized', 'Utils'],
}


export default function PageWrapper({ path, pressedRoute, children }) {
  const [transition, setTransition] = useState(true);
  const [renderExitScreen, setRenderExitScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, (HIDING_DELAY + HIDING_DURATION) * 1000);
  }, []);

  useEffect(() => {
    if (pressedRoute != '') {
      setRenderExitScreen(true);
    }
  }, [pressedRoute]);

  return (
    <motion.div>
      {(path != '/') && transition && <TransitionScreen topText={texsts[path][0]} bottomText={texsts[path][1]} />}
      {
        renderExitScreen && (
          (pressedRoute == "/")
            ? <ExitScreenVertical />
            : <ExitScreenHorizontal />
        )
      }
      { children }
    </motion.div>
  )
}
