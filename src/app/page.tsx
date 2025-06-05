import Hero from "@/components/Homepage/Hero";
import PicksSection from "@/components/Homepage/PicksSection";
import FilterSection from "@/components/Homepage/FilterSection";
import FeaturedSection from "@/components/Homepage/FeaturedSection";
import PostsSection from "@/components/Homepage/PostsSection";
import EnjoyedSection from "@/components/Homepage/EnjoyedSection";
import ReadMoreSection from "@/components/Homepage/ReadMoreSection";
import Footer from "./Footer";
import { getWebBlogs } from "@/services/Blogs.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useState } from "react";

// ✅ Utility function to fetch blog data
async function fetchBlogs() {
  try {
    const res: any = await getWebBlogs();
    // console.log("Fetched Blog Data:", res?.data.data);
    return res?.data || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ✅ Optional: Dynamic metadata generation
// Uncomment if you're using metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const blog = await fetchBlogs();
//   if (!blog) return {};
//
//   return {
//     title: blog.metaTitle || blog.title || "Home",
//     description: blog.metaDescription || "",
//     keywords: blog.metaKeywords || "",
//     alternates: {
//       canonical: blog.canonicalUrl || `https://jparse.com`,
//     },
//     robots: "index, follow",
//   };
// }

export default async function HomePage() {
  const blog: any = await fetchBlogs();

  if (!blog) return notFound();

  console.log(blog.data?.data);
  return (
    <>
      <Hero />
      <PicksSection picks={blog.data?.todayPicks || []} />
      <FilterSection
        popularPosts={blog.data?.popularPosts || []}
        data={blog.data || []}
        // onCategorySelect={(id) => console.log("Selected Category ID:", id)}
      />
      <FeaturedSection />
      <PostsSection
        popularPosts={blog.data?.popularPosts || []}
        data={blog.data || []}
      />
      <EnjoyedSection />
      <ReadMoreSection />
      <Footer />
    </>
  );
}
