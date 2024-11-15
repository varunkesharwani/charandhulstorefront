"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const policies = {
  refundCancellation: {
    title: "Charandhul Refund and Cancellation Policy",
    content: [
      "This policy explains the procedures for canceling or seeking a refund for products or services purchased through Charandhul.",
      {
        title: "Cancellation Policy",
        points: [
          "Cancellations will be considered only if the request is made within 7 days of placing the order.",
          "Cancellation requests will not be entertained if the product has already been shipped or is out for delivery. In such cases, you may choose to reject the product upon delivery.",
          "Perishable items like flowers, eatables, etc., cannot be canceled. Refunds or replacements may be made for such items only if the delivered product is proven to be of unsatisfactory quality.",
        ],
      },
      {
        title: "Refunds for Damaged or Defective Products",
        points: [
          "If the received product is damaged or defective, report the issue to our customer service team within 7 days of receipt.",
          "The seller or merchant will review the reported issue, and a decision will be made after proper verification.",
        ],
      },
      {
        title: "Product Not as Expected",
        points: [
          "If the product differs from its description or your expectations, notify our customer service within 7 days of receiving the product. Our team will investigate and decide on the appropriate resolution.",
        ],
      },
      {
        title: "Products with Manufacturer’s Warranty",
        points: [
          "For products covered under the manufacturer's warranty, please contact the manufacturer directly to resolve any issues.",
        ],
      },
      {
        title: "Refund Process",
        points: [
          "Approved refunds will be processed within 7 days of approval.",
          "The refund amount will be credited to the original payment method or another suitable method as agreed upon.",
        ],
      },
    ],
  },
  returnExchange: {
    title: "Charandhul Return and Exchange Policy",
    content: [
      "We strive to ensure customer satisfaction and provide a smooth return or exchange process. Please review the following guidelines carefully.",
      {
        title: "Eligibility for Return or Exchange",
        points: [
          "We offer refunds or exchanges within the first 7 days from the date of your purchase. If 7 days have passed since your purchase, we cannot offer a return, exchange, or refund of any kind.",
          "The item must be unused and in the same condition as received.",
          "The item must have its original packaging.",
          "Items purchased during a sale may not be eligible for a return or exchange.",
          "Only items found to be defective or damaged are eligible for replacement (based on an exchange request).",
        ],
      },
      {
        title: "Exemptions",
        points: [
          "Certain product categories are exempt from returns or refunds. These categories will be clearly identified at the time of purchase.",
        ],
      },
      {
        title: "How to Initiate a Return or Exchange Request",
        points: [
          "To place a return or exchange request for an eligible item, please fill the form above with your order details and reason for the request.",
        ],
      },
      {
        title: "Processing Your Return or Exchange",
        points: [
          "Once we receive the returned item, it will be inspected for quality.",
          "We will notify you via email once the returned product is received and inform you about the outcome of the inspection.",
          "If approved, your request (return or exchange) will be processed according to our policies.",
        ],
      },
    ],
  },
};

const ReturnExchange = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderId, setOrderId] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = { name, email, phoneNumber, orderId, description };

    try {
      const response = await fetch("/api/returnExchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Return/Exchange request received successfully.");
      } else {
        console.error("Failed to submit request");
        toast.error("Failed to submit request");
      }
    } catch (error) {
      console.error("Failed to submit request:", error);
      toast.error("Failed to submit request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#032A3E] text-white text-center py-6">
        <h1 className="text-4xl font-bold">Return & Exchange</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-[#032A3E] mb-6">
            Reach Out to Us
          </h2>
          <ToastContainer />
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-8">
          {[policies.refundCancellation, policies.returnExchange].map(
            (policy, index) => (
              <div key={index} className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-[#032A3E]">
                  {policy.title}
                </h3>
                {policy.content.map((section, i) =>
                  typeof section === "string" ? (
                    <p key={i} className="text-gray-700">
                      {section}
                    </p>
                  ) : (
                    <div key={i}>
                      <h4 className="text-xl font-semibold text-gray-800">
                        {section.title}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {section.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            )
          )}
        </section>
      </main>
      <footer className="bg-[#032A3E] text-white text-center py-4">
        <p>© 2024 Charandhul. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReturnExchange;
