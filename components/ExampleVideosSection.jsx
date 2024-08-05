"use client";

import React from "react";
import Link from "next/link";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const  ExampleVideos = () => {
  return (
    <div className="flex w-full items-center flex-col py-4 px-[200px] font-poppins bg-[#FDFBF7]">
    <div className="w-full flex gap-4 flex-col py-16 items-center">
      <p className="text-[40px] font-extrabold">
        Example <span className="text-primary-400">Videos </span>
      </p>
      <p class="text-xl">Check Out Some of Our Examples</p>
    </div>
      <Tabs className=""   aria-label="Options" 
         color="secondary"
        // variant="underlined"
        classNames={{
          
          tabList: "gap-16 justify-center w-full bg-[#FDFBF7]",
          tab: "max-w-fit px-0 h-12 text-[#555555]",
          tabContent: "text-lg font-poppins p-4 group-data-[selected=true]:text-white",
          
        }}>
        <Tab  className="" key="Classic Examples" title="Classic Examples">
        <div class="py-10 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="/assets/images/video_two.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="/assets/images/video_one.png"
              alt=""
              srcset=""
            />

            <img
              class="rounded-md"
              src="/assets/images/video_three.png"
              alt=""
              srcset=""
            />
          </div> 
        </Tab>
        <Tab key="TikTok Ad Examples" title="TikTok Ad Examples">
        <div class="m-0 py-10 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
          </div>
        </Tab>
        <Tab key="Vertical Ad Examples" title="Vertical Ad Examples">
        <div class="m-0 py-10 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
          </div>
        </Tab>
        <Tab key="User Generated Ad Examples" title="User Generated Ad Examples">
        <div class="m-0 py-10 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
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
}

export default ExampleVideos;
