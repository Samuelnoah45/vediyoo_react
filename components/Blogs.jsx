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
      <div className="space-y-10 2xl:px-[300px] lg:px-[150px] font-poppins px-4 bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="lg:text-[40px] text-[30px] font-extrabold">
            Read Our <span className="text-primary-400">Blog</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid lg:grid-cols-3 font-poppins gap-10  influencer-card`}
        >
          {numbers.map((number) => (
            <div className="space-y-4 border-[1px] overflow-hidden rounded-md pb-4 font-poppins border-gray-200 ">
              <img
                className="object-cover w-full"
                src="/assets/images/blogs.png"
                alt=""
              />
              <p className="px-4 font-extrabold text-xl underline">
                We’ll help your products sell with our proven direct response
                video creatives with
              </p>
              <p className="px-4">April 12 2024</p>
              <p className="px-4 leading-relaxed line-clamp-5">
                We’ll help your products sell with our proven direct response
                video creatives with our proven direct response video creatives
                with our proven direct response video creatives Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Facere saepe
                sapiente rerum non aliquam, est molestias blanditiis mollitia
                ipsam architecto, consectetur ex officia vitae ipsum sunt earum
                consequatur repudiandae culpa!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
