// components/InfluencersSection.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import sampleOne from "../public/assets/images/sample_one.png";
import sampleTwo from "../public/assets/images/sample_two.png";
import sampleThree from "../public/assets/images/sample_three.png";
import sampleFour from "../public/assets/images/sample_four.png";
import style from "../public/assets/css/InfluencersSection.module.css";

const InfluencersSection = () => {
  const influencers = [
    {
      name: "Samuel Noah",
      location: "Addis Ababa",
      igFollowers: "30k",
      tiktokFollowers: "20k",
      imgSrc: sampleOne,
    },
    {
      name: "Samuel Noah",
      location: "Addis Ababa",
      igFollowers: "30k",
      tiktokFollowers: "20k",
      imgSrc: sampleTwo,
    },
    {
      name: "Samuel Noah",
      location: "Addis Ababa",
      igFollowers: "30k",
      tiktokFollowers: "20k",
      imgSrc: sampleThree,
    },
    {
      name: "Samuel Noah",
      location: "Addis Ababa",
      igFollowers: "30k",
      tiktokFollowers: "20k",
      imgSrc: sampleFour,
    },
  ];
  const [ActiveCard, setActiveCard] = useState(influencers.length - 1);

  return (
    <div className="py-24 font-poppins bg-[#FDFBF7]">
      <div className="w-full flex gap-2 flex-col items-center">
        <p className="text-[40px] font-extrabold">
          Hire Our Brand <span className="text-primary-400">Influencers</span>
        </p>
        <p className="text-xl">
          We’ll help your products sell with our top influencers
        </p>
      </div>
      <div className={`flex justify-center py-10 gap-4 influencer-card `}>
        {influencers.map((influencer, index) => (
          <div
            onMouseOver={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(influencers.length)}
            key={index}
            className="rounded-md overflow-hidden relative w-[320px] h-[410px]"
          >
            <Image
              className="object-cover w-full h-full"
              src={influencer.imgSrc}
              alt={influencer.name}
            />
            <div
              className={`absolute overflow-hidden bottom-0 w-full p-4  text-white ${
                style.fadeBg
              } ${ActiveCard == index ? "h-[115px]" : "h-[53px]"}`}
            >
              <div className="flex items-center gap-[10px]">
                <p className="text-[18px] font-extrabold">{influencer.name}</p>
                <Icon
                  className="text-primary-400 text-xl"
                  icon="material-symbols:verified"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <Icon
                    className="text-white text-xl"
                    icon="octicon:location-24"
                  />
                  <p className="text-[16px]">{influencer.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    className="text-white text-xl"
                    icon="hugeicons:instagram"
                  />
                  <p className="text-[16px]">
                    {influencer.igFollowers} followers
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    className="text-white text-xl"
                    icon="ic:outline-tiktok"
                  />
                  <p className="text-[16px]">
                    {influencer.tiktokFollowers} followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-8 justify-center">
        <Link href="/about">
          <div className="bg-primary-400 gap-2 flex items-center font-bold text-lg text-white px-8 py-4 rounded-full font-poppins">
            <p>Load More</p>
            <Icon
              className="text-white rotate-45 text-2xl"
              icon="mingcute:arrow-up-line"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfluencersSection;
