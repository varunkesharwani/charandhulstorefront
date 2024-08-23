

"use client";

import React, { MouseEvent } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import FirstImg from "../../../../../public/NewImg/1.svg";
import SecondImg from "../../../../../public/NewImg/2.svg";
import ThirdImg from "../../../../../public/NewImg/3.svg";
import FourthImg from "../../../../../public/NewImg/4.svg";
import FifthImg from "../../../../../public/NewImg/5.svg";

const HeroBanner: React.FC = () => {
  return (
    <div className="w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="relative text-white text-[20px] w-full mx-auto md:h-96 md:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasPrev: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#032a3e] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
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
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#032a3e] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          {[FirstImg, SecondImg, ThirdImg, FourthImg ,FifthImg].map((imgSrc, index) => (
            <div key={index}>
              <Image
                src={imgSrc}
                className="w-full h-full object-cover"
                alt={`Image ${index + 1}`}
              />
              <Link
                href={`/store`}
                className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-[#032a3e] absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
              >
                Shop now
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative text-white text-[20px] w-full mx-auto md:h-[450px] hidden md:block">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(
            clickHandler: (e: MouseEvent<HTMLDivElement>) => void,
            hasPrev: boolean
          ) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#032a3e] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
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
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#032a3e] z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          {[FirstImg, SecondImg, ThirdImg, FourthImg ,FifthImg].map((imgSrc, index) => (
            <div key={index}>
              <Image
                src={imgSrc}
                className="h-[450px] object-cover"
                alt={`Image ${index + 1}`}
              />
              <Link
                href={`/store`}
                className="px-[15px] md:px-[40px] py-[10px] md:py-[10px] font-oswald bg-[#032a3e] absolute bottom-[25px] left-0 text-white text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
              >
                Shop now
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;
