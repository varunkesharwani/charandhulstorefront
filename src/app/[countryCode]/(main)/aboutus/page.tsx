import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const Page = () => {
  return (
    <div className="  text-black font-sans p-5">
      <header className="flex items-center mb-5">
        {/* <img src={logo.src} alt="Charandhul Logo" className="h-24 mr-5" /> */}
        <h1 className="text-[#023047]  text-4xl">Charandhul</h1>
      </header>
      <section className="border p-5 mb-5">
        <p>
          We at Charandhul make lifestyle products that elevate your day-to-day living experience. We created a series of Brass, Copper, and Clay products ranging from kitchen to garden and from your corporate meetings to family gatherings. Our products and services help you heal through health, hygiene, and spirituality. All our products are manufactured by families pursuing these professions for generations. We work to bring the fast-moving urban India closer to its counterpart.
        </p>
      </section>
      <section className=" p-5 border ">
        <h2 className="text-2xl mb-2">Vision</h2>
        <p>
          &lsquo;What you can dream is what you can get&lsquo. We at Charandhul believe in this motto and dream of creating an ecosystem that has deep-rooted cores, which values our traditions and is connected with our glorious past. The goal is to help grow India as a nation-state by providing everyone with pure and pious products that will not only benefit them but also supply oxygen to the dying cultures and urban villages.
        </p>
      </section>
    </div>
  );
};

export default Page;
