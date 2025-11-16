'use client';

import SectionWrapper from "./SectionWrapper.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import FourthSection from "./FourthSection.jsx";

import '../../styles/DownloadPage/DownloadPage.scss';
import { motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";


export default function DownloadPage() {
  const { scrollYProgress } = useScroll();
  const [scope, animate] = useAnimate();
  const [csi, setCsi] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newCsi = Math.floor(latest / (1 / 3));

    if (csi != newCsi) setCsi(newCsi);
  });

  useEffect(() => {
    animate(scope.current, { y: `-${csi}00vh` }, { duration: 0.5, ease: [0.33, 1, 0.68, 1] });
  }, [csi]);

  return (
    <div className="downloadPage__wrapper">
      <motion.div ref={scope} className="downloadPage [background-image:linear-gradient(to_bottom,#222436,#C259E7)]">
        <FirstSection csi={csi} />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </motion.div>
    </div>
  );
};
