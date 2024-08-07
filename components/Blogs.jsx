"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1, 2, 3];

  return (
    <div>
      <div className="space-y-10 px-[300px] lg:px-[80px] font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="text-[40px] font-extrabold">
            Read Our <span className="text-primary-400">Blog</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid grid-cols-3 font-poppins gap-10  influencer-card`}
        >
          {numbers.map((number) => (
            <div className="space-y-4 border-[1px] overflow-hidden rounded-md pb-4 font-poppins border-gray-200 ">
              <img
                className="object-cover w-full"
                src="/assets/images/blogs.png"
                alt=""
              />

              <p className="px-4">
                We’ll help your products sell with our proven direct response
                video creatives with our proven direct response video creatives
                with our proven direct response video creatives
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
