import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/FeatureSection";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import RecentPosts from "@/components/RecentPosts";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* <h1>Har Har Mahadev</h1> */}
      <Navbar />
      <HeroSection />
      <Features />
      <RecentPosts />
      <Newsletter />
      <Testimonials/>
      <CallToAction/>
    </>
  );
}
