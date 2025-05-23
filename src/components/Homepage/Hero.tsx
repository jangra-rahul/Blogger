import CustomNavbar from "@/app/CustomNavbar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image"; // if you're using Next.js, otherwise use <img>
import HeroImage from "../../assets/images/png/img.png"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />

      <Container fluid className="px-0 flex-grow-1">
        <Row className="g-0">
          {" "}
          {/* Adjust for navbar height */}
          {/* LEFT: TEXT SECTION */}
          <Col
            md={6}
            className="bg-black ps-md-3 d-flex align-items-center justify-content-center"
          >
            {" "}
            <div className="p-5 ms-5">
              <h1 className="text-white fs_64 mb-0  display-4 fw-normal">
                Today’s Special
              </h1>
              <h4 className="text-white fw-bold fs_32 mb-0 mt-4">
                Fragmented Realities: <br />
                Exploring the Intersection of Nature
              </h4>
              <p className="text-white fs_18 fw-normal mb-0 mt-2">
                In a visually saturated world, minimalist monochrome art can
                offer a rare moment of reflection. This striking digital collage
                fuses stark landscapes, celestial forms, and architectural
                elements into a dreamlike narrative.
              </p>
            </div>
          </Col>
          {/* RIGHT: IMAGE SECTION */}
          <Col md={6}>
            <div className="h-100 w-100">
              {/* Use your own image file here */}
              <Image src={HeroImage} alt="Hero" className=" h-100  w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
