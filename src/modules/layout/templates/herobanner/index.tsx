
"use client";

import React, { MouseEvent } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  const images = [
  "https://res.cloudinary.com/dveckkrb6/image/upload/v1729500646/WhatsApp_Image_2024-10-21_at_09.39.16_0ef7985f_okhygt.jpg",
  "https://res.cloudinary.com/dveckkrb6/image/upload/v1729500638/WhatsApp_Image_2024-10-21_at_09.39.17_6bc0022b_lopmjo.jpg",
   "https://res.cloudinary.com/dveckkrb6/image/upload/v1728420529/3_gtgb28.jpg",
   "https://res.cloudinary.com/dveckkrb6/image/upload/v1728420535/2_pw0j0d.jpg",
   "https://res.cloudinary.com/dveckkrb6/image/upload/v1728420534/4_cc46j4.jpg",
   "https://res.cloudinary.com/dveckkrb6/image/upload/v1728420526/5_gymdhw.png",
   "https://res.cloudinary.com/dveckkrb6/image/upload/v1728415757/1_wfwgi5.jpg",
   
  ];

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
          {images.map((imgSrc, index) => (
            <div key={index}>
              <Image
                src={imgSrc}
                className="w-full h-full object-cover"
                alt={`Image ${index + 1}`}
                width={1920}
                height={1080}
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
          {images.map((imgSrc, index) => (
            <div key={index}>
              <Image
                src={imgSrc}
                className="h-[450px] object-cover"
                alt={`Image ${index + 1}`}
                width={1920}
                height={1080}
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
