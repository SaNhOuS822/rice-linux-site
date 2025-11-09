import MiniIcon from './MiniIcon.jsx';
import MiniText from './MiniText.jsx';


export default function ExplorerDirectory() {
  return (
    <div className="miniGitHub__explorer__directory">
      <div className="flex-5 flex flex-row items-center ">
        <MiniIcon size={12} margin={0} color='#9198A1' />
        <MiniText height={7} width={35} margin={10} color='#fff' />
      </div>
      <div className="flex-6 flex flex-row items-center justify-between">
        <div className="flex flex-row items-cneter">
          <MiniText height={7} width={17} color='#9198A1' margin={0} />
          <MiniText height={7} width={25} color='#9198A1' margin={5} />
          <MiniText height={7} width={20} color='#9198A1' margin={5} />
        </div>
        <div className="flex flex-row items-center">
          <MiniText height={7} width={7} color='#9198A1' margin={0} />
          <MiniText height={7} width={21} color='#9198A1' margin={5} />
          <MiniText height={7} width={14} color='#9198A1' margin={5} />
        </div>
      </div>
    </div>
  )
}
