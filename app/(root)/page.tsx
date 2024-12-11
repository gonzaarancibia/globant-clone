import { NextPage } from "next";
import AIStudiosSection from "@/components/AIStudiosSection/";
import HeroSection from "@/components/Hero";

const Home: NextPage = ({}) => {
  return (
    <main id="main" className="min-h-screen bg-white">
      <HeroSection />
      <AIStudiosSection />
    </main>
  );
};

export default Home;
