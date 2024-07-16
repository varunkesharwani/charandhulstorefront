"use client"
import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      phoneNumber,
      email,
      query,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("qurey received sucessfully we will contact you soon");
      } else {
        console.error("Failed to send email");
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <strong className="text-4xl font-extrabold py-4 "> <h1 className="items-center flex align-middle justify-center">Reach Out</h1></strong>

      </div>
      <div className="flex items-center justify-evenly flex-col md:flex-row">
        <div className="p-4 text-black border-b-black md:w-[75%] w-full">
          <div>
            <h1 className="text-4xl font-extrabold">Support</h1>
          </div>
          <ToastContainer />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-bold">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={handleNameChange}
                className="block w-full py-2 px-3 border border-yellow-300 rounded-md focus:outline-none focus:border-yellow-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block font-bold">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="block w-full py-2 px-3 border border-yellow-300 rounded-md focus:outline-none focus:border-yellow-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={handleEmailChange}
                className="block w-full py-2 px-3 border border-yellow-300 rounded-md focus:outline-none focus:border-yellow-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="query" className="block font-bold">Query</label>
              <textarea
                id="query"
                name="query"
                placeholder="Enter your query"
                required
                value={query}
                onChange={handleQueryChange}
                className="block w-full py-2 px-3 border border-yellow-300 rounded-md focus:outline-none focus:border-yellow-500 bg-white"
              />
            </div>
            <button
              className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
        <div>
          <div>
          <h1>Email: <strong>team@charandhul.com</strong></h1>
<h1>Whatsapp number: <strong>+91 7004608819</strong></h1>
<h1>Phone number: <strong>+91 9589474995</strong></h1>
<h1>Address: <strong>Plumeria Garden Estate, Omicron 3, Greater Noida, UP, 201310</strong></h1>




          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.292865213658!2d77.54263470575987!3d28.47734161199405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceaa92333595f%3A0xac0ef2156605ce24!2sOmicron%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1719587767733!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>

    </>
  );
};

export default Support;
