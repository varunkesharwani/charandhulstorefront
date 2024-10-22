"use client";  
import { XMark } from "@medusajs/icons"

import React, { useState, useEffect } from 'react';
import { Container } from '@medusajs/ui';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//@ts-ignore
const Slider = dynamic(() => import('react-slick').then(mod => mod.default), { ssr: false });

interface Image {
  id: string;
  url: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: images.length > 3 ? 3 : images.length,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
  });

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleEsc = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        closeZoom();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:flex md:flex-col items-center gap-2 md:gap-4 mb-4 md:mb-0">
        {images.map((image: { id: string; url: string }, index: number) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-24 h-24 border-2 p-1 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            style={{ width: '95px', height: '95px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                className="object-contain"
                fill
              />
            </div>
          </button>
        ))}
      </div>

      <div
        className="flex-1 relative aspect-square md:aspect-[29/34] w-full h-[391px] md:h-[510px] cursor-zoom-in"
        {...handlers}
        onClick={handleImageClick}
      >
        <Container className="relative w-full h-full overflow-hidden bg-ui-bg-subtle">
          <Image
            src={images[currentIndex].url}
            alt={`Product image ${currentIndex + 1}`}
            layout="fill"
            className="absolute inset-0 rounded-md object-contain"
            sizes="(max-width: 576px) 391px, (min-width: 576px) 510px"
            fill
          />
        </Container>
      </div>

      <div className="mt-4 md:hidden">
  
        <Slider {...settings}>
          {images.map((image: { id: React.Key | null | undefined; url: string | StaticImport; }, index: number) => (
            <div key={image.id} className="h-[95px] space-x-3 w-[80px]">
              <button
                onClick={() => setCurrentIndex(index)}
                className={`w-24 h-24 border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'} flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    className="object-contain"
                    fill
                  />
                </div>
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" onClick={closeZoom}>
          <div className="relative w-[90vw] h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex].url}
              alt={`Zoomed product image ${currentIndex + 1}`}
              layout="fill"
              className="object-contain"
              fill
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeZoom}
            >
             <XMark />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;