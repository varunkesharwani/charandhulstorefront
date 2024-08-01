import React from "react"
import HeroBanner from "@modules/layout/templates/herobanner"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { BiArrowBack } from "react-icons/bi"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <HeroBanner />

      
    </div>
  )
}

export default Hero
