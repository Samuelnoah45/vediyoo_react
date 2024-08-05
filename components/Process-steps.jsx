// components/ProcessSteps.jsx

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../public/assets/css/Process.module.css'; // Import the CSS module

const ProcessSteps = () => {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <div className="pb-24 space-y-10 font-poppins bg-[#FDFBF7]">
      <div className="w-full flex gap-4 flex-col items-center">
        <p className="text-[40px] font-extrabold">
          How Does It <span className="text-primary-400">Work?</span>
        </p>
        <p className="text-xl">Check Out Our Simple 3-Step Process</p>
      </div>
      <div
        onMouseLeave={() => setActiveCard(2)}
        className="flex h-[400px] justify-center py-10 gap-4 items-center"
      >
        <div
          onMouseOver={() => setActiveCard(1)}
          className={`rounded-md overflow-hidden relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px] ${activeCard === 1 ? 'bg-primary-400 h-[400px]' : 'bg-white h-[350px]'} ${styles.processCard}`}
        >
          <Image
            className="object-cover w-[60%] mx-auto"
            src="/assets/images/ads_design.png"
            alt="Choose Your Video Ad"
            width={320}
            height={200}
          />
          <div className={`text-center ${activeCard === 1 ? 'text-white' : ''} space-y-6`}>
            <p className="font-black text-xl">Choose Your Video Ad</p>
            <p className="text-base">
              We’ll help your products sell with our proven direct response video creatives
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setActiveCard(2)}
          className={`rounded-md overflow-hidden relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px] ${activeCard === 2 ? 'bg-primary-400 h-[400px]' : 'bg-white h-[350px]'} ${styles.processCard}`}
        >
          <Image
            className="object-cover w-[60%] mx-auto"
            src="/assets/images/questionnaire.png"
            alt="Answer Questionnaire"
            width={320}
            height={200}
          />
          <div className={`text-center ${activeCard === 2 ? 'text-white' : ''} space-y-6`}>
            <p className="font-black text-xl">Answer Questionnaire</p>
            <p className="text-base">
              We’ll help your products sell with our proven direct response video creatives
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setActiveCard(3)}
          className={`rounded-md overflow-hidden relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px] ${activeCard === 3 ? 'bg-primary-400 h-[400px]' : 'bg-white h-[350px]'} ${styles.processCard}`}
        >
          <Image
            className="object-cover w-[60%] mx-auto"
            src="/assets/images/video.png"
            alt="Watch Your Video"
            width={320}
            height={200}
          />
          <div className={`text-center ${activeCard === 3 ? 'text-white' : ''} space-y-6`}>
            <p className="font-black text-xl">Watch Your Video</p>
            <p className="text-base">
              We’ll help your products sell with our proven direct response video creatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
