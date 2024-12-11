'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Working with Harsh Pachauri on this website was an incredible experience. His skills and creativity made collaboration seamless and effective.",
    name: "Kawaljeet Singh",
    title: "Web Development Partner",
  },
  {
    quote:
      "Introducing Harsh to this project was a great decision. His dedication and technical expertise stood out throughout the process.",
    name: "Srijan",
    title: "College Senior",
  },
  {
    quote:
      "Harsh Pachauri and his team delivered a functional and visually appealing website. Their professionalism and creativity exceeded my expectations.",
    name: "Ashwini",
    title: "Business Owner",
  },
];



function MyTestimonials() {
  return (
    <div id="#testimonials" className="h-[25rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Testimonials</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>

    </div>
  )
}

export default MyTestimonials