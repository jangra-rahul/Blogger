import React from "react";
import CustomNavbar from "../CustomNavbar";
import SearchHero from "@/components/SearchPage/SearchHero";
import Footer from "../Footer";

const page = () => {
  return (
    <div>
      <CustomNavbar />
      <SearchHero />
      <Footer />
    </div>
  );
};

export default page;
