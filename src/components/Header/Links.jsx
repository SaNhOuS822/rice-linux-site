import { color, motion } from 'motion/react';

import GitHubIcon from "../../components/svgs/GitHubIcon";
import YoutubeIcon from "../../components/svgs/YoutubeIcon";
import TelegramIcon from "../../components/svgs/TelegramIcon";
import MailRuIcon from "../../components/svgs/MailRuIcon";

import '../../styles/Header/Links.scss';


function HeaderLink({ href, hintContent, bgColor, textColor, children }) {
  return (
    <motion.a href={href} className="header__links-link"
      initial='initial'
      whileHover='hovered'
      variants={{
        initial: {
          backgroundColor: `${bgColor}00`,
          fill: '#ffffff',
        },
        hovered: {
          backgroundColor: `${bgColor}ff`,
          fill: textColor,
        }
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      {children}
    </motion.a>
  )
}


export default function Links() {
  return (
    <div className="header__links">
      <ul className="header__links-list">
        <li className="header__links-item">
          <HeaderLink href="#" hintContent="GitHub" textColor='#121212' bgColor='#ffffff'><GitHubIcon /></HeaderLink>
        </li>
        <li className="header__links-item">
          <HeaderLink href="#" hintContent="Youtube" textColor='#ffffff' bgColor='#f00000'><YoutubeIcon /></HeaderLink>
        </li>
        <li className="header__links-item">
          <HeaderLink href="#" hintContent="Telegram" textColor='#ffffff' bgColor='#1F9BF3'><TelegramIcon /></HeaderLink>
        </li>
        <li className="header__links-item">
          <HeaderLink href="#" hintContent="MailRu" textColor='#ffffff' bgColor='#5F60EC'><MailRuIcon /></HeaderLink>
        </li>
      </ul>
    </div>
  )
}
