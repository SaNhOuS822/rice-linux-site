'use client';

import { motion, useInView } from 'motion/react';

import '../../styles/DownloadPage/SectionWrapper.scss';
import { useRef } from 'react';


export default function SectionWrapper({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div className={className}>
      <motion.div ref={ref} className="mt-[1px] mb-[1px]" style={{ height: 'calc(100vh - 2px)' }}>
        {isInView && children}
      </motion.div>
    </motion.div>
  );
}
