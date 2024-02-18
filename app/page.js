import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/LandingPage/HeroSection";
import OffredSection from "./components/LandingPage/OffredSection";
import TopTutorsSec from "./components/LandingPage/TopTutorsSec";
import ReviewSec from "./components/LandingPage/ReviewSec";

export default function Home() {
  return (
    <main className="">
  <HeroSection/>
  <OffredSection/>
  <TopTutorsSec/>
  <ReviewSec/>
    </main>
  );
}
