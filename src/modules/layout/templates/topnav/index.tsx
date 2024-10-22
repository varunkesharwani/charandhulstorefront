"use client"
import React from "react"

export const TopHeader: React.FC = () => {
  return (
    <div className="w-full overflow-hidden text-white bg-[#023047f8] h-5">
      <div className="relative w-full h-full overflow-hidden whitespace-nowrap">
        <div className="flex h-full items-center animate-scroll">
          {[
            "Free Shipping",
            "Pure Copper Utensils",
            "New Arrivals: Check Out the Latest Collection",
            "Limited Time Offer: upto 25% Off on All Orders",
            "Sign in and Get Exclusive Deals",
            "Free Shipping",
            "Pure Copper Utensils",
            "New Arrivals: Check Out the Latest Collection",
            // "Limited Time Offer: 10% Off on All Orders",
            "Subscribe Now and Get Exclusive Deals"
          ].map((text, index) => (
            <span key={index} className="inline-flex items-center px-2 pr-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-sm font-cabin">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopHeader