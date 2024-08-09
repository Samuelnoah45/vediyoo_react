// import Image from "next/image";
import styles from "../public/assets/css/main.module.css";
import HeroSection from "../components/Hero-section";
import { Icon } from "@iconify/react";
import InfluencersSection from "../components/Influencer-section";
import NavBar from "../components/Nav-bar";
import ProcessSteps from "../components/Process-steps";
import ExampleVideos from "../components/ExampleVideosSection";
import VideoSection from "../components/Video_section";
import VideoSection2 from "../components/Video_section_2";
import PricingPlan from "../components/pricing_plan";
import ViralVideos from "../components/viral_videos";
import Reviews from "../components/reviews";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="">
      <div className="lg:h-screen bgImage relative">
        {/* <img
          className="absolute lg:block hidden bottom-0 opacity-10"
          src="/assets/images/left_shape.svg"
          alt=""
        /> */}
        <Icon
          className={`absolute lg:block hidden 2xl:top-[40%] top-[52%] left-[100px] 2xl:text-[60px] text-[50px] ${styles.gradientText}`}
          icon="fluent:radio-button-24-regular"
        ></Icon>
        <img
          className={`absolute lg:block hidden 2xl:top-[110px] left-[15%] top-[80px] w-[60px] 2xl:w-auto ${styles.rotation}`}
          src="/assets/images/cracked_circle.svg"
          alt=""
        />
        {/* <img src="/assets/images/radio_shape.svg" alt="" /> */}
        <Icon
          className={`absolute lg:block hidden top-[150px] 2xl:left-[40%] left-[45%] 2xl:text-[60px] text-[50px] ${styles.gradientText}`}
          icon="ph:radio-button-fill"
        ></Icon>
        <NavBar />
        <HeroSection />
      </div>
      <InfluencersSection />
      <ProcessSteps />

      <ExampleVideos />
      <VideoSection />
      <PricingPlan />
      <ViralVideos />
      <Reviews />
      <Blogs />
      <FAQ />
      <VideoSection2 />
      <Footer />
    </div>
  );
}
