import { motion } from 'motion/react';
import { useEffect, useState } from "react";

import TransitionScreen, { SHOWING_DELAY as TRANSITION_SHOWING_DELAY, HIDING_DELAY as TRANSITION_HIDING_DELAY, HIDING_DURATION as TRANSITION_HIDING_DURATION } from "../TransitionScreen/TransitionScreen.jsx";
import LoadingScreen, { SHOWING_DELAY as LOADING_SHOWING_DELAY, HIDING_DELAY as LOADING_HIDING_DELAY, HIDING_DURATION as LOADING_HIDING_DURATION } from "../LoadingScreen/LoadingScreen.jsx";
import ExitScreenVertical from "../TransitionScreen/ExitScreenVertical.jsx";
import ExitScreenHorizontal from "../TransitionScreen/ExitScreenHorizontal.jsx";


const texsts = {
  '/':              ['Make it', 'Easier'],
  '/download':      ['How to ', 'Set up'],
  '/documentation': ['Rice Linux', 'Manuals'],
  '/utils':         ['Utilized', 'Utils'],
}


export default function PageWrapper({ path, pressedRoute, loaded, children }) {
  const [transition, setTransition] = useState(true);
  const [delay, setDelay] = useState(false);
  const [renderExitScreen, setRenderExitScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, ((path != '/') ? (TRANSITION_HIDING_DELAY + TRANSITION_HIDING_DURATION) : (LOADING_HIDING_DELAY + LOADING_HIDING_DURATION)) * 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, ((path != '/') ? (0) : (0)));
  }, []);

  useEffect(() => {
    if (pressedRoute != '') {
      setRenderExitScreen(true);
    }
  }, [pressedRoute]);

  return (
    <motion.div>
      { transition && ((path != '/')
        ? <TransitionScreen topText={texsts[path][0]} bottomText={texsts[path][1]} />
        : <LoadingScreen loaded={loaded} />
      )}
      { delay && <>
        {
          renderExitScreen && (
            (pressedRoute == "/")
            ? <ExitScreenVertical />
            : <ExitScreenHorizontal />
          )
        }
        { children }
      </>}
    </motion.div>
  )
}
