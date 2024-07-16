import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const page = () => {
  return (
    <div className="text-black font-sans p-5">
      <header className="flex items-center mb-5">
        {/* Uncomment and update the path to use the logo image */}
        {/* <img src={logo.src} alt="Charandhul Logo" className="h-24 mr-5" /> */}
        <h1 className="text-[#023047] text-4xl font-bold">Charandhul</h1>
      </header>
      <section className="p-5 border mb-5">
        <h2 className="text-2xl mb-2 font-semibold">Our Story</h2>
        <p>
          Starting Charandhul isn&apos;t a single story, but the result of hundreds of different adventures and failed attempts at different ventures. A bunch of friends met in college, and from the very first day, it was evident that there was going to be chaos and disruption of the pre-established norms.
        </p>
        <p>
          We started college a little late due to COVID, but whatever time we got, we made sure to make the most of it. We started an organisation called &apos;SAMPDA&apos; at our university, which grew so big with time that we could never have guessed. We started doing events, which started with 20 to 2000 people attending at once.
        </p>
        <p>
          From fighting to get more things for students to organizing massive, crazy college trips for money, with time we kept growing. Swiftly, our aims got more aspirational, and we tried our luck at multiple different businesses. Some of them failed and some of them thrived, but all of them taught us a little about market needs and how to satisfy them.
        </p>
        <p>
          So one fine day, on a short trip to Mathura, we not only got the idea to do something to promote our culture and help our people, but kind Madhav also gave us the product, company name, and way to go about it.
        </p>
      </section>
    </div>
  );
};

export default page;
