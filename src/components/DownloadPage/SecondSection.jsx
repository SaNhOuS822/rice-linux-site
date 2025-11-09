import SectionWrapper from "./SectionWrapper.jsx";
import RevealingText from './RevealingText';
import Terminal from './Terminal/Terminal.jsx';

import '../../styles/DownloadPage/SecondSection.scss';


export default function SecondSection() {
  return (
    <SectionWrapper className="bg-pink-300 h-screen w-screen">
      <div className="flex flex-col gap-[75px] h-screen w-screen p-[100px] pb-[50px] overflow-hidden">
        <RevealingText fontSize={100} space={25}>2) Past it in terminal</RevealingText>
        <Terminal />
      </div>
    </SectionWrapper>
  )
}
