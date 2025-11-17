import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import '../../styles/Header/Menu.scss';


function PageLink({ className, to, setPressedRoute, children }) {
  return (
    <motion.div className="relative header__menu-link"
      initial='initial'
      whileHover='hovered'
    >
      <Link to={to} className='relative overflow-hidden flex-1 inline-block' onClick={() => setPressedRoute(to)}>
        <div className={`${className}-text-showed`}>
          {children.split('').map((char, index) => {
            return (
              <motion.span key={index} className='header__menu-text inline-block text-white'
                variants={{
                  initial: {
                    y: 0
                  },
                  hovered: {
                    y: '-100%'
                  }
                }}
                transition={{
                  delay: 0.02 * index,
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >{char}</motion.span>
            )
          })}
        </div>
        <div className={`${className}-text-showing absolute inset-0` }>
          {children.split('').map((char, index) => {
            return (
              <motion.span key={index} className='header__menu-text inline-block text-transparent'
                variants={{
                  initial: {
                    y: '100%'
                  },
                  hovered: {
                    y: 0
                  }
                }}
                transition={{
                  delay: 0.02 * index,
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >{char}</motion.span>
            )
          })}
        </div>
      </Link>
      <motion.div className="header__menu-link-underline"
        variants={{
          initial: {
            width: 0,
          },
          hovered: {
            width: '100%',
          }
        }}
        transition={{
          duration: 0.02 * children.length,
          ease: 'easeInOut',
        }}
      ></motion.div>
      <motion.div className="header__menu-link-triangle"
        variants={{
          initial: {
            borderBottomWidth: 0,
          },
          hovered: {
            borderBottomWidth: 8,
          }
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
      ></motion.div>
    </motion.div>
  )
}


export default function Menu({ setPressedRoute }) {
  return (
    <div className="header__menu">
      <ul className="header__menu-list">
        <li className="header__menu-item"><PageLink setPressedRoute={ setPressedRoute } to="/" className="header__menu-link">Home</PageLink></li>
        <li className="header__menu-item"><PageLink setPressedRoute={ setPressedRoute } to="/download" className="header__menu-link">Download</PageLink></li>
        <li className="header__menu-item"><PageLink setPressedRoute={ setPressedRoute } to="/documentation" className="header__menu-link">Documentation</PageLink></li>
        <li className="header__menu-item"><PageLink setPressedRoute={ setPressedRoute } to="/utils" className="header__menu-link">Utils</PageLink></li>
      </ul>
    </div>
  )
}

