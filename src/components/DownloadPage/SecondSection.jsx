import SectionWrapper from "./SectionWrapper.jsx";
import RevealingText from './RevealingText';
import Terminal from './Terminal/Terminal.jsx';

import '../../styles/DownloadPage/SecondSection.scss';


export default function SecondSection() {
  return (
    <SectionWrapper className="bg-transparent h-screen w-screen">
      <div className="flex flex-col gap-[90px] h-screen w-screen p-[120px] pb-[50px] z-50">
        <RevealingText fontSize={100} space={25}>2) Past it in the Terminal</RevealingText>
        <Terminal />
      </div>
    </SectionWrapper>
  )
}
