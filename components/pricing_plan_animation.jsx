"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from '../public/assets/css/pricing_plan.module.css';

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="py-24 space-y-10 font-poppins bg-[#FDFBF7]">
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
        className={`flex p-10 justify-center font-poppins py-10 items-center influencer-card ${
          activeCard !== 2 ? 'gap-4' : 'gap-0'
        } ${styles.cardMain}`}
      >
        <div
          id={styles.processCard}
          onMouseOver={() => setActiveCard(1)}
          className={`rounded-md overflow-clip relative flex justify-center gap-6 flex-col items-center p-14 ${
            activeCard === 1
              ? 'bg-primary-400 text-white z-50 scale-110 shadow-xl'
              : 'bg-white text-[#515151] shadow-md'
          }`}
        >
          <h4 className="text-xl">Basic</h4>
          <h2 className="text-[38px] font-extrabold">Br 9,999</h2>
          <h4 className="text-xl">Per Month</h4>

          <div>
            <ul className="text-lg flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="text-2xl" icon="material-symbols:check-box-outline" />
                  7 short video (&lt;1 min)
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <div
                className={`font-bold text- px-16 py-4 rounded-full font-poppins ${
                  activeCard !== 1
                    ? 'border-primary-400 border-2'
                    : 'bg-white text-[#515151]'
                }`}
              >
                Get Started
              </div>
            </Link>
          </div>
        </div>

        <div
          id="process-card"
          onMouseOver={() => setActiveCard(2)}
          className={`rounded-md overflow-clip relative flex gap-6 flex-col items-center p-14 justify-center ${
            activeCard === 2
              ? 'bg-primary-400 text-white z-50 scale-110 shadow-xl'
              : 'bg-white text-[#515151] shadow-md'
          }`}
        >
          <h4 className="text-xl">Premium</h4>
          <h2 className="text-[38px] font-extrabold">Br 19,999</h2>
          <h4 className="text-xl">Per Month</h4>

          <div>
            <ul className="text-lg flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="text-2xl" icon="material-symbols:check-box-outline" />
                  7 short video (&lt;1 min)
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <div
                className={`font-bold text- px-16 py-4 rounded-full font-poppins ${
                  activeCard !== 2
                    ? 'border-primary-400 border-2'
                    : 'bg-white text-[#515151]'
                }`}
              >
                Get Started
              </div>
            </Link>
          </div>
        </div>

        <div
          id="process-card"
          onMouseOver={() => setActiveCard(3)}
          className={`rounded-md overflow-clip relative flex gap-6 flex-col items-center p-14 justify-center ${
            activeCard === 3
              ? 'bg-primary-400 text-white z-50 shadow-xl scale-110'
              : 'bg-white text-[#515151] shadow-md'
          }`}
        >
          <h4 className="text-xl">Standard</h4>
          <h2 className="text-[38px] font-extrabold">Br 14,999</h2>
          <h4 className="text-xl">Per Month</h4>

          <div>
            <ul className="text-lg flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="text-2xl" icon="material-symbols:check-box-outline" />
                  7 short video (&lt;1 min)
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <div
                className={`font-bold text- px-16 py-4 rounded-full font-poppins ${
                  activeCard !== 3
                    ? 'border-primary-400 border-2'
                    : 'bg-white text-[#515151]'
                }`}
              >
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/about">
          <div className="font-bold bg-black text-white px-16 py-4 rounded-full font-poppins">
            Create Your Custom Package
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PricingPackage;
