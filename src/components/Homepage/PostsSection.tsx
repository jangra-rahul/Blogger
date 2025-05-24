"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg2 from "../../assets/images/svg/blog-img.png";
import img1 from "../../assets/images/svg/Img1.png";
import img2 from "../../assets/images/svg/Img2.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
import profileImg from "../../assets/images/svg/profileImg.svg";

import Image from "next/image";
import Link from "next/link";
const PostsSection = () => {
  return (
    <div>
      {" "}
      <div className="py-4">
        <Container>
          {/* Tabs */}

          {/* Blog content and sidebar */}
          <Row>
            <Col xl={9} lg={9} className="pe-lg-5 ">
              {/* First blog */}
              <Link className=" tdn" href="/blog-details">
                <Card className="mb-4  w-100 border-0">
                  <Card.Body className="w-100 px-0">
                    <div className="row  align-items-center">
                      <div className="col-md-8">
                        <div className="d-flex gap-2 align-items-center mb-2">
                          <Image
                            src={profileImg}
                            alt="profileImg"
                            className="me-2"
                          />
                          <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                            By Arav Patel &nbsp;
                            <span className="dot"></span> &nbsp; May 07
                          </small>
                        </div>
                        <Card.Title className="fs_32 fw-bold">
                          The 2008 Pepsi Logo Redesign
                        </Card.Title>
                        <Card.Text className="fs_14 ff fw-normal clr_gray mb-0">
                          In the world of branding, few logos are as iconic—or
                          as frequently debated—as Pepsi’s...
                        </Card.Text>
                        <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                          UIUX &nbsp;
                          <span className="fs_48 clr_gray1">•</span> &nbsp;
                          Figma
                        </small>
                      </div>
                      <div className="col-md-4">
                        <Image
                          src={filterImg}
                          alt="filterImg"
                          className="img-fluid w-100 mt-2"
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
              <div
                style={{ border: "1px solid #eee7e7" }}
                className=" mt-4 "
              ></div>
              {/* Repeatable Blog List */}
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <Link className=" tdn" href="/blog-details">
                    <Card className="mb-4 border-0">
                      <Card.Body className="px-0">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <div className="d-flex gap-2 align-items-center mb-2">
                              <Image
                                src={profileImg}
                                alt="profileImg"
                                className="me-2"
                              />
                              <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                                By Arav Patel &nbsp;
                                <span className="dot"></span> &nbsp; May 07
                              </small>
                            </div>
                            <Card.Title className="fs_32 fw-bold">
                              The 2008 Pepsi Logo Redesign
                            </Card.Title>
                            <Card.Text className="fs_14 ff fw-normal clr_gray mb-0">
                              In the world of branding, few logos are as
                              iconic—or as frequently debated—as Pepsi’s...
                            </Card.Text>
                            <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                              UIUX &nbsp;
                              <span className="fs_48 clr_gray1">•</span> &nbsp;
                              Figma
                            </small>
                          </div>
                          <div className="col-md-4">
                            <Image
                              src={filterImg2}
                              alt="filterImg"
                              className="img-fluid w-100 mt-2"
                              style={{ maxHeight: "200px", objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                  <div
                    style={{ border: "1px solid #eee7e7" }}
                    className=" mt-4 "
                  ></div>
                </div>
              ))}
            </Col>

            {/* Sidebar */}
            <Col xl={3} lg={3} className="mt-4 mt-lg-3 border-start ps-lg-4">
              <Card className="mb-4 border-0">
                <Image
                  src={filterImg1}
                  alt="filterImg"
                  className="img-fluid rounded-2 w-100 mt-2"
                  style={{ objectFit: "cover" }}
                />
                <Card.Body className="px-0">
                  <Card.Text>The third Option for nation</Card.Text>
                </Card.Body>
              </Card>

              <h5 className="mb-3">Popular Posts</h5>
              {[1, 2, 3].map((_, index) => (
                <>
                  <div className=" mb-3" key={index}>
                    <div className="d-flex gap-2 align-items-center">
                      <Image
                        src={filterImg}
                        alt="filterImg"
                        className=" mt-2"
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                      />

                      <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                        By Arav Patel &nbsp;
                        <span className="dot"></span> &nbsp; May 07
                      </small>
                    </div>
                    <div className="mt-2">
                      <p className="mb-0 fs_18 fw-semibold  small">
                        Understanding Minimalist Design
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ border: "1px solid #eee7e7" }}
                    className=" my-3 "
                  ></div>
                </>
              ))}
            </Col>
          </Row>
          <h4 className="mt-5 fs_30 fw-bold mb-0">Keep Reading</h4>
          <Row className="mt-2">
            <Col lg={9}>
              <Row>
                <Col md={6} className="mt-3">
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
                          Minimalist design is all about simplicity, clarity,
                          and purpose. In this blog, we explore how to apply
                          minimalist principles to UI/UX...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="mt-3">
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
                          Minimalist design is all about simplicity, clarity,
                          and purpose. In this blog, we explore how to apply
                          minimalist principles to UI/UX...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="mt-3">
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
                          Minimalist design is all about simplicity, clarity,
                          and purpose. In this blog, we explore how to apply
                          minimalist principles to UI/UX...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="mt-3">
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
                          Minimalist design is all about simplicity, clarity,
                          and purpose. In this blog, we explore how to apply
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
    </div>
  );
};

export default PostsSection;
