import { Features } from "@/components/FeatureSection";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <>
      {/* <h1>Har Har Mahadev</h1> */}
      <Navbar />
      <HeroSection/>
      <Features/>
      <RecentPosts/>
    </>
  );
}
