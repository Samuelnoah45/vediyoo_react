import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const VideoSection = () => {
  return (
    <div className="flex flex-row-reverse px-[100px] bg-[#FDFBF7] py-24 items-center justify-center gap-x-10 h-[85%]">
      <div className="w-full flex flex-col items-center space-y-10">
        <p className="text-black text-[40px] font-poppins mt-4 font-semibold leading-normal">
          If you’re ready to increase sales and promote your company, then this
          is for you!
        </p>

        <div className="flex w-full gap-10">
          <div className="space-y-2">
            <p className="text-xl w-[300px]">
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
          <div className="w-[1px] bg-[#707070]"></div>
          <div className="space-y-2">
            <p className="text-xl w-[300px]">
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
        <div className="flex mt-8 mr-24">
          <Link href="/about">
            <div className="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins">
              Get Started
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-[80%] flex justify-center pt-16">
        <div>
          <Image
            src="/assets/images/mock_video.png"
            alt="mock video"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
