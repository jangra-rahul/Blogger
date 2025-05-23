import CustomNavbar from "@/app/CustomNavbar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import HeroImage from "../../assets/images/png/img.png";

const Hero = () => {
  return (
    <>
      {/* NAVBAR */}
      <CustomNavbar />

      {/* HERO SECTION */}
      <div className="w-100 bg-black">
        <Row className="g-0 align-items-center">
          {/* LEFT SECTION */}
          <Col md={6} className="bg-black">
            {/* 👇 This container will align with Navbar's container */}
            <Container>
              <div className="py-5 ps-md-5 ms-md-5">
                <h1 className="text-white display-4 fw-normal mb-3">
                  Today’s Special
                </h1>
                <h4 className="text-white fw-bold fs-3 mb-3">
                  Fragmented Realities: <br />
                  Exploring the Intersection of Nature
                </h4>
                <p className="text-white fs-5 mb-0">
                  In a visually saturated world, minimalist monochrome art can
                  offer a rare moment of reflection. This striking digital
                  collage fuses stark landscapes, celestial forms, and
                  architectural elements into a dreamlike narrative.
                </p>
              </div>
            </Container>
          </Col>

          {/* RIGHT SECTION */}
          <Col md={6}>
            <div className="w-100 h-100">
              <Image
                src={HeroImage}
                alt="Hero"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
