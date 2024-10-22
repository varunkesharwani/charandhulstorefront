"use client"

// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useInView } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import shapeHuman from "../../../../../public/about/4f627bab-5ef8-4ebb-a69d-6869b19763f9.svg";
import shapePrism from "../../../../../public/about/shape-prism.png";
import shapeHand from "../../../../../public/about/shape-hand.png";
import shapeCube from "../../../../../public/about/shape-cube.png";
import testiImg from "../../../../../public/about/testi-img.png";
import clientSpotify from "../../../../../public/about/client-spotify-3.svg";
import clientNike from "../../../../../public/about/client-nike-2.svg";
import clientAmd from "../../../../../public/about/client-amd-logo-black.svg";
import clientApper from "../../../../../public/about/client-apper.svg";
import clientLogitech from "../../../../../public/about/client-logitech-2.svg";
import clientLevis from "../../../../../public/about/client-levis.svg";
import WordRotate from '../../../../modules/home/components/magicui/word-rotate';
import Image from 'next/image';
import aff from "../../../../../public/about/aff.svg";
import shapedash from "../../../../../public/about/shape-dash.svg";
import NumberTicker from '../../../../modules/home/components/magicui/number-ticker';
import bigtab from '../../../../../public/about/bigtab.png';
import shapestars from '../../../../../public/about/shape-stars.svg';
import clientspotify from "../../../../../public/about/client-spotify-2.svg";
import clientamd from "../../../../../public/about/client-amd-logo-black.svg";
import hulu from "../../../../../public/about/hulu.svg";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from '@modules/home/components/lib/utils';







//Testimonial code 
const testimonials = [
  {
    text: "Love the easy and beautiful designed page builder and the documentation. All in one landing and startup solutions endless use-cases that make it highly.",
    author: "Kate Roben, Game Designer at LA Studio",
    image: testiImg,
  },
  {
    text: "I think Hub is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.",
    author: "Marry Roben, Product Designer",
    image: testiImg,
  },
];



