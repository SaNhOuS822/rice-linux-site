import Spline from '@splinetool/react-spline';


export default function DesktopModel({ setLoaded }) {
  return (
    <div className="main__model__wrapper bg-[#222436] h-screen w-screen flex items-center justify-center relative">
      <img src='Untitled.png' className='art absolute w-[60vw] h-[60vh] rounded-[15px] z-20' />
      <img src='Untitled.png' className='art absolute w-[60vw] h-[60vh] rounded-[15px] z-10 scale-[105%] blur-[40px]' />
      {/* <Spline onLoad={setLoaded(true)} scene="https://draft.spline.design/4Db-kdr8mZorGTFt/scene.splinecode" /> */}
    </div>
  );
};
