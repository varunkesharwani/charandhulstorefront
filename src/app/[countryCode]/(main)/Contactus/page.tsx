import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 sm:px-12 md:px-24 text-center bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="mb-8 text-gray-600">
          We&apos;re here to help and would love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to share your feedback, our team is ready to assist.
        </p>
        <div className="flex flex-col items-center mb-6 space-y-4">
          <a
            href="https://www.instagram.com/charandhul"
            className="flex items-center text-blue-500 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-2" />
            Instagram Support
          </a>
          <a
            href="https://wa.me/7004608819"
            className="flex items-center text-green-500 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            Whatsapp Support
          </a>
        </div>
        <p className="text-gray-600">
          Operating Hours: Monday to Saturday, 10:00 AM - 7:00 PM
        </p>
        <p className="text-gray-600">
          Address: Plumeria Gardern Estate , Omicron 3 , Gautam Budh Nagar 
        </p>
        <p className="text-gray-600">
          Mail us:  team@charandhul.com
        </p>
        <p className="text-gray-600">
          Operating Hours: Monday to Saturday, 10:00 AM - 7:00 PM
        </p>
      </main>
    </div>
  );
};

export default Page;
