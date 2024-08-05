"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const PricingPackage = () => {
  const [activeCard, setActiveCard] = useState(2);
  const numbers = [1,2,3,4]
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
        className={`flex p-10 gap-4 justify-center font-poppins py-10 items-center influencer-card`}

      >
         
   

     {
      numbers.map(number => 
        <div
          
        onMouseOver={() => setActiveCard(number)}
        className={`rounded-md  border-2 bg-white text-[#515151] shadow-md relative flex justify-center gap-4 flex-col items-center p-8 px-16 ${
          activeCard === number
            ? 'border-primary-400  shadow-xl'
            : 'border-[#9c9c9c86]'
        }`}
      >
        <h4 className={`text-xl absolute -top-4 left-[40%] px-4 bg-white  border-2 rounded-md ${ activeCard == number ? 'border-primary-400' : 'border-gray-200'}`}>Basic</h4>
        <img src="/assets/images/questionnaire.png"></img>
        <h2 className={ `text-[38px] font-extrabold  ${activeCard === number ? 'text-primary-400' : ''}`}>Br 9,999</h2>
        <h4 className="text-xl">Per Month</h4>

        <div>
          <ul className="text-lg flex flex-col gap-2">
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
              className={`font-bold text-white px-16 py-4 rounded-full font-poppins ${
                activeCard == number
                  ? 'bg-primary-400'
                  : 'bg-black '
              }`}
            >
              Get Started
            </div>
          </Link>
        </div>
      </div>
      )
     }

        

      

      
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
