import { useEffect } from 'react';
import '../../styles/DocumentationPage/DocumentationPage.scss';


export default function DocumentationPage() {
  const check_text = 'Check wiki on GitHub page. ';
  const read_text = 'Nothing here... ';

  const text_class = 'text-white font-bold'
  const shadow_class = 'text-[#1F9BF3] font-bold'

  // #1F9BF3

  return (
    <div className="documentationPage bg-[#222436] flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="slider relative w-full h-full">
        {read_text.split('').map((c, i) => {
          return (
            <p className={`absolute top-1/3 left-1/2 ${text_class}`} key={i} style={{
              transform: `rotateY(calc(${i}deg * (360 / ${read_text.length}))) translateZ(calc(100vh / 3))`,
            }}>
              { c }
            </p>
          )
        })}
        {read_text.split('').map((c, i) => {
          return (
            <p className={`absolute top-1/3 left-1/2 ${shadow_class} text-[#C259E7]`} key={i} style={{
              transform: `rotateY(calc(${i}deg * (360 / ${read_text.length}))) translateZ(calc((100vh / 3) - 0.1px))`,
            }}>
              { c }
            </p>
          )
        })}

        {check_text.split('').map((c, i) => {
          return (
            <p className={`absolute top-1/3 left-1/2 ${text_class}`} key={i} style={{
              transform: `rotateY(calc(${i}deg * (360 / ${check_text.length}))) translateZ(calc(100vh * 2 / 3))`,
            }}>
              { c }
            </p>
          )
        })}
        {check_text.split('').map((c, i) => {
          return (
            <p className={`absolute top-1/3 left-1/2 ${shadow_class}`} key={i} style={{
              transform: `rotateY(calc(${i}deg * (360 / ${check_text.length}))) translateZ(calc((100vh * 2 / 3) - 0.1px))`,
            }}>
              { c }
            </p>
          )
        })}
      </div>
    </div>
  );
};
