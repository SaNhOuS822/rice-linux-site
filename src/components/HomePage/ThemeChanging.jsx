import ChangingWlps from "./ChangingWlps";

export default function ThemeChanging() {
  return (
    <div className="bg-[#222436] h-screen w-screen p-[100px] overflow-hidden">
      <div className="bg-pink-300 h-full w-full relative">
        <h2 className="absolute top-[10%] text-white font-bold text-[100px] w-full text-center tracking z-10">Adaptive Theme</h2>
        <ChangingWlps duration={1} delay={2}>neon_hole.jpg sunakku.jpg samurai.jpg bridge.jpg peace.jpg</ChangingWlps>
      </div>
    </div>
  )
}
