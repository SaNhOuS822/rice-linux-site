import '../../styles/HomePage/WlpGallery.scss';


export default function WlpGallery({ children }) {
  const wlps = children.split(' ');

  return (
    <div className="bg-[#222436] h-screen w-screen overflow-hidden relative">
      <div className="carousel absolute h-full w-full top-0 left-0">
        {wlps.map((wlp, i) => {
          return (
            <img className='carousel__item absolute rounded-[25px]' key={i}
              src={`carousel/${wlp}`}
              style={{
                transform: `rotateX(calc(${i}deg * (360 / ${wlps.length + 10})))
                            translateZ(1400px)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
