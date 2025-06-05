// import React, { useState } from "react";
// import CustomNavbar from "../CustomNavbar";
// import SearchHero from "@/components/SearchPage/SearchHero";
// import Footer from "../Footer";
// import SearchPosts from "@/components/SearchPage/SearchPosts";
// import { fetchGlobalSearchResults } from "@/services/Blogs.service";

// async function fetchGlobalSearch() {
//   try {
//     const res: any = await fetchGlobalSearchResults("AI");
//     // console.log("Fetched Blog Data:", res?.data.data);
//     return res?.data || null;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// export default async function page() {
//   const searchData: any = await fetchGlobalSearch();

//   const handleSearchChange = (value: string) => {
//     console.log("Search value:", value);
//   };

//   console.log("searchData--------", searchData);
//   return (
//     <div>
//       {/* <CustomNavbar /> */}
//       {/* <SearchHero /> */}
//       <SearchPosts
//         searchdata={searchData}
//         onSearchChange={handleSearchChange}
//       />
//       <Footer />
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import CustomNavbar from "../CustomNavbar";
// import SearchHero from "@/components/SearchPage/SearchHero";
import Footer from "../Footer";
import SearchPosts from "@/components/SearchPage/SearchPosts";
import { fetchGlobalSearchResults } from "@/services/Blogs.service";

export default function Page() {
  const [searchData, setSearchData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("AI");
  const [sortBy, setSortBy] = useState<string>("Newest first"); // 👈 Track sort option

  const fetchSearch = async (query: string, sort?: string) => {
    try {
      const res: any = await fetchGlobalSearchResults(query, sort);
      setSearchData(res?.data || null);
    } catch (error) {
      console.error("Fetch error:", error);
      setSearchData(null);
    }
  };

  useEffect(() => {
    fetchSearch(searchQuery, sortBy);
  }, [searchQuery, sortBy]);

  const handleSortChange = (sort: string) => {
    console.log("Selected Sort Param:", sort);
    setSortBy(sort);
  };

  const handleSearchChange = (value: string) => {
    console.log("Search value:", value);
    setSearchQuery(value); // This triggers useEffect to re-fetch data
  };

  return (
    <div>
      {/* <CustomNavbar /> */}
      {/* <SearchHero /> */}
      <SearchPosts
        searchdata={searchData}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
      />
      <Footer />
    </div>
  );
}