//this code blog to velocity

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}{" "}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={-default_velocity} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({ x: 0, y: 0, rotate: 0 });
    }
  }, [inView, animationControls]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <section className="text-center md:py-10 py-3 border-b-black bg-white to-white">
        <p className="text-[62.5px]   font-be-vietnam-pro font-bold"> Our Story </p   >
      {/* <p className="text-[20.5px]   font-be-vietnam-pro leading-20 text-gray-400">Enhancing well-being through the benefits of copper and brass in our innovative solutions.</p> */}
      </section>
      <hr />



      <section className="">
        <div className="text-center pb-12">
          <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">

          </h2>
          <section className=" bg-white  mb-6 md:px-10 px-1 pt-10 ">
        
        <p className="leading-7 mb-4">
          Starting Charandhul isn&apos;t a single story, but the result of hundreds of different adventures and failed attempts at different ventures. A bunch of friends met in college, and from the very first day, it was evident that there was going to be chaos and disruption of the pre-established norms.
        </p>
        <p className="leading-7 mb-4">
          We started college a little late due to COVID, but whatever time we got, we made sure to make the most of it. We started an organisation called &apos;SAMPDA&apos; at our university, which became so big with time that we could never have guessed. We started doing events, which grew from 20 to 2000 people attending at once.
        </p>
        <p className="leading-7 mb-4">
          From fighting to get more things for students to organising massive, crazy college trips for money, with time we kept growing. Swiftly, our aims got more aspirational, and we tried our luck at multiple different businesses. Some of them failed and some of them thrived, but all of them taught us a little about market needs and how to satisfy them.
        </p>
        <p className="leading-7 mb-4">
          So one fine day, on a short trip to Mathura, we not only got the idea to do something to promote our culture and help our people, but kind Madhav also gave us the product, company name, and way to go about it and that&apos;s how Charandhul happened.
        </p>
        <h3 className="text-xl mb-3 font-medium">Dream at Delhi</h3>
        <h3 className="text-xl mb-3 font-medium">Inspired at Mathura</h3>
        <h3 className="text-xl mb-3 font-medium">Made at Moradabad</h3>
        <h3 className="text-2xl text-blue-600/100  mb-3 font-medium">Available at भारत</h3>
        <p className="leading-7 mb-4 pt-4 text-2xl text-orange-600 font-bold" >
          Helping India to go back at:
        </p>
        <div className=" mb-4 list-none text-center font-medium ">
          <h3 className="text-xl mb-3 font-medium" >Cooking in brass</h3>
          <h3 className="text-xl mb-3 font-medium" >Drinking in copper</h3>
          <h3 className="text-xl mb-3 font-medium" > Eating in Kansa</h3>
         
        </div>
        <p className="text-center  text-2xl pt-5">
          One product at a time.
        </p>
      </section>







      <section className="lqd-section features bg-white bg-no-repeat bg-cover bg-center text-start py-24" style={{ backgroundImage: "url('../../../../../public/about/features.svg')" }}>
        <div className="container relative  w-[95%] md:w-[80%] border-b border-ui-border-base mx-auto  ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <motion.div
              className="flex flex-wrap flex-col xl:mr-[45%] xl:ml-[5%]"
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <div className="relative">
                <div className="inline-flex items-center justify-center relative">
                  <figure className="w-full relative">
                    <Image src={shapedash} alt="features" layout="fill" objectFit="cover" />
                  </figure>
                </div>
              </div>
              <div className="relative">
                <h2 className="text-5xl mb-2 relative m-0 leading-none pb-0 text-[50px] text-[#282734] font-be-vietnam-pro ">
                  <strong>Why we&apos; re <span className="text-rotator-activated"><span className="txt-rotate-keywords"> <WordRotate words={["Affordable", "Better", "Worth it"]} /> </span></span>
                  </strong></h2>
              </div>
              <motion.div
                className="relative hidden lg:block"
                initial={{ x: 200, y: -100, rotateZ: 0 }}
                animate={{ x: 400, y: 0, rotateZ: -90 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                {/* <div className="inline-flex items-center justify-center relative">
                  <figure className="w-full relative">
                    <Image src={aff} alt="3D shape" width={95} height={95} />
                  </figure>
                </div> */}
              </motion.div>
            </motion.div>


            <IconBox title="Affordable" icon={<svg xmlns="http://www.w3.org/2000/svg" id="Notes" width="59" height="59" viewBox="0 0 59 59"><circle id="Oval-1" cx="29.5" cy="29.5" r="29.5" fill="#b7eef5"></circle><path id="Combined_Shape-25" data-name="Combined Shape" d="M0,22.054A2.323,2.323,0,0,0,2.322,24.38H20.9a2.326,2.326,0,0,0,2.322-2.327V2.327A2.323,2.323,0,0,0,20.9,0H2.322A2.326,2.326,0,0,0,0,2.327Z" transform="translate(14.225 20.166)" fill="#008aba"></path><path id="Combined_Shape-26" data-name="Combined Shape" d="M23.219,2.327A2.323,2.323,0,0,0,20.9,0H2.322A2.326,2.326,0,0,0,0,2.327V22.054A2.323,2.323,0,0,0,2.322,24.38H20.9a2.326,2.326,0,0,0,2.322-2.327Z" transform="translate(21.337 14.235)" fill="#6abbd7"></path><path id="Shape-12" d="M9.237,11.8H1.152a1.18,1.18,0,0,1,0-2.36H9.237a1.18,1.18,0,0,1,0,2.36Zm-.58-4.72h-7.5a1.18,1.18,0,0,1,0-2.36h7.5a1.18,1.18,0,0,1,0,2.36ZM12.12,2.36H1.155A1.169,1.169,0,0,1,0,1.18,1.169,1.169,0,0,1,1.155,0H12.12a1.169,1.169,0,0,1,1.155,1.18A1.169,1.169,0,0,1,12.12,2.36Z" transform="translate(26.236 18.73)" fill="#b7eef5"></path></svg>} description="100% pure certified brass, copper and Kansa products made in the heart of India’s brass sector - Moradabad, under the guidance of Generational Craftsmen ." />
            <IconBox title="Better" icon={<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><g id="Network" transform="translate(0 -0.101)"><circle id="Oval-3" cx="27.5" cy="27.5" r="27.5" transform="translate(0 0.101)" fill="#b6ccf9"></circle><path id="Shape-5" d="M16.792,37.125a3.325,3.325,0,1,1,3.25-3.324A3.291,3.291,0,0,1,16.792,37.125Zm14.625-5.541a4.389,4.389,0,0,1-4.333-4.433,4.54,4.54,0,0,1,.154-1.175l-10.382-5.31L7.473,26.774a4,4,0,0,1,.11.932,3.84,3.84,0,0,1-3.792,3.878,3.88,3.88,0,0,1,0-7.757,3.736,3.736,0,0,1,2.58,1.036l8.581-5.586L6.512,12.144a4.258,4.258,0,0,1-2.179.6A4.389,4.389,0,0,1,0,8.312,4.389,4.389,0,0,1,4.333,3.879,4.389,4.389,0,0,1,8.667,8.312a4.506,4.506,0,0,1-.608,2.265l8.291,7.006L22.344,7.123a4.173,4.173,0,0,1-1.219-2.968,4.064,4.064,0,1,1,8.125,0,4.115,4.115,0,0,1-4.062,4.156,3.977,3.977,0,0,1-.949-.114l-6.1,10.646L28.32,24.051a4.254,4.254,0,0,1,3.1-1.333,4.434,4.434,0,0,1,0,8.865Z" transform="translate(10.694 9.038)" fill="#79a0ee"></path><circle id="Oval-4" data-name="Oval-4" cx="6.875" cy="6.875" r="6.875" transform="translate(20.275 21.774)" fill="#4577d8"></circle></g></svg>} description="At charandhul, we offer quality products at affordable prices. Every purchase plants one tree, feeds stray animals, and donates 2% of profits to senior citizens and orphans. Your choice makes a difference." />
            <IconBox title="Worth it" icon={<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58"><g id="Help" transform="translate(0 0)"><circle id="Oval-2" cx="29" cy="29" r="29" transform="translate(0 0)" fill="#ffe0ab"></circle><path id="Shape-3" d="M18.422,36.975A18.517,18.517,0,0,1,11.2,35.527a18.373,18.373,0,0,1-9.766-9.93A18.548,18.548,0,0,1,10.842,1.017a18.363,18.363,0,0,1,7.776-.861,18.538,18.538,0,0,1,9.554,4.3A18.29,18.29,0,0,1,41.818,7.48,18.438,18.438,0,0,1,44.53,22.312a18.36,18.36,0,0,1-3.633,6.773L38.33,35.037a7.419,7.419,0,0,1-2.974,2.871,7.6,7.6,0,0,1-4.08,1.071ZM9.062,26.43a9.14,9.14,0,0,0,4.852,4.937,9.019,9.019,0,0,0,8.537-.55,9.121,9.121,0,0,0,4.355-7.591,9.3,9.3,0,0,0-1.24-4.2,9.162,9.162,0,0,0-3.215-3.311l.964-4.217a4.446,4.446,0,0,0-1.4-4.354,4.275,4.275,0,0,0-4.216-.486A4.367,4.367,0,0,0,16.2,8.1a4.426,4.426,0,0,0-1.506,4.44A4.358,4.358,0,0,0,14.8,14.4L14,18.43A9.2,9.2,0,0,0,9.062,26.43Zm12.214,4.28a3.66,3.66,0,0,0-1.789.467,3.744,3.744,0,0,0-1.33,1.255,3.778,3.778,0,0,0-.549,1.784,3.765,3.765,0,0,0,2.264,3.519,3.661,3.661,0,0,0,1.469.305,3.737,3.737,0,0,0,3.737-3.737A3.733,3.733,0,0,0,21.276,30.71Z" transform="translate(6.663 7.422)" fill="#ffbc53"></path></g></svg>} description="Directly from the hammers and home of artisans to your kitchen, no middle man involved and products designed for your needs." />
          </div>
        </div>
        {/* <VelocityScroll
          text="Our Story"
          default_velocity={3}
          className="font-display text-center text-[48px] md:text-[96px] lg:text-[184.5px] text-[#6c77f4] font-be-vietnam-pro  font-bold tracking-[-0.02em]  "
        /> */}
      </section>
     
          </div>
      </section>

      <section className="py-20 relative" style={{ backgroundImage: 'linear-gradient(180deg, #FFEEDE 50%, #fff 100%)' }} ref={ref}>
      </section>
    </div>
  );
};

export default About;

const IconBox = ({ title, icon, description }: { title: string, icon: JSX.Element, description: string }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left p-8 border-b border-ui-border-base last:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0"
      initial={{ y: 35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div className="w-24 h-24 mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 font-bold text-[#008aba]">{title}</h3>
      <p className="mb-0 text-base text-[#595a5d]">{description}</p>
    </motion.div>
  );
};