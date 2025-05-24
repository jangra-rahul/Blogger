import BlogDetailHeroSection from "@/components/blogDetailsPage/BlogDetailHeroSection";
import React from "react";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer";
import EnjoyedSection from "@/components/Homepage/EnjoyedSection";
import ReadMoreSection from "@/components/Homepage/ReadMoreSection";
import CommunityChoice from "@/components/blogDetailsPage/CommunityChoice";

const page = () => {
  return (
    <div>
      <CustomNavbar />
      <BlogDetailHeroSection />
      <CommunityChoice />
      <EnjoyedSection />
      <ReadMoreSection />

      <Footer />
    </div>
  );
};

export default page;
