"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/review.module.css";
import { Avatar } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
const PricingPackage = () => {
  const items = [
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs",
      title: "Co-founder, Apple Inc.",
    },
    {
      quote:
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
      name: "Winston Churchill",
      title: "Former Prime Minister, United Kingdom",
    },
    {
      quote: "It always seems impossible until it's done.",
      name: "Nelson Mandela",
      title: "Former President, South Africa",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      name: "Wayne Gretzky",
      title: "Professional Ice Hockey Player",
    },
    {
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      name: "Martin Luther King Jr.",
      title: "Civil Rights Leader",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      name: "Nelson Mandela",
      title: "Former President, South Africa",
    },
  ];

  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 h-full xl:w-[300px] z-20 ${styles.fadeRight}`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full xl:w-[300px] z-20 ${styles.fadeLeft}`}
      ></div>
      <div className="py-12 space-y-10 2xl:px-[20px] lg:px-[120px] px-4 font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="lg:text-[40px] text-[30px] font-extrabold text-primary-400">
            What Our Customer are <span className="text-black">Saying🏆</span>
          </p>
        </div>
        <div className="w-full">
          {/* <Infinite className="w-full" items={items} /> */}
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid lg:grid-cols-1 font-poppins gap-10  influencer-card`}
        >
          <Marquee pauseOnHover gradient={false} speed={100}>
            {numbers.map((number) => (
              <div className="space-y-8 p-6  ml-10 w-[400px] bg-[#E5F6FF] mx-auto rounded-md pb-4 font-poppins border-gray-200 ">
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
                  video creatives with our proven direct response video
                  creatives with our proven direct response video creatives
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
          </Marquee>
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
