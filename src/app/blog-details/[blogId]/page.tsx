// import BlogDetailHeroSection from "@/components/blogDetailsPage/BlogDetailHeroSection";
// import React from "react";

// import EnjoyedSection from "@/components/Homepage/EnjoyedSection";
// import ReadMoreSection from "@/components/Homepage/ReadMoreSection";
// import CommunityChoice from "@/components/blogDetailsPage/CommunityChoice";
// import { fetchBlogDetail } from "@/services/Blogs.service";
// import CustomNavbar from "@/app/CustomNavbar";
// import Footer from "@/app/Footer";

// async function fetchBlogsDetails(slug: any) {
//   try {
//     const res: any = await fetchBlogDetail(slug);
//     console.log("Fetched Blog Details Data:", res?.data.data);
//     return res?.data || null;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// export default async function Page(slug: any) {
//   const blogDetail: any = await fetchBlogsDetails(slug);

//   console.log(blogDetail);
//   return (
//     <div>
//       <CustomNavbar />
//       <BlogDetailHeroSection />
//       <CommunityChoice />
//       <EnjoyedSection />
//       <ReadMoreSection />
//       <Footer />
//     </div>
//   );
// }

import BlogDetailHeroSection from "@/components/blogDetailsPage/BlogDetailHeroSection";
import React from "react";
import EnjoyedSection from "@/components/Homepage/EnjoyedSection";
import ReadMoreSection from "@/components/Homepage/ReadMoreSection";
import CommunityChoice from "@/components/blogDetailsPage/CommunityChoice";
import { fetchBlogDetail } from "@/services/Blogs.service";
import CustomNavbar from "@/app/CustomNavbar";
import Footer from "@/app/Footer";
import { Metadata } from "next";

// Server component with dynamic slug
type Blog = {
  title: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  id: number;
};

// Fetch single blog by slug
async function fetchBlog(id: number | string): Promise<Blog | null> {
  try {
    const blogDetail: any = await fetchBlogDetail(String(id));
    return blogDetail?.data || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogDetail: any = await fetchBlog(params.slug);
  const blog: any = blogDetail?.blog;

  if (!blog) return {};

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || "",
    keywords: blog.metaKeywords || "",
    alternates: {
      canonical: blog.canonicalUrl || `https://jparse.com`,
    },
    robots: "index, follow",
  };
}
export default async function Page({ params }: { params: { blogId: string } }) {
  const id = params.blogId;
  // const blogDetail: any = await fetchBlogDetail(id);
  const blogDetail: any = await fetchBlog(id);

  console.log("blogDetail:", blogDetail);

  return (
    <div>
      <CustomNavbar />
      <BlogDetailHeroSection
        blogDetail={blogDetail?.blog}
        popularpost={blogDetail?.popularOrTrending}
        latestpost={blogDetail?.latestOrRecent}
      />
      <CommunityChoice />
      <EnjoyedSection />
      <ReadMoreSection />
      <Footer />
    </div>
  );
}
