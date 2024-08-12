import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const VideoSection = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-[100px] px-4 bg-[rgb(253,251,247)] lg:py-16   gap-x-10 lg:h-[85%]">
      <div className="w-full lg:h-[80%]  h-[225px]  flex justify-center">
        <div className="flex-shrink-0  w-full  flex justify-center">
          <div className="rounded-3xl   w-full">
            <iframe
              src="https://player.vimeo.com/video/919511515?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Dog -1"
              class="w-full overflow-hidden  h-full lg:rounded-3xl rounded-md"
            ></iframe>

            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center space-y-10">
        <p className="text-black 2xl:text-[40px] text-[26px] lg:text-[33px] lg:text-left  font-poppins mt-4 font-semibold leading-normal">
          If you’re ready to increase sales and promote your company, then this
          is for you!
        </p>

        <div className="flex w-full lg:gap-10 gap-2">
          <div className="space-y-2">
            <p className="lg:text-xl 2xl:w-[300px]">
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
          <div className="lg:w-[1px] w-0 bg-[#707070]"></div>
          <div className="space-y-2">
            <p className="lg:text-xl 2xl:w-[300px]">
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
        <div className="flex mt-8 lg:mr-24">
          <Link href="/about">
            <div className="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
