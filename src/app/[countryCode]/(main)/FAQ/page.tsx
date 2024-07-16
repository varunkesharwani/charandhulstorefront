import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const FAQ = () => {
  return (
    <div className="text-black font-sans p-5">
      <header className="flex items-center mb-5">
        {/* Uncomment and update the path to use the logo image */}
        {/* <img src={logo.src} alt="Charandhul Logo" className="h-24 mr-5" /> */}
        <h1 className="text-[#023047] text-4xl font-bold">Charandhul</h1>
      </header>
      <section className="p-5 border mb-5">
        <h2 className="text-2xl mb-2 font-semibold">Welcome to Charandhul.com&apos;s FAQ Section</h2>
        <p>
          Here, you will find answers to some of the most commonly asked questions about our brass and copper kitchenware products, ordering process, shipping, and more.
        </p>

        <h3 className="text-xl mb-1 font-medium">1. What materials are used in your products?</h3>
        <p>
          Our products are made from high-quality brass and copper. We ensure that all our materials are safe, durable, and meet the highest standards of craftsmanship.
        </p>

        <h3 className="text-xl mb-1 font-medium">2. What are the benefits of using brass and copper kitchenware?</h3>
        <p>
          Brass and copper have numerous health benefits. Copper is known for its antimicrobial properties, which can help reduce bacteria in water and food. Brass utensils are also durable and provide a traditional aesthetic to your kitchen.
        </p>

        <h3 className="text-xl mb-1 font-medium">3. How do I care for and clean my brass and copper items?</h3>
        <p>
          To maintain the shine and longevity of your brass and copper kitchenware, wash them by hand using mild soap and water. Avoid using abrasive cleaners or dishwashers. Dry immediately with a soft cloth to prevent water spots. Occasionally, use a mixture of lemon juice and salt to polish and restore shine.
        </p>

        <h3 className="text-xl mb-1 font-medium">4. Are your products handmade?</h3>
        <p>
          Yes, all our products are handcrafted by skilled artisans, ensuring each piece is unique and of the highest quality.
        </p>

        <h3 className="text-xl mb-1 font-medium">5. How can I place an order?</h3>
        <p>
          To place an order, simply browse our online catalog, add the desired items to your cart, and proceed to checkout. Follow the instructions to complete your purchase securely.
        </p>

        <h3 className="text-xl mb-1 font-medium">6. What payment methods do you accept?</h3>
        <p>
          We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways.
        </p>

        <h3 className="text-xl mb-1 font-medium">7. Do you offer international shipping?</h3>
        <p>
          Yes, we offer international shipping. Shipping rates and delivery times vary based on the destination. Please refer to our Shipping Policy for more details.
        </p>

        <h3 className="text-xl mb-1 font-medium">8. How long will it take to receive my order?</h3>
        <p>
          Delivery times depend on your location and the shipping method selected. Generally, orders are processed within 2-3 business days, and standard shipping times apply thereafter.
        </p>

        <h3 className="text-xl mb-1 font-medium">9. Can I track my order?</h3>
        <p>
          Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your order through our shipping partner&apos;s website.
        </p>

        <h3 className="text-xl mb-1 font-medium">10. What is your return policy?</h3>
        <p>
          For information on our return policy, please check the Return Policy page on our website.
        </p>

        <h3 className="text-xl mb-1 font-medium">11. How can I contact customer support?</h3>
        <p>
          For any questions or concerns, please contact our customer support team at <strong>team@charandhul.com</strong>. We are available Monday through Friday, 9 AM to 6 PM (IST).
        </p>

        <h3 className="text-xl mb-1 font-medium">12. Do you offer customization or bulk orders?</h3>
        <p>
          Yes, we offer customization and bulk orders for certain products. Please contact us at <strong>team@charandhul.com</strong> with your requirements, and we will be happy to assist you.
        </p>

        <h3 className="text-xl mb-1 font-medium">13. Are your products safe for cooking and storing food?</h3>
        <p>
          Yes, our brass and copper products are safe for cooking and storing food. However, it is important to follow proper care and maintenance guidelines to ensure their longevity and safety.
        </p>

        <h3 className="text-xl mb-1 font-medium">14. Can I change or cancel my order?</h3>
        <p>
          If you need to change or cancel your order, please contact us as soon as possible at <strong>team@charandhul.com</strong>. We will do our best to accommodate your request before the order is processed and shipped.
        </p>

        <p>
          We hope this FAQ section has been helpful. If you have any other questions, please feel free to reach out to us at <strong>team@charandhul.com</strong>. Thank you for choosing Charandhul.com for your brass and copper kitchenware needs!
        </p>
      </section>
    </div>
  );
};

export default FAQ;
