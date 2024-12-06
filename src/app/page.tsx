import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe"
import { TimelineDemo } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import MyTestimonials from "@/components/TestimonialCards";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      {/* <h1 className="text-2xl -text-center">Hey Harsh!!</h1> */}
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <TimelineDemo/>
      <Projects/>
      <MyTestimonials/>
    </main>
  );
}
