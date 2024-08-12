import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const VideoSection = () => {
  return (
    <div className="grid lg:grid-cols-2   lg:px-[100px] px-4 bg-[rgb(253,251,247)] lg:py-16 place-content-center   gap-x-10 lg:h-[85%]">
      <div className="w-full lg:h-[100%]  h-[225px]   flex justify-center">
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
      <div className="w-full flex flex-col  lg:space-y-20 space-y-4">
        <p className="text-black t 2xl:text-[50px] text-[26px] lg:text-[33px] lg:text-left  font-poppins mt-4 font-semibold leading-normal">
          If you’re ready to increase sales and promote your company, then this
          is for you!
        </p>

        <div className="flex">
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
