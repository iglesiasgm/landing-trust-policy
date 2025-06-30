// src/components/HeroBackground.tsx

const HeroBackground = () => {
  return (
    <div
      className="w-full h-[900px] bg-cover bg-center absolute top-0 left-0 z-[-10] pointer-events-none  inset-0 bg-gradient-to-b from-black/30 to-white/0"
      style={{
        backgroundImage: `url('public/building.png')`,
      }}
      
    />
    
  );
};

export default HeroBackground;
