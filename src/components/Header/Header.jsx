import { motion, useScroll, useTransform } from 'motion/react'

import Menu from './Menu'
import Links from './Links'
import Title from './Title'

import '../../styles/Header/Header.scss'
import { useLocation } from 'react-router-dom'


export default function Header({ setPressedRoute }) {
  const screenWidth = screen.width;
  const innerHeight = window.innerHeight;

  const location = useLocation();

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, innerHeight * 0.563535911], [0, 1]);
  const top = useTransform(scrollY, [0, innerHeight * 0.46, innerHeight * 0.563535911], [0, innerHeight * 0.075, innerHeight * 0.0664]);

  const width = useTransform(scrollY, [innerHeight * 0.563535911, innerHeight * 0.8],  (location.pathname != '/utils' && location.pathname != '/download') ? ['0.3%', '100%'] : [0, 0]);
  const height = useTransform(scrollY, [innerHeight * 0.563535911, innerHeight * 0.8], (location.pathname != '/utils' && location.pathname != '/download') ? [screenWidth / 300, 2] : [0, 0]);


  return (
    <>
      <div className="header__wrapper">
        <header className="header">
          <Title />
          <Menu setPressedRoute={setPressedRoute} />
          <Links />
        </header>
        <motion.div className="header__underline" style={{
          opacity,
          top,
          width,
          height,
        }}/>
      </div>
    </>
  )
}

