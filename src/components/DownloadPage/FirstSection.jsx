import SectionWrapper from "./SectionWrapper.jsx";
import RevealingText from './RevealingText';
import MainPage from './MiniGitHub/MainPage.jsx';

import '../../styles/DownloadPage/FirstSection.scss';


export default function FirstSection({ csi }) {
  return (
    <SectionWrapper className="bg-blue-300 h-screen w-screen">
      <div className="flex flex-col gap-[75px] h-screen w-screen p-[100px] pb-[50px] overflow-hidden">
        <RevealingText fontSize={100} space={25}>1) Copy command on GitHub</RevealingText>
        <MainPage csi={csi} />
      </div>
    </SectionWrapper>
  )
}
