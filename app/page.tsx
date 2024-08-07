// import Image from "next/image";
import HeroSection from "../components/Hero-section";
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
export default function Home() {
  return (
    <div className="">
      <div className="h-screen bgImage relative">
        <img
          className="absolute bottom-0 opacity-10"
          src="/assets/images/left_shape.svg"
          alt=""
        />
        <img
          className="absolute 2xl:top-[40%] top-[52%] left-[100px] w-[40px] 2xl:w-auto"
          src="/assets/images/circle.svg"
          alt=""
        />
        <img
          className="absolute 2xl:top-[110px] left-[15%] top-[80px] w-[60px] 2xl:w-auto"
          src="/assets/images/cracked_circle.svg"
          alt=""
        />
        <img
          className="absolute top-[150px] 2xl:left-[40%] left-[45%] 2xl:w-[60px] w-[50px]"
          src="/assets/images/radio_shape.svg"
          alt=""
        />
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
    </div>
  );
}
