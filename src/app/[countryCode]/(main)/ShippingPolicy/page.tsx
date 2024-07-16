import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const ShippingPolicy = () => {
  return (
    <div className="text-black font-sans p-5">
      <header className="flex items-center mb-5">
        {/* Uncomment and update the path to use the logo image */}
        {/* <img src={logo.src} alt="Charandhul Logo" className="h-24 mr-5" /> */}
        <h1 className="text-[#023047] text-4xl font-bold">Charandhul</h1>
      </header>
      <section className="p-5 border mb-5">
        <h2 className="text-2xl mb-2 font-semibold">Shipping Policy</h2>
        <p>
          Thank you for visiting and shopping at Charandhul.com. The following terms and conditions constitute our Shipping Policy.
        </p>
        <h3 className="text-xl mb-1 font-medium">Domestic Shipping Policy</h3>
        <h4 className="text-lg mb-1 font-medium">Shipment Processing Time</h4>
        <p>
          All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.
        </p>
        <h4 className="text-lg mb-1 font-medium">Shipping Rates & Delivery Estimates</h4>
        <p>
          Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates will vary based on your location and the shipping method chosen.
        </p>
        <ul className="list-disc ml-5">
          <li>Standard Shipping: 5-7 business days</li>
          <li>Fast Shipping: 2-3 business days</li>
        </ul>
        <p>
          Please note that delivery delays can occasionally occur due to unforeseen circumstances.
        </p>
        <h4 className="text-lg mb-1 font-medium">Shipment to P.O. Boxes or APO/FPO Addresses</h4>
        <p>
          Charandhul.com ships to all addresses within India, including P.O. Boxes and APO/FPO addresses. Please note that expedited and overnight shipping options may not be available for P.O. Boxes or APO/FPO addresses.
        </p>

        <h3 className="text-xl mb-1 font-medium">International Shipping Policy</h3>
        <h4 className="text-lg mb-1 font-medium">Shipment Processing Time</h4>
        <p>
          International orders are also processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. Delivery times for international shipments vary based on the destination country and the shipping method selected.
        </p>
        <h4 className="text-lg mb-1 font-medium">Shipping Rates & Delivery Estimates</h4>
        <p>
          International shipping rates and delivery times will be calculated and displayed at checkout. Please be aware that customs clearance can cause delays beyond our control.
        </p>
        <ul className="list-disc ml-5">
          <li>Standard International Shipping: 10-20 business days</li>
          <li>Expedited International Shipping: 5-10 business days</li>
        </ul>

        <h4 className="text-lg mb-1 font-medium">Customs, Duties, and Taxes</h4>
        <p>
          Charandhul.com is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
        </p>
        <h4 className="text-lg mb-1 font-medium">Order Tracking</h4>
        <p>
          Once your order has shipped, you will receive a Shipment Confirmation email containing your tracking number(s). The tracking number will be active within 24 hours.
        </p>
        <h4 className="text-lg mb-1 font-medium">Damages</h4>
        <p>
          Charandhul.com is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
        </p>
        <h4 className="text-lg mb-1 font-medium">Lost or Stolen Packages</h4>
        <p>
          Charandhul.com is not responsible for lost or stolen packages confirmed to be delivered to the address entered for an order. Upon inquiry, Charandhul.com will confirm the delivery to the address provided, date of delivery, tracking information, and shipping carrier information for the customer to investigate.
        </p>
        <h4 className="text-lg mb-1 font-medium">Shipping Restrictions</h4>
        <p>
          Certain items may be restricted from shipping to international destinations. Please check the product details for any such restrictions.
        </p>
        <h4 className="text-lg mb-1 font-medium">Customer Support</h4>
        <p>
          If you have any questions about your order or need further assistance, please contact our customer support team at <strong>team@charandhul.com</strong>. We are available Monday through Friday, 9 AM to 6 PM (IST).
        </p>
        <p>
          Thank you for choosing Charandhul.com. We appreciate your business and look forward to serving you with our premium brass and copper kitchenware products.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
