"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import siderImg1 from "../../assets/images/svg/sliderImg.png";
import siderImg2 from "../../assets/images/svg/sliderImg1.png";
import { Container } from "react-bootstrap";
import Image from "next/image";

const featuredPosts = [
  {
    id: 1,
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
    image: siderImg1,
  },
  {
    id: 2,
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
    image: siderImg2,
  },
  {
    id: 3,
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
    image: siderImg1,
  },
  {
    id: 4,
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
    image: siderImg2,
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // gives a better visual effect on the right
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};
const ReadMoreSection = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#F5F5F5" }}>
      <Container>
        <h4 className="mb-4 fs_32 fw-bold">Read More</h4>
      </Container>

      <div
        className="custom-slider-wrapper"
        style={{
          marginLeft: "auto",
          marginRight: "0",
          paddingLeft: "calc((100vw - 1320px) / 2)", // For container alignment (1140px = lg container)
          paddingRight: "0",
          overflow: "hidden",
          maxWidth: "100vw",
        }}
      >
        <Slider {...sliderSettings}>
          {featuredPosts.map((post) => (
            <div key={post.id} className="px-2 ">
              <div className=" p-1 rounded  h-100">
                <Image
                  src={post.image}
                  alt="siderImg1"
                  className="img-fluid rounded mb-3"
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <h6 className="fw-bold fs_18 ff mb-2">{post.title}</h6>
                <p className="text-muted fs_14 small">{post.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReadMoreSection;
