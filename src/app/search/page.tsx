import React from "react";
import CustomNavbar from "../CustomNavbar";
import SearchHero from "@/components/SearchPage/SearchHero";
import Footer from "../Footer";
import SearchPosts from "@/components/SearchPage/SearchPosts";

const page = () => {
  return (
    <div>
      {/* <CustomNavbar /> */}
      {/* <SearchHero /> */}
      <SearchPosts />
      <Footer />
    </div>
  );
};

export default page;
