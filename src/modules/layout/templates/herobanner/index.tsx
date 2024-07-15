"use client"
import React, { MouseEvent } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { BiArrowBack } from "react-icons/bi"
import Link from 'next/link'
const HeroBanner: React.FC = () => {
  return (
    <div className="w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="relative text-white text-[20px] w-full mx-auto md:h-96  md:hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasPrev: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#9C6644] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasNext: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#9C6644] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369357/3_vo7mbn.png"
              className="w-full h-full object-contain"
              alt="First Image"
            />
            <Link href={`/store`}  className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-[#9C6644] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </Link>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369357/4_u712tz.png"
              className="w-full h-full object-contain"
              alt="Second Image"
            />
            <Link href={`/store`}  className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-[#9C6644] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </Link>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369355/2_okdcwx.png"
              className="w-full h-full object-contain"
              alt="Third Image"
            />
           <Link href={`/store`}  className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-[#9C6644] absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </Link>
          </div>
        </Carousel>
      </div>
      <div className="relative text-white text-[20px] w-full mx-auto md:h-96  hidden md:block">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasPrev: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px]  md:w-[50px] h-[30px] md:h-[50px] bg-[#9C6644] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasNext: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#9C6644] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369357/3_vo7mbn.png"
              className=" md:h-96  md:aspect-auto object-cover "
              alt="First Image"
            />
         
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369357/4_u712tz.png"
              className=" md:h-96 aspect-[16/10] md:aspect-auto object-cover"
              alt="Second Image"
            />
           
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dqjo5hdz0/image/upload/v1714369355/2_okdcwx.png"
              className=" md:h-96 aspect-[16/10] md:aspect-auto object-cover"
              alt="Third Image"
            />
           
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default HeroBanner
