"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/pricing_plan.module.css";

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1, 2, 3];
  return (
    <div>
      <div className="lg:py-16 py-4 space-y-10 2xl:px-[300px] lg:px-[150px] px-4 font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="lg:text-[40px] text-[30px] font-extrabold">
            View Some of Our Viral{" "}
            <span className="text-primary-400">Examples</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid lg:grid-cols-3  font-poppins gap-10  influencer-card`}
        >
          {numbers.map((number) => (
            <div className="space-y-4 overflow-hidden border-[1px] rounded-md pb-4 font-poppins border-gray-200 ">
              <img
                className="object-cover w-full"
                src="/assets/images/video_two.png"
                alt=""
              />
              <div className="flex gap-6">
                <div className="flex flex-col px-4  gap-2 justify-center">
                  <Icon
                    className="text-[25px] text-primary-400"
                    icon="ph:eye-bold"
                  />
                  <p className="text-[15px] font-bold">10k+ Views</p>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <Icon
                    className="text-[25px] text-primary-400"
                    icon="ic:baseline-message"
                  />
                  <p className="text-[15px] font-bold">10k+ Views</p>
                </div>
                <div className="flex flex-col gep-4 justify-center">
                  <Icon
                    className="text-[30px] text-primary-400"
                    icon="mdi:heart-outline"
                  />
                  <p className="text-[15px] font-bold">10k+ Views</p>
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <Icon
                  className="text-2xl text-primary-400"
                  icon="material-symbols:star"
                />
                <Icon
                  className="text-2xl text-primary-400"
                  icon="material-symbols:star"
                />
                <Icon
                  className="text-2xl text-primary-400"
                  icon="material-symbols:star"
                />
                <Icon
                  className="text-2xl text-primary-400"
                  icon="material-symbols:star"
                />
                <Icon
                  className="text-2xl text-primary-400"
                  icon="material-symbols:star"
                />
              </div>
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
