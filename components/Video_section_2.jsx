import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const VideoSection = () => {
  return (
    <div className="flex lg:flex-row-reverse flex-col-reverse 2xl:px-[100px] lg:px-[80px]  bg-[#FDFBF7] px-8 items-center justify-center gap-x-8 h-[85%]">
      <div className="w-full flex flex-col items-center space-y-10">
        <p className="text-black 2xl:text-[50px] lg:text-[35px] text-[25px]  font-poppins mt-4 font-semibold leading-normal">
          If you’re ready to increase sales and promote your company, then this
          is for you!
        </p>

        <div className="flex mt-8 lg:mr-24">
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
            src="/assets/images/video_2.png"
            alt="mock video"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
