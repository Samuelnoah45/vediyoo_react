"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/pricing_plan.module.css";
import { Avatar } from "@nextui-org/react";

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="py-12 space-y-10 2xl:px-[300px] lg:px-[120px] px-4 font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="lg:text-[40px] text-[30px] font-extrabold text-primary-400">
            What Our Customer are <span className="text-black">Saying🏆</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid lg:grid-cols-3 font-poppins gap-10  influencer-card`}
        >
          {numbers.map((number) => (
            <div className="space-y-8 p-6  bg-[#E5F6FF] mx-auto rounded-md pb-4 font-poppins border-gray-200 ">
              <div className="flex gap-2 px-4 text-2xl justify-center text-[#FFA800]">
                <Icon className="" icon="material-symbols:star" />
                <Icon className="" icon="material-symbols:star" />
                <Icon className="" icon="material-symbols:star" />
                <Icon className="" icon="material-symbols:star" />
                <Icon className="" icon="material-symbols:star" />
              </div>
              <Icon
                className="text-black text-5xl mx-auto"
                icon="ooui:quotes-ltr"
              ></Icon>
              <p className="px-4 text-[#5A5A5A] ">
                We’ll help your products sell with our proven direct response
                video creatives with our proven direct response video creatives
                with our proven direct response video creatives
              </p>
              <div>
                <div className="flex gap-2 justify-center">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <div className="">
                    <p className="font-bold">Abel Mola</p>
                    <p className="text-sm">Adama, Ethiopia</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  gap-1 justify-center items-center">
                  <Icon className="text-3xl" icon="logos:facebook" />
                  <p className="font-bold">Abel Mola</p>
                  <p className="text-sm">Adama, Ethiopia</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/about"
            className="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
