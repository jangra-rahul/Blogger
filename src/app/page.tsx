import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Homepage/Hero";
import PicksSection from "@/components/Homepage/PicksSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PicksSection />
    </>
  );
}
