import React from 'react';
import Image from 'next/image';
import newimg from "../../../../../public/1.jpeg";

const AyurvedicIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H15.92L14.64 5.34L15.38 7.06L18.5 6.32L20.36 9.5L12 19.36L3.64 9.5L6.18 6.32L9.28 7.06L10.02 5.34L8.75 3H3C2.45 3 2 3.45 2 4V5C2 9.84 5.16 14 9.5 15.74C9.67 15.82 9.84 15.9 10.02 15.96C9.85 16.74 9.42 17.43 8.75 17.91C9.34 18.16 9.97 18.32 10.62 18.42L10 20H14L13.38 18.42C14.03 18.32 14.66 18.16 15.25 17.91C14.58 17.43 14.15 16.74 13.98 15.96C14.16 15.9 14.33 15.82 14.5 15.74C18.84 14 22 9.84 22 5V4C22 3.45 21.55 3 21 3ZM9 2C9.55 2 10 2.45 10 3V4H8V3C8 2.45 8.45 2 9 2ZM15 2C15.55 2 16 2.45 16 3V4H14V3C14 2.45 14.45 2 15 2Z" fill="#8b2b2b"/>
  </svg>
);

const AuthenticIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#8b2b2b" stroke-width="2"/>
    <path d="M15 14H13.5C12.67 14 12 13.33 12 12.5V11.5C12 10.67 12.67 10 13.5 10H14.5C15.33 10 16 10.67 16 11.5V12.5C16 13.33 15.33 14 14.5 14H15ZM10 14H7C6.45 14 6 13.55 6 13V11C6 10.45 6.45 10 7 10H10V14ZM18 8H7.9C7.4 8 7 8.4 7 8.9V15.1C7 15.6 7.4 16 7.9 16H18V8Z" fill="#8b2b2b"/>
  </svg>
);

const SustainableIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7.58 2 4 5.58 4 10C4 14.42 8 19 12 22C16 19 20 14.42 20 10C20 5.58 16.42 2 12 2ZM13.3 16.6L11.3 15.3L10.5 13.3L8.3 12.5L8.8 10.5L7.5 8.5L9.5 8L10.5 6L12.5 6.8L14.5 5.5L15 7.5L17 8L15.7 9.7L15.2 11.7L13.3 12.5L13.7 14.5L13.3 16.6Z" fill="#8b2b2b"/>
  </svg>
);

const ChoicePage = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen flex flex-col justify-center items-center md:p-8 p-1 rounded-md">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[#8b2b2b] text-xl font-bold uppercase mb-4">Dont Fall for the Easy One</h2>
          <h1 className="text-[#8b2b2b] text-5xl font-serif font-bold mb-6">Make The Right Choice!</h1>
          <p className="text-gray-700 text-lg mb-8">
            It’s not just about the food you eat; how you cook and consume your food matters!
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
              <AyurvedicIcon />
              <div className="ml-4">
                <h3 className="text-[#8b2b2b] text-2xl font-bold">Ayurvedic</h3>
                <p className="text-gray-700">Traditional metals like Brass, Copper and Kansa are non-toxic, boost immunity, aid digestion, slow down aging and improve your overall health.</p>
              </div>
            </div>
            <div className="flex items-start">
              <AuthenticIcon />
              <div className="ml-4">
                <h3 className="text-[#8b2b2b] text-2xl font-bold">Authentic</h3>
                <p className="text-gray-700">All our products are made from 100% pure metal sheets and are ISO 9001:2005 certified.</p>
              </div>
            </div>
            <div className="flex items-start">
              <SustainableIcon />
              <div className="ml-4">
                <h3 className="text-[#8b2b2b] text-2xl font-bold">Sustainable</h3>
                <p className="text-gray-700">These utensils last a lifetime, are recyclable, and help save gas (good conductors of heat) - making them sustainable and conscious choices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src={newimg} 
            alt="Utensils"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          
          />
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
