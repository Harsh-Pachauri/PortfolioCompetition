import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe"
import { TimelineDemo } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import MyTestimonials from "@/components/TestimonialCards";
import Skills from "@/components/Skills";
import Footernew from "@/components/Footernew";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <section id="home">
      <HeroSection/>
      </section>
      {/* <h1 className="text-2xl -text-center">Hey Harsh!!</h1> */}
      <AboutMe/>
      <section id="skills">

      <Skills/>
      </section>
      <section id="experiences">
      <TimelineDemo/>
      </section>
      <section id="projects">
      <Projects/>

      </section>
      <MyTestimonials/>
      <section id="contact">
      <Footernew/>
      </section>
    </main>
  );
}
