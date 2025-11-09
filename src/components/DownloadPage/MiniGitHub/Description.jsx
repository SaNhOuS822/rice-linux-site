import MiniText from './MiniText.jsx';
import MiniIcon from './MiniIcon.jsx';

import '../../../styles/DownloadPage/GitHub/Description.scss';


function RandomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}


function DescriptionText({ length }) {
  return (
    <div className="miniGitHub__info__desc">
      {[...Array(length)].map((_, i) => {
        return <MiniText height={5} key={i} width={RandomNum(10, 25)} color='#fff' margin={0} />
      })}
    </div>
  )
}


export default function Description() {
  return (
    <div className="miniGitHub__info">
      <div className="flex items-center h-[21px]">
        <MiniText height={7} width={35} color='#fff' margin={0} />
      </div>
      <DescriptionText length={20} />
      <div className="flex flex-row items-center mt-[20px]">
        <MiniIcon size={10} color='#fff' margin={0} />
        <MiniText height={5} width={35} color='#4493f8' margin={10} />
      </div>
      <div className="flex flex-row flex-wrap items-center gap-[5px] mt-[20px]">
        <div className="miniGitHub__info__tag"><MiniText height={5} width={20} color='#4493f8' margin={0} /></div>
        <div className="miniGitHub__info__tag"><MiniText height={5} width={40} color='#4493f8' margin={0} /></div>
        <div className="miniGitHub__info__tag"><MiniText height={5} width={35} color='#4493f8' margin={0} /></div>
      </div>
      <div className="mt-[20px] flex flex-col gap-[7px]">
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
        <div className="miniGitHub__container"><MiniIcon size={10} color='#9198A1' margin={0} /><MiniText height={5} width={RandomNum(20, 40)} color='#9198A1' margin={5} /></div>
      </div>
      <div className="flex flex-row items-center mt-[7px]">
        <MiniText height={5} width={25} color='#9198A1' margin={0} />
        <MiniText height={5} width={30} color='#9198A1' margin={10} />
      </div>

      <div className="border-b-[2px] border-[#9198A1] mt-[20px]" />

      <div className="flex flex-row items-center mt-[20px]">
        <MiniText height={5} width={30} color='#fff' margin={0} />
        <MiniText height={7} width={14} color='#1E242A' margin={5} />
      </div>
      <div className="flex flex-row items-center mt-[10px]">
        <div className="rounded-full size-[10px] border-[2px] border-[#3FB950]" />
        <MiniText height={5} width={30} color='#fff' margin={7} />
        <div className="rounded-full h-[10px] w-[30px] border-[2px] border-[#3FB950] ml-[7px]" />
      </div>
      <div className="flex flex-row items-center mt-[15px]">
        <MiniIcon size={5} color='#4493f8' margin={0} />
        <MiniText height={7} width={10} color='#4493f8' margin={5} />
        <MiniText height={5} width={30} color='#4493f8' margin={5} />
      </div>

      <div className="border-b-[2px] border-[#9198A1] mt-[20px]" />

      <div className="mt-[20px]">
        <MiniText height={7} width={30} color='#fff' marigin={0} />
        <div className="flex flex-row items-center mt-[10px]">
          <MiniText height={5} width={10} color='#9198A1' margin={0} />
          <MiniText height={5} width={20} color='#9198A1' margin={5} />
          <MiniText height={5} width={30} color='#9198A1' margin={5} />
        </div>
      </div>

      <div className="border-b-[2px] border-[#9198A1] mt-[20px]" />

      <div className="mt-[20px]">
        <MiniText height={7} width={50} color='#fff' margin={0} />
      </div>

      <div className="flex flex-row items-center divide-x-1 mt-[20px] w-[150px] rounded-full overflow-hidden">
        <div className="flex-58 bg-green-500 h-[5px]" />
        <div className="flex-25 bg-yellow-300 h-[5px]" />
        <div className="flex-10 bg-blue-400 h-[5px]" />
        <div className="flex-5 bg-red-500 h-[5px]" />
        <div className="flex-2 bg-white h-[5px]" />
      </div>

      <div className="mt-[10px] flex items-center">
        <div className="size-[7px] rounded-full bg-green-500" />
        <MiniText height={5} width={20} margin={5} color='#fff' />
        <MiniText height={5} width={15} margin={5} color='#9198A1' />
        <div className="size-[7px] rounded-full bg-yellow-500 ml-[15px]" />
        <MiniText height={5} width={40} margin={5} color='#fff' />
        <MiniText height={5} width={15} margin={5} color='#9198A1' />
      </div>

      <div className="mt-[10px] flex items-center">
        <div className="size-[7px] rounded-full bg-blue-400" />
        <MiniText height={5} width={15} margin={5} color='#fff' />
        <MiniText height={5} width={15} margin={5} color='#9198A1' />
        <div className="size-[7px] rounded-full bg-red-500 ml-[15px]" />
        <MiniText height={5} width={20} margin={5} color='#fff' />
        <MiniText height={5} width={15} margin={5} color='#9198A1' />
      </div>

      <div className="mt-[10px] flex items-center">
        <div className="size-[7px] rounded-full bg-white" />
        <MiniText height={5} width={25} margin={5} color='#fff' />
        <MiniText height={5} width={15} margin={5} color='#9198A1' />
      </div>
    </div>
  );
} 

