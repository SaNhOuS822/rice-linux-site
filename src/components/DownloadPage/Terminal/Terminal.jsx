import '../../../styles/DownloadPage/Terminal/Terminal.scss';
import TypingText from './TypingText';


const text = [
  'git clone https://github.com/SaNhOuS228/dotfiles',
  'cd dotfiles',
  'sh ./install.sh',
  '// This comand will run',
  '// Installation script'
]


const CHAR_DELAY = 0.025


export default function Terminal() {
  return (
    <div className="terminal flex flex-row gap-[15px]">
      <div>~ <span className="text-green-400">$ </span></div>
      <div className="flex flex-col gap-[5px]">
        {text.map((c, i) => {
          let delay = 0;

          text.map((line, line_i) => delay += (line_i < i) ? line.length : 0);

          if (delay != 0) delay += 1;

          return <TypingText key={i} space={10} CHAR_DELAY={CHAR_DELAY} delay={delay * CHAR_DELAY}>{c}</TypingText>
        })}
      </div>
    </div>
  )
} 
