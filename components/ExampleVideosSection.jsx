"use client";

import React from "react";
import Link from "next/link";
// import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ExampleVideos = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Only access the window object on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="flex w-full items-center flex-col py-4 2xl:px-[200px] lg:px-[150px] px-4  font-poppins bg-[#FDFBF7]">
      <div className="w-full flex gap-4 flex-col lg:py-16 py-8 items-center">
        <p className="text-[40px] font-extrabold">
          Example <span className="text-primary-400">Videos </span>
        </p>
        <p className="text-xl">Check Out Some of Our Examples </p>
      </div>
      <div className="flex w-full flex-col">
        <TabGroup>
          <TabList
            className={
              "grid lg:grid-cols-4  lg:bg-lily-white-100  gap-2 font-poppins font-bold text-lg"
            }
          >
            <Tab className="data-[selected]:bg-primary-400 p-4 rounded-md data-[selected]:text-white  cursor-pointer">
              Classic Examples
            </Tab>
            <Tab className="data-[selected]:bg-primary-400 p-4 rounded-md data-[selected]:text-white  cursor-pointer">
              TikTok Ad Examples
            </Tab>
            <Tab className="data-[selected]:bg-primary-400 p-4 rounded-md data-[selected]:text-white  cursor-pointer">
              Vertical Ad Examples
            </Tab>
            <Tab className="data-[selected]:bg-primary-400 p-4 rounded-md data-[selected]:text-white  cursor-pointer">
              User Generated Ad Examples
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="w-full  py-10">
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
            </TabPanel>
            <TabPanel>
              <div className="w-full  py-10">
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
            </TabPanel>
            <TabPanel>
              <div className="w-full  py-10">
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
            </TabPanel>
            <TabPanel>
              <div className="w-full  py-10">
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
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
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
