"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../public/assets/css/pricing_plan.module.css";
import { Accordion, AccordionItem } from "@nextui-org/react";

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1, 2, 3];
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <div className="py-24 space-y-10 px-[30%] font-poppins bg-[#FDFBF7]">
        <div className="w-full flex gap-4 flex-col  items-center">
          <p className="text-[40px] font-extrabold">
            <span className="text-primary-400">FAQ</span>
          </p>
        </div>
        <div
          onMouseLeave={() => setActiveCard(2)}
          className={`grid grid-cols-1 place-content-center font-poppins gap-2  influencer-card`}
        >
          {numbers.map((number) => (
            <Accordion>
              <AccordionItem
                key="1"
                className="text-black font-semibold border-b-[1px] border-gray-200"
                aria-label="What is the process?"
                title="What is the process?"
                indicator={
                  <Icon
                    className="text-black"
                    icon="teenyicons:left-solid"
                  ></Icon>
                }
              >
                <p className="text-base font-normal">{defaultContent}</p>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
