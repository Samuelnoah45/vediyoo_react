"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/footer.module.css";
import Marquee from "react-fast-marquee";
const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 place-content-center  gap-4 lg:py-24 py-6 px-4 lg:gap-24 relative ">
      <div className={`${styles.container} relative`}>
        <div
          className={`absolute top-0 left-0 h-full z-50 xl:w-[400px] ${styles.fadeRight}`}
        ></div>
        <Marquee pauseOnHover={true}>
          <p className="lg:text-[60px] text-[45px] font-poppins font-extrabold">
            I can be a React component, multiple React components, or just some
            text.
          </p>
        </Marquee>
        <div
          className={`absolute top-0 right-0 h-full z-50 xl:w-[400px] ${styles.fadeLeft}`}
        ></div>
      </div>
      <div>
        <div className="font-poppins lg:w-[70%]  space-y-4">
          <p className="text-xl font-extrabold ">
            {" "}
            Get 20% off you next purchase
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus molestiae, consequuntur a quasi labore dolorem
            distinctio eos voluptatibus. Non, voluptas. Error a commodi porro
            repellendus dolorem dicta veritatis quaerat iusto!
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start py-4 gap-3">
            {" "}
            <input
              type="text"
              className="border-blue-200 border-2 p-2 rounded-lg"
              placeholder="Enter your email"
            />
            <button className="bg-primary-400  text-white p-2 px-4 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 justify-center xl:justify-start text-3xl">
            <Icon className="text-black" icon="ri:instagram-line"></Icon>
            <Icon className="text-black" icon="streamline:facebook-1"></Icon>
            <Icon className="text-black" icon="jam:pinterest"></Icon>
            <Icon className="text-black" icon="hugeicons:tiktok"></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
