import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/svg/Img1.png";
import img2 from "../../assets/images/svg/Img2.png";
import filterImg2 from "../../assets/images/svg/blog-img.png";

const CommunityChoice = () => {
  return (
    <div>
      <Container>
        <h4 className=" fs_30 fw-bold text-center mb-0">Community Choice</h4>
        <Row className="mt-2">
          <Col lg={12}>
            <Row>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={img1}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={img2}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={img2}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={filterImg2}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={img1}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="mt-3">
                <Row className=" align-items-center">
                  <Col md={5}>
                    <Image
                      src={filterImg2}
                      alt="filterImg"
                      className="rounded-2 w-100 mt-2"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={7} className="mt-3 mt-md-0">
                    <div className="">
                      <h4 className=" fs_16 fw-semibold mb-0">
                        Understanding Minimalist Design Design
                      </h4>
                      <p className=" fs_14 mt-2 ff fw-normal clr_gray mb-0">
                        Minimalist design is all about simplicity, clarity, and
                        purpose. In this blog, we explore how to apply
                        minimalist principles to UI/UX...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p className=" fs_14 mt-4 ff fw-normal clr_gray mb-0 text-end">
              See more..
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommunityChoice;
