import SectionWrapper from "./SectionWrapper.jsx";
import RevealingText from './RevealingText';

import '../../styles/DownloadPage/ThirdSection.scss';
import AnimatedText from "./AnimatedText.jsx";


export default function ThirdSection() {
  return (
    <SectionWrapper className="bg-transparent h-screen w-screen">
      <div className="flex flex-col gap-[90px] h-screen w-screen p-[120px] pb-[50px] z-50">
        <RevealingText fontSize={100} space={25}>3) Script is running, now just wait</RevealingText>
        <div className="flex-1 m-[0px_80px] flex flex-col gap-[30px]">
          <AnimatedText font-size={50} space={12}>• Installing utilities and apps</AnimatedText>
          <AnimatedText font-size={50} space={12}>• Setting up display manager</AnimatedText>
          <AnimatedText font-size={50} space={12}>• Installing boot manager</AnimatedText>
          <AnimatedText font-size={50} space={12}>• Configuring Hyprland</AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  )
}
