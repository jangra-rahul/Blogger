"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
import pulsh_icon from "../../assets/images/svg/pulsh_icon.svg";
import profileImg from "../../assets/images/svg/profileImg.svg";

import Image from "next/image";

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("UI/UX Design");

  const tabs = ["UI/UX Design", "India", "Automobiles", "News", "Articles"];

  return (
    <div className="py-4">
      <Container>
        {/* Tabs */}

        {/* Blog content and sidebar */}
        <Row>
          <Col xl={9} lg={9} className="pe-lg-5 ">
            <Nav variant="pills" className="mb-4 d-flex align-items-center">
              <Image
                width={70}
                height={70}
                src={pulsh_icon}
                alt="icon"
                className="me-2"
              />
              {tabs.map((tab) => (
                <Nav.Item className=" border-bottom  pb-2" key={tab}>
                  <Nav.Link
                    onClick={() => setActiveTab(tab)}
                    active={activeTab === tab}
                    className={`mx-2 px-3 py-2 ${
                      activeTab === tab ? "bg-dark text-white" : "text-dark"
                    }`}
                    style={{ borderRadius: "20px" }}
                  >
                    {tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            {/* First blog */}
            <Card className="mb-4 w-100 border-0">
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
                      In the world of branding, few logos are as iconic—or as
                      frequently debated—as Pepsi’s...
                    </Card.Text>
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
            <div
              style={{ border: "1px solid #eee7e7" }}
              className=" mt-4 "
            ></div>
            {/* Repeatable Blog List */}
            {[1, 2, 3].map((_, index) => (
              <>
                <Card className="mb-4 border-0" key={index}>
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
                          In the world of branding, few logos are as iconic—or
                          as frequently debated—as Pepsi’s...
                        </Card.Text>
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
                <div
                  style={{ border: "1px solid #eee7e7" }}
                  className=" mt-4 "
                ></div>
              </>
            ))}
          </Col>

          {/* Sidebar */}
          <Col xl={3} lg={3} className="mt-4 mt-lg-0 border-start ps-lg-4">
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
      </Container>
    </div>
  );
};

export default FilterSection;
