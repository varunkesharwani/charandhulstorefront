import React from "react"
import HeroBanner from "@modules/layout/templates/herobanner"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { BiArrowBack } from "react-icons/bi"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <HeroBanner />

      <div className="container mx-auto px-4 md:px-6 md:pt-10 md:mt-7 flex flex-col items-center justify-center text-[#023047]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#023047] sm:text-4xl md:text-5xl lg:text-6xl">
              Our Copper & Brass Collection
            </h2>
            <p className="max-w-[900px] text-base text-[#023047] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl dark:text-gray-400">
              Explore our exquisite range of handcrafted copper and brass
              utensils, perfect for elevating your kitchen experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
