// import Image from "next/image";
import  HeroSection from "../components/Hero-section";
import  InfluencersSection from "../components/Influencer-section";
import  NavBar from "../components/Nav-bar";
import  ProcessSteps from "../components/Process-steps";
import  ExampleVideos from "../components/ExampleVideosSection";
import  VideoSection from "../components/Video_section";
import  PricingPlan from "../components/pricing_plan";
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
        className="absolute top-[40%] left-[100px]"
        src="/assets/images/circle.svg"
        alt=""
        
      />
      <img
        className="absolute top-[110px] left-[15%]"
        src="/assets/images/cracked_circle.svg"
        alt=""
        
      />
      <img
        className="absolute top-[150px] left-[40%] w-[60px]"
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
    {/* <ViralVideos /> */}
  </div>
  );
}
