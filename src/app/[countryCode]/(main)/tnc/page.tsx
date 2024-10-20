import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans ">
      {/* <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Uncomment and update the path to use the logo image */}
          {/* <img src={logo.src} alt="Charandhul Logo" className="h-16" /> */}
          {/* <h1 className="text-3xl font-bold">Charandhul</h1>
        </div>
      </header>  */}

      <main className="container  bg-white rounded-lg shadow-md md:p-5 p-2">
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 text-[#032A3E]">Terms and Conditions</h2>
          <p className="mb-4">
            Welcome to Charandhul.com. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services. If you do not agree with these terms, you should not use this website.
          </p> 

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#032A3E]">1. Introduction</h3>
            <p>
              Charandhul.com (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) operates this website. By accessing this website, you agree to these terms and conditions, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">2. Use of Website</h3>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. You must not misuse this website by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">3. Intellectual Property Rights</h3>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Charandhul.com or its content suppliers and is protected by international copyright laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from us.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">4. Product Information</h3>
            <p>
              We strive to ensure that all descriptions, images, and prices of products appearing on the website are accurate. However, we do not warrant that product descriptions or other content on the website are error-free. All prices are subject to change without notice and we reserve the right to modify or discontinue any product at any time.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">5. Orders and Payments</h3>
            <p>
              By placing an order, you are offering to purchase a product subject to these terms and conditions. All orders are subject to availability and confirmation of the order price. We reserve the right to refuse any order you place with us. In the event of an error in the processing of your order, we will inform you of this as soon as possible and offer a refund or alternative solution.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">6. Shipping and Delivery</h3>
            <p>
              We aim to dispatch orders promptly, but delivery times are estimates and not guaranteed. We are not responsible for delays caused by factors beyond our control, such as customs clearance or postal delays. Risk of loss and title for products pass to you upon our delivery to the carrier.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">7. Returns and Refunds</h3>
            <p>
              If you are not satisfied with your purchase, you may return it in accordance with our Return Policy, which is incorporated by reference into these terms and conditions. Products must be returned in their original condition within the specified return period. Refunds will be processed based on the original payment method, minus any shipping or handling fees, if applicable.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">8. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Charandhul.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. We shall not be liable for any damages resulting from the use or inability to use our website or products.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">9. Privacy Policy</h3>
            <p>
              Your use of the website is also governed by our Privacy Policy, which is incorporated by reference into these terms and conditions. We are committed to protecting your privacy and personal information.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">10. Changes to Terms and Conditions</h3>
            <p>
              We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">11. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of our courts.
            </p>

            <h3 className="text-2xl font-semibold text-[#032A3E]">12. Contact Information</h3>
            <p>
              If you have any questions about these terms and conditions, please contact us at <strong>team@charandhul.com</strong>.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#032A3E] text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Charandhul. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
