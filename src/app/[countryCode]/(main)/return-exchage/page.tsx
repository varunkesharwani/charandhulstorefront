// pages/return-exchange.js
"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReturnExchange = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderId, setOrderId] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = { name, email, phoneNumber, orderId, description };

    try {
      const response = await fetch('/api/returnExchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Return/Exchange request received successfully.');
      } else {
        console.error('Failed to submit request');
        toast.error('Failed to submit request');
      }
    } catch (error) {
      console.error('Failed to submit request:', error);
      toast.error('Failed to submit request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <main className="flex flex-col items-center justify-center w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-[#032A3E]">Reach Out to Us</h1>
        <ToastContainer />
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-bold mb-2">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-bold mb-2">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="orderId" className="block font-bold mb-2">Order ID</label>
            <input
              id="orderId"
              name="orderId"
              placeholder="Enter your order ID"
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter a description of your return/exchange request"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <button
            className="w-full bg-[#032A3E] text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 pt-5"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ReturnExchange;
