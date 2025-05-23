import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Homepage/Hero";
import PicksSection from "@/components/Homepage/PicksSection";
import FilterSection from "@/components/Homepage/FilterSection";
import FeaturedSection from "@/components/Homepage/FeaturedSection";
import PostsSection from "@/components/Homepage/PostsSection";
import EnjoyedSection from "@/components/Homepage/EnjoyedSection";
import ReadMoreSection from "@/components/Homepage/ReadMoreSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PicksSection />
      <FilterSection />
      <FeaturedSection />
      <PostsSection />
      <EnjoyedSection />
      <ReadMoreSection />
      <Footer />
    </>
  );
}
