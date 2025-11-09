import MiniIcon from './MiniIcon.jsx';
import MiniText from './MiniText.jsx';
import ExplorerDirectory from './ExplorerDirectory.jsx';
import ExplorerFile from './ExplorerFile.jsx';

import '../../../styles/DownloadPage/GitHub/Explorer.scss';


export default function Explorer() {
  return (
    <div className="miniGitHub__content__structure__files">
      <div className="miniGitHub__content__structure__files__top">
        <div className='flex flex-row items-center'>
          <div className="miniGitHub__content__structure__files__forks">
            <MiniText height={5} width={35} margin={0} color='#F0F6FC' />
          </div>
          <MiniIcon color='#9198A1' size={10} margin={15} />
          <MiniText color='#fff' height={7} width={14} margin={5} />
          <MiniText color='#9198A1' height={7} width={30} margin={5} />
          <MiniIcon color='#9198A1' size={10} margin={20} />
          <MiniText color='#fff' height={7} width={14} margin={5} />
          <MiniText color='#9198A1' height={7} width={30} margin={5} />
        </div>
        <div className='flex flex-row items-center'>
          <div className="miniGitHub__content__structure__files__search flex flex-row items-center">
            <MiniIcon size={7} margin={0} color='#3D444D' />
            <MiniText height={5} width={20} margin={5} color='#3D444D' />
          </div>
          <div className="miniGitHub__content__structure__files__code">
            <MiniText height={7} width={30} margin={0} color='#fff' />
          </div>
        </div>
      </div>
      <div className="miniGitHub__explorer">
        <div className="miniGitHub__explorer__lastCommit">
          <div className="miniGitHub__explorer__lastCommit__left">
            <MiniText height={10} width={30} margin={0} color='#fff' />
            <MiniText height={7} width={20} margin={5} color='#888F98' />
            <MiniText height={7} width={20} margin={5} color='#888F98' />
            <MiniText height={7} width={25} margin={5} color='#888F98' />
            <MiniText height={7} width={20} margin={5} color='#4493F8' />
            <MiniIcon size={10} margin={5} color='#238636' />
          </div>
          <div className="miniGitHub__explorer__lastCommit__right">
            <MiniText height={7} width={20} margin={0} color='#888F98' />
            <MiniText height={7} width={25} margin={5} color='#888F98' />
            <MiniText height={7} width={30} margin={5} color='#fff' />
          </div>
        </div>
        <ExplorerDirectory />
        <ExplorerDirectory />
        <ExplorerDirectory />
        <ExplorerDirectory />
        <ExplorerDirectory />
        <ExplorerFile />
        <ExplorerFile />
        <ExplorerFile />
        <ExplorerFile />
        <ExplorerFile />
        <ExplorerFile />
        <ExplorerFile />
      </div>
    </div>
  );
}
