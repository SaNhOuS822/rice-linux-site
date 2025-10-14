import Spline from '@splinetool/react-spline';


export default function DesktopModel({ setLoaded }) {
  return (
    <div className="main__model__wrapper">
      <Spline onLoad={setLoaded(true)} scene="https://prod.spline.design/cKs3gTNJqxy34EAk/scene.splinecode" />
    </div>
  );
};
