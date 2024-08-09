"use client";

import React from "react";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ExampleVideos = () => {
  return (
    <div className="flex w-full items-center flex-col py-4 2xl:px-[200px] lg:px-[150px] font-poppins bg-[#FDFBF7]">
      <div className="w-full flex gap-4 flex-col py-16 items-center">
        <p className="text-[40px] font-extrabold">
          Example <span className="text-primary-400">Videos </span>
        </p>
        <p className="text-xl">Check Out Some of Our Examples</p>
      </div>
      <Tabs
        className=""
        aria-label="Options"
        color="secondary"
        // variant="underlined"
        classNames={{
          tabList: "lg:gap-16 flex     bg-lily-white-100",
          tab: "px-0 h-12 text-[#555555] flex flex-col",
          tabContent:
            "text-lg  font-poppins p-4 group-data-[selected=true]:text-white",
        }}
      >
        <Tab className="w-full" key="Classic Examples" title="Classic Examples">
          <div className="w-full lg:px-[50px] py-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className=""
            >
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_one.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_three.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab>
        <Tab
          className="w-full"
          key="TikTok Ad Examples"
          title="TikTok Ad Examples"
        >
          <div className="w-full px-[50px] py-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className=""
            >
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_one.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_three.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab>
        <Tab
          className="w-full"
          key="Vertical Ad Examples"
          title="Vertical Ad Examples"
        >
          <div className="w-full px-[50px] py-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className=""
            >
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_one.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_three.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab>
        <Tab
          className="w-full"
          key="User Generated Ad Examples"
          title="User Generated Ad Examples"
        >
          <div className="w-full px-[50px] py-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className=""
            >
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_one.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_three.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-md"
                  src="/assets/images/video_two.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab>
      </Tabs>
      <div className="flex mt-8">
        <Link
          href="/about"
          className="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default ExampleVideos;
