import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import style from "../public/assets/css/Hero.module.css";

const HeroSection = () => {
  return (
    <div
      className={`flex  lg:flex-row flex-col-reverse py-4 2xl:px-[200px] lg:px-[80px] px-[16px] items-center justify-center gap-x-10 lg:h-[85%]  h-auto ${style.bgImage}`}
    >
      <div className="w-full space-y-8">
        <p className="text-black 2xl:text-[65px] lg:text-[56px] text-[40px] font-poppins mt-4 font-extrabold leading-normal">
          Turn Videos Into Millions With Our Editing Magic
        </p>
        <p className="text-xl">
          We’ll help your products sell with our proven direct response video
          creatives
        </p>
        <div className="flex mt-8">
          <Link
            href="/about"
            className="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins"
          >
            Hire Us!
          </Link>
        </div>
        <div className="h-[2px] w-full opacity-40 bg-[#707070]"></div>
        <div className="flex gap-4 flex-row">
          <div className="space-y-2">
            <p className="lg:text-xl text-base lg:w-[300px]">
              The #1st Video Service For Your E-commerce
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  className="text-2xl text-[#E56A36]"
                  icon="material-symbols:star"
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="lg:text-xl lg:w-[300px]">
              Trusted by 4,500+ E-commerce brands
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  className="text-2xl text-[#E56A36]"
                  icon="material-symbols:star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80%] flex justify-center lg:pt-16">
        <div>
          <img src="/assets/images/mock_video.png" alt="Mock Video" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
