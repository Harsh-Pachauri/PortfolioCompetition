'use client';
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { Meteors } from "./ui/meteors";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";
import { SparklesCore } from "./ui/sparkles";
import CircularImage from "./ui/circular-image";

function HeroSection() {
  const words2 = ["Web Developer", "AI-ML Enthusiast", "Data Scientist"];
  const words = [
    {
      text: "I'm",
    },
    {
      text: "HARSH",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "PACHAURI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div id="home" className="bg-[#050619] h-auto md:h-[45rem] w-full rounded-md flex flex-col md:flex-row items-center justify-around relative overflow-hidden mx-auto py-10 px-6 md:px-16"
    style={{
      backgroundImage: `linear-gradient(rgba(5, 6, 25, 0.84), rgba(5, 6, 25, 0.84)), url('https://images.hdqwalls.com/download/sky-blue-nebula-4k-re-3840x2160.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      {/* Left Section: Text */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4">
          <TypewriterEffectSmooth words={words} />
        </h1>
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-0">
          <FlipWords words={words2} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:gap-6">
          <Link href="#contact">
            <Button
              borderRadius="1.75rem"
              className="w-full sm:w-auto bg-white dark:bg-gray-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              👋 Lets Connect
            </Button>
          </Link>
          <Link href="#experiences">
            <Button
              borderRadius="1.75rem"
              className="w-full sm:w-auto bg-white dark:bg-[#0b0c25] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore my work ↓
            </Button>
          </Link>
          
          <Link href="https://buymeacoffee.com/harshpachauri">
            <Button
              borderRadius="1.75rem"
              className="w-full font-bold sm:w-auto bg-white  dark:bg-yellow-400 text-black dark:text-amber-950  border-neutral-200 dark:border-slate-800"
            >
              Buy Me a Coffee ☕︎
            </Button>
          </Link>
        </div>
      </div>


      {/* Right Section: CircularImage */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0">
        <div className="w-full max-w-[500px] aspect-square">
          <CircularImage 
            imageSrc="/pfp3.jpg"
            imageAlt="Harsh Pachauri"
            size="xlg"
            />
        </div>
        <div className="relative w-full mt-4">
  {/* Sparkles */}
  <div className="relative w-full h-20 mx-auto">
    <SparklesCore
      background="transparent" // Fully transparent background
      minSize={0.4}
      maxSize={1}
      particleDensity={1000}
      className="w-full h-full"
      particleColor="#FFFFFF" // Sparkle color remains white
    />
  </div>

  {/* Optional: Adjusted Sparkles Gradient Background */}
  <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

  {/* Underline Gradient */}
  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></div>
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
</div>

      </div>

      {/* Meteors */}
      <Meteors number={40} />
    </div>
  );
}

export default HeroSection;

