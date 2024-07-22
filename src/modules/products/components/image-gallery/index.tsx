// import { Image as MedusaImage } from "@medusajs/medusa"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: MedusaImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   return (
//     <div className="flex items-start relative">
//       <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
//         {images.map((image, index) => {
//           return (
//             <Container
//               key={image.id}
//               className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
//               id={image.id}
//             >
//               <Image
//                 src={image.url}
//                 priority={index <= 2 ? true : false}
//                 className="absolute inset-0 rounded-rounded"
//                 alt={`Product image ${index + 1}`}
//                 fill
//                 sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             </Container>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ImageGallery
"use client"
import React, { useState } from 'react';
import { Image as MedusaImage } from '@medusajs/medusa';
import { Container } from '@medusajs/ui';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:flex md:flex-col items-center gap-2 md:gap-4 mb-4 md:mb-0">
        {images.map((image, index) => (
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
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="flex-1 relative aspect-square md:aspect-[29/34] w-full h-[391px] md:h-[510px]">
        <Container className="relative w-full h-full overflow-hidden bg-ui-bg-subtle">
          <Image
            src={images[currentIndex].url}
            alt={`Product image ${currentIndex + 1}`}
            layout="fill"
            className="absolute inset-0 rounded-md object-cover"
            sizes="(max-width: 576px) 391px, (min-width: 576px) 510px"
          />
        </Container>
      </div>

      <div className="mt-4 md:hidden">
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={image.id}  style={{ width: '100px', height: '95px' }}>
        <button
          onClick={() => setCurrentIndex(index)}
          className={`w-24 h-24 border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'} flex items-center justify-center`}
          style={{ width: '95px', height: '95px' }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              className="object-cover"
            />
          </div>
        </button>
      </div>
    ))}
  </Slider>
</div>


      {/* Color Controls */}
   

      
    </div>
  );
};

export default ImageGallery;
