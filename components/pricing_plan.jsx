"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/pricing_plan.module.css";

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1, 2, 3, 4];
  return (
    <div>
      <div className="py-4 space-y-10 font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col py-10 items-center">
          <p className="text-xl w-[50%] text-center">
            Use Flair for free with your whole team. Upgrade to enable unlimited
            issues, enhanced security controls, and additional features.
          </p>
          <p className="text-[40px] font-extrabold">
            Pricing & <span className="text-primary-400">Package</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`flex p-10 gap-8 justify-center flex-wrap  font-poppins py-10 items-center influencer-card`}
        >
          {numbers.map((number) => (
            <div className="rounded-[12px]   relative shadow-md">
              <h4
                className={`text-xl absolute z-10 -top-4 left-[40%] px-4 bg-white  border-2 rounded-md ${
                  activeCard == number
                    ? "border-primary-400"
                    : "border-gray-200"
                }`}
              >
                Basic
              </h4>
              <div className={`button ${styles.button}`}>
                <div
                  onMouseOver={() => setActiveCard(number)}
                  className={`rounded-md  text-[#515151]   overflow-hidden relative flex justify-center gap-4  bg-black flex-col items-center p-4 px-16 `}
                >
                  <img src="/assets/images/questionnaire.png"></img>

                  <div>
                    <ul className="text-lg flex flex-col gap-2">
                      {[...Array(5)].map((_, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon className="text-base" icon="entypo:check" />7
                          short video (&lt;1 min)
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center py-2">
                    <Link href="/about">
                      <div
                        className={`font-bold text-white px-16 py-4 rounded-full font-poppins ${
                          activeCard == number ? "bg-primary-400" : "bg-black "
                        }`}
                      >
                        Get Started
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/about">
            <div className="font-bold bg-black text-white px-16 py-4 rounded-full font-poppins">
              Create Your Custom Package
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
