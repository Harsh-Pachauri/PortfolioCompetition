// import FeaturedCourses from "@/components/FeaturedCourses";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import Instructors from "@/components/Instructors";
// import MusicSchoolTestimonials from "@/components/TestimonialCards";
// import UpcomingWebinars from "@/components/UpcomingWebinars";
// import WhyChooseUs from "@/components/WhyChooseUs";
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
      {/* <FeaturedCourses/>
      <WhyChooseUs/> */}
      <MyTestimonials/>
      {/* <UpcomingWebinars/>
      <Instructors/>
      <Footer/> */}
    </main>
  );
}
