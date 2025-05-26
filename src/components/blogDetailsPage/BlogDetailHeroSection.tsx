"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import profileImg from "../../assets/images/svg/profileImg.svg";
import likeIcon from "../../assets/images/svg/likeIcon.svg";
import dislikeIcon from "../../assets/images/svg/dislikeIcon.svg";
import threeDotIcon from "../../assets/images/svg/threeDotIcon.svg";
import videoImg from "../../assets/images/png/VideoImg.png";
import detail_img from "../../assets/images/png/detail_img.png";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";

const BlogDetailHeroSection = () => {
  return (
    <>
      <div style={{ border: "1px solid #eee7e7" }}></div>
      <div className="py-5">
        <Container>
          <Row>
            <Col lg={9} className=" pe-lg-5">
              <h2 className="fw-bold mb-2 fs_48 ff_m">
                The 2008 Pepsi Logo Redesign{" "}
              </h2>
              <p className="mb-0 fs_14 clr_gray">
                A Bold Move or a Branding Misstep?
              </p>
              <div className="d-flex mt-3 gap-2 align-items-center mb-2">
                <Image src={profileImg} alt="profileImg" className="me-2" />
                <div className="mt-1">
                  <p className="mb-0 ff fs_14 clr_gray">By Michel Richard</p>
                  <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                    By Arav Patel &nbsp;
                    <span className="dot"></span> &nbsp; May 07
                  </small>
                </div>
              </div>
              <Image
                src={videoImg}
                alt="videoImg"
                className=" h-auto object-fit-cover w-100 mt-4"
              />
              <p className="mb-0 fs_14 ff_m clr_gray mt-4">
                In the world of branding, few logos are as iconic—or as
                frequently debated—as Pepsi's. As one of the biggest names in
                the global beverage market, Pepsi has undergone numerous visual
                transformations throughout its history. But none stirred up more
                conversation than its 2008 logo redesign. Was it a modern
                refresh that aligned Pepsi with a new era, or a costly blunder
                that diluted brand identity? Let’s dive into the design, the
                controversy, and what we can learn from this high-profile
                rebranding effort.
              </p>
              <p className="mb-0 fs_14 ff_m clr_gray mt-4">
                By 2008, Pepsi was facing fierce competition from Coca-Cola,
                which had long leaned on the power of consistency and nostalgia.
                Pepsi, on the other hand, had rebranded more frequently in a bid
                to stay relevant, youthful, and in tune with pop culture.
                PepsiCo decided it was time to modernize once again. They wanted
                a design that reflected a more dynamic, energetic brand and
                resonated with younger audiences in the digital age. This led to
                them hiring the branding agency Arnell Group, headed by Peter
                Arnell.
              </p>
              <Image
                src={detail_img}
                alt="videoImg"
                className="me-2 h-auto  w-100 mt-5"
              />
              <h4 className=" mt-5 fs_18 fw-bold ff_m mb-0">
                The Design: What's New in the 2008 Logo?
              </h4>
              <p className=" fs_14 ff_m clr_gray mb-0 mt-1">
                The 2008 redesign introduced several bold changes:
              </p>
              <ul className="mt-3">
                <li className="dist fs_16 ff_m mt-3">
                  The Pepsi Globe was tilted, resulting in a dynamic,
                  asymmetrical white "wave" across the circle. This wave subtly
                  resembled a smile (a deliberate choice, as we’ll see).
                </li>
                <li className="dist fs_16 ff_m mt-3">
                  The Pepsi Globe was tilted, resulting in a dynamic,
                  asymmetrical white "wave" across the circle. This wave subtly
                  resembled a smile (a deliberate choice, as we’ll see).
                </li>
                <li className="dist fs_16 ff_m mt-3">
                  The Pepsi Globe was tilted, resulting in a dynamic,
                  asymmetrical white "wave" across the circle. This wave subtly
                  resembled a smile (a deliberate choice, as we’ll see).
                </li>
                <li className="dist fs_16 ff_m mt-3">
                  The Pepsi Globe was tilted, resulting in a dynamic,
                  asymmetrical white "wave" across the circle. This wave subtly
                  resembled a smile (a deliberate choice, as we’ll see).
                </li>
              </ul>
              <p className=" fs_14 ff_m clr_gray mb-0 mt-1">
                It was a dramatic departure from the 2003 version, which had a
                more three-dimensional look and a more traditional font.
              </p>
              <h4 className=" fs_18 fw-bold ff_m mt-5 mb-0">
                The Cost: A $1 Million Logo?
              </h4>
              <p className=" fs_14 ff_m clr_gray mb-0 mt-1">
                One of the most talked-about aspects of the redesign was the
                reported cost—$1 million just for the logo design, with PepsiCo
                spending over $1.2 billion in total to roll out the rebrand
                across products, packaging, vending machines, and advertising.
                Critics questioned whether the redesign justified such a high
                price, especially when many consumers found the changes
                underwhelming or confusing.
              </p>
              <h4 className="mt-5 ff_m fs_32 fw-bold mb-0">Comments</h4>
              <div
                style={{ border: "1px solid #eee7e7" }}
                className=" my-3 "
              ></div>

              <Row className="justify-content-center">
                <Col md={10}>
                  <h5 className="fs_24 fw-normal mb-0 ff_m  mt-4">
                    Leave a comment
                  </h5>
                  <Row>
                    <Col md={6} className="mt-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control px-3 py-2 rounded-5 w-100"
                      />
                    </Col>
                    <Col md={6} className="mt-4">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="form-control px-3 py-2 rounded-5 w-100"
                      />
                    </Col>
                    <Col md={12} className="mt-4">
                      <div className="form-control d-flex justify-content-between align-items-center border px-3 py-1 pe-1 rounded-5 w-100">
                        <input
                          type="text"
                          placeholder="Type your comment here"
                          className="border-0 w-100"
                        />
                        <button className="px-3 py-1 rounded-5 bg-black border-0 text-white ff_m ">
                          Send
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={8}>
                      <div className="p-3 mt-4">
                        <div className="d-flex gap-3  align-items-center">
                          <Image
                            src={filterImg}
                            alt="filterImg"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%" }}
                          />
                          <div>
                            <h6 className="fs_18 fw-bold ff_m mb-0 ">
                              John Doe
                            </h6>
                            <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                              May 10, 2025
                            </small>
                          </div>
                        </div>
                        <small className="fs_14 mt-4 d-flex align-items-center ff fw-normal clr_gray mb-0">
                          I just read this blog and it was amazing! The details
                          were clear and easy to understand. I will definitely
                          be reading more blogs again. Thank You Blogger for
                          sharing!
                        </small>
                        <div className="d-flex mt-4 align-items-center gap-3">
                          <Image
                            src={likeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            src={dislikeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            className="ms-2"
                            src={threeDotIcon}
                            alt="likeIcon"
                            width={4}
                            height={15}
                          />
                        </div>
                        <Col md={12} className="mt-4">
                          <div className="form-control d-flex justify-content-between align-items-center border px-3 py-1 pe-1 rounded-5 w-100">
                            <input
                              type="text"
                              placeholder="Type your comment here"
                              className="border-0 w-100"
                            />
                            <button className="px-3 py-1 rounded-5 bg-black border-0 fs_14 text-white ff_m ">
                              Send
                            </button>
                          </div>
                        </Col>
                      </div>
                      <div
                        style={{ backgroundColor: "#F5F5F5" }}
                        className="p-3 mt-4 rounded-2"
                      >
                        <div className="d-flex gap-3  align-items-center">
                          <Image
                            src={filterImg}
                            alt="filterImg"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%" }}
                          />
                          <div>
                            <h6 className="fs_18 fw-bold ff_m mb-0 ">Author</h6>
                            <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                              May 11, 2025
                            </small>
                          </div>
                        </div>
                        <small className="fs_14 mt-4 d-flex align-items-center ff fw-normal clr_gray mb-0">
                          Thank You for your amazing feedback. Your appreciation
                          is our fuel to Motivation.{" "}
                        </small>
                        <div className="d-flex mt-4 align-items-center gap-3">
                          <Image
                            src={likeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            src={dislikeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            className="ms-2"
                            src={threeDotIcon}
                            alt="likeIcon"
                            width={4}
                            height={15}
                          />
                        </div>
                      </div>
                      <div className="p-3 mt-4">
                        <div className="d-flex gap-3  align-items-center">
                          <Image
                            src={filterImg}
                            alt="filterImg"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%" }}
                          />
                          <div>
                            <h6 className="fs_18 fw-bold ff_m mb-0 ">
                              John Doe
                            </h6>
                            <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                              May 10, 2025
                            </small>
                          </div>
                        </div>
                        <small className="fs_14 mt-4 d-flex align-items-center ff fw-normal clr_gray mb-0">
                          I just read this blog and it was amazing! The details
                          were clear and easy to understand. I will definitely
                          be reading more blogs again. Thank You Blogger for
                          sharing!
                        </small>
                        <div className="d-flex mt-4 align-items-center gap-3">
                          <Image
                            src={likeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            src={dislikeIcon}
                            alt="likeIcon"
                            width={20}
                            height={20}
                          />
                          <Image
                            className="ms-2"
                            src={threeDotIcon}
                            alt="likeIcon"
                            width={4}
                            height={15}
                          />
                        </div>
                      </div>
                      <p className=" fs_16 fw-bold text-center my-4 ">
                        Load More
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xl={3} lg={3} className="mt-4 mt-lg-0 border-start  ps-lg-4">
              <h5 className="mb-3 fs_32 fw-bold">Popular Posts</h5>
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className=" mb-3">
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
                </div>
              ))}
              <Card className="mt-4 border-0">
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
              <h5 className="mt-5 fs_32 fw-bold">Latest</h5>
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className=" mb-3">
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
                </div>
              ))}
              <Card className="mt-4 border-0">
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
              <h5 className="mt-5 fs_32 fw-bold">Trending</h5>
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className=" mb-3">
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
                </div>
              ))}
              <Card className="mt-4 border-0">
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
              <h5 className="mt-5 fs_32 fw-bold">Recent</h5>
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className=" mb-3">
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
                </div>
              ))}
              <Card className="mt-4 border-0">
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
            </Col>
          </Row>
        </Container>
        <Col md={9} className="pe-5">
          <div style={{ border: "1px solid #eee7e7" }} className=" mb-3 "></div>
        </Col>
      </div>
    </>
  );
};

export default BlogDetailHeroSection;
