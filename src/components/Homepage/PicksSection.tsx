"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image"; // if you're using Next.js
import Image1 from "../../assets/images/png/pick1.png"; // Adjust the path as necessary
import Image2 from "../../assets/images/png/pick2.png"; // Adjust the path as necessary
import Image3 from "../../assets/images/png/pick3.png"; // Adjust the path as necessary
import Image4 from "../../assets/images/png/pick4.png"; // Adjust the path as necessary

// Sample data (you can replace with API or dynamic content)
const picks = [
  {
    id: 1,
    image: Image1,
    author: "Arav Patel",
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
  },
  {
    id: 2,
    image: Image2,
    author: "Arav Patel",
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
  },
  {
    id: 3,
    image: Image3,
    author: "Arav Patel",
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
  },
  {
    id: 4,
    image: Image4,
    author: "Arav Patel",
    title: "Understanding Minimalist Design",
    description:
      "Minimalist design is all about simplicity, clarity, and purpose. In this blog, we explore how to apply minimalist principles to UI/UX...",
  },
];

const PicksSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4">Today’s Picks</h3>
        <Row>
          {picks.map((pick) => (
            <Col key={pick.id} md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0">
                <div style={{ height: "200px", position: "relative" }}>
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <Card.Body className="px-0">
                  <p className="text-muted fs_14 fw-normal small mb-1">
                    By {pick.author}
                  </p>
                  <Card.Title className=" fw-bold fs_18">
                    {pick.title}
                  </Card.Title>
                  <Card.Text className="text-muted fs_14 fw-normal ">
                    {pick.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PicksSection;
