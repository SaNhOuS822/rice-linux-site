import GitHubIcon from '../../svgs/GitHubIcon.jsx';
import MiniIcon from './MiniIcon.jsx';
import MiniText from './MiniText.jsx';

import '../../../styles/DownloadPage/GitHub/Header.scss';


export default function Header() {
  return (
    <div className="miniGitHub__header">
      <div className="miniGitHub__container">
        <GitHubIcon />
        <MiniText color='#ffffff' height={7} width={70} margin={25} />
        <MiniIcon color='#929497' size={7} margin={10} />
        <MiniText color='#ffffff' height={7} width={70} margin={25} />
        <MiniIcon color='#929497' size={7} margin={10} />
        <MiniText color='#ffffff' height={7} width={70} margin={25} />
        <MiniIcon color='#929497' size={7} margin={10} />
        <MiniText color='#ffffff' height={7} width={70} margin={25} />
        <MiniIcon color='#929497' size={7} margin={10} />
      </div>
      <div className="miniGitHub__container">
        <div className="miniGitHub__header__search">
          <MiniIcon color='#818B98' size={7} margin={0} />
          <MiniText color='#818B98' height={5} width={35} margin={5} />
        </div>
        <MiniText color='#ffffff' height={5} width={30} margin={20} />
        <div className="miniGitHub__header__login">
          <MiniText color='#25292e' height={5} width={30} margin={0} />
        </div>
        <div className="miniGitHub__header__menu">
          <MiniIcon color='#ffffff' size={10} margin={0} />
        </div>
      </div>
    </div>
  )
}
