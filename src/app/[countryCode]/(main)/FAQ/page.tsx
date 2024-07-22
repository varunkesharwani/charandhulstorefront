


/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState } from "react"
import Accordion from "./accordion"

const faqs = [
  {
    title: "What materials are used in your products?",
    text: "Our products are made from high-quality brass and copper. We ensure that all our materials are safe, durable, and meet the highest standards of craftsmanship.",
    active: false,
  },
  {
    title: "What are the benefits of using brass and copper kitchenware?",
    text: "Brass and copper have numerous health benefits. Copper is known for its antimicrobial properties, which can help reduce bacteria in water and food. Brass utensils are also durable and provide a traditional aesthetic to your kitchen.",
    active: false,
  },
  {
    title: "How do I care for and clean my brass and copper items?",
    text: "To maintain the shine and longevity of your brass and copper kitchenware, wash them by hand using mild soap and water. Avoid using abrasive cleaners or dishwashers. Dry immediately with a soft cloth to prevent water spots. Occasionally, use a mixture of lemon juice and salt to polish and restore shine.",
    active: false,
  },
  {
    title: "Are your products handmade?",
    text: "Yes, all our products are handcrafted by skilled artisans, ensuring each piece is unique and of the highest quality.",
    active: true,
  },
  {
    title: "How can I place an order?",
    text: "To place an order, simply browse our online catalog, add the desired items to your cart, and proceed to checkout. Follow the instructions to complete your purchase securely.",
    active: false,
  },
  {
    title: "What payment methods do you accept?",
    text: "We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways.",
    active: false,
  },
  {
    title: "Do you offer international shipping?",
    text: "Yes, we offer international shipping. Shipping rates and delivery times vary based on the destination. Please refer to our Shipping Policy for more details.",
    active: false,
  },
  {
    title: "How long will it take to receive my order?",
    text: "Delivery times depend on your location and the shipping method selected. Generally, orders are processed within 2-3 business days, and standard shipping times apply thereafter.",
    active: false,
  },
  {
    title: "Can I track my order?",
    text: "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your order through our shipping partner’s website.",
    active: false,
  },
  {
    title: "What is your return policy?",
    text: "For information on our return policy, please check the Return Policy page on our website.",
    active: false,
  },
  {
    title: "How can I contact customer support?",
    text: "For any questions or concerns, please contact our customer support team at team@charandhul.com. We are available Monday through Friday, 9 AM to 6 PM (IST).",
    active: false,
  },
  {
    title: "Do you offer customization or bulk orders?",
    text: "Yes, we offer customization and bulk orders for certain products. Please contact us at team@charandhul.com with your requirements, and we will be happy to assist you.",
    active: false,
  },
  {
    title: "Are your products safe for cooking and storing food?",
    text: "Yes, our brass and copper products are safe for cooking and storing food. However, it is important to follow proper care and maintenance guidelines to ensure their longevity and safety.",
    active: false,
  },
  {
    title: "Can I change or cancel my order?",
    text: "If you need to change or cancel your order, please contact us as soon as possible at team@charandhul.com. We will do our best to accommodate your request before the order is processed and shipped.",
    active: false,
  },
]



const FAQ = () => {
  const [activedKey, setActivedKey] = useState<number>(-1)

  const setActive = (index: number) => {
    if (activedKey === index) {
      setActivedKey(-1)
    } else {
      setActivedKey(index)
    }
  }

  return (
    <div className="flex flex-col items-center mt-36 mb-40 max-sm:px-6 max-sm:mb-20">
      <h4 className="font-['Bebas_Neue'] text-4xl mb-6 text-center">
        Frequently Asked Questions
      </h4>
      <p className="text-lg mb-12 max-w-md text-center max-sm:px-10 max-sm:mb-6">
        These questions might not be on everyone's FAQ list, but we've got your
        back in case you were curious.
      </p>
      <div className="max-w-[80%] max-sm:max-w-none">
        {faqs.map((faq, index) => {
          const actived = activedKey === index
          return (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={actived}
              index={index}
              isOrder
              onChange={setActive}
            >
              {faq.text}
            </Accordion>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
