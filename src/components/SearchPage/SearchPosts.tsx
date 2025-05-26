"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Nav,
} from "react-bootstrap";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg2 from "../../assets/images/svg/blog-img.png";
import img1 from "../../assets/images/svg/Img1.png";
import img2 from "../../assets/images/svg/Img2.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
import profileImg from "../../assets/images/svg/profileImg.svg";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import pulsh_icon from "../../assets/images/svg/pulsh_icon.svg";
import bottomArrow from "../../assets/images/svg/bottomArrow.svg";

const searches = [
  "Ind VS Pak",
  "Donald Trump",
  "Snakeskin Fashion Trend",
  "Dundee’s Tourism Surge",
  "Dundee’s Tourism Surge",
];
const SearchPosts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("UI/UX Design");

  const tabs = ["UI/UX Design", "India", "Automobiles", "News", "Articles"];

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const isSearching = searchValue.trim() !== "";
  return (
    <div>
      {" "}
      <div className="py-4">
        <Container>
          {/* HERO */}
          <div>
            <Row className=" justify-content-center">
              <Col md={7}>
                <div className="py-4 mx-auto">
                  <h2 className="fs_96 ff_m fw-normal  py-md-3   mb-0 text-center">
                    Blogger
                  </h2>
                  <InputGroup
                    style={{ backgroundColor: "#F5F5F5" }}
                    className="rounded-pill w-100 mt-3 d-md-flex d-none"
                  >
                    <Form.Control
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder="Search"
                      className="border-0 px-4 rounded-pill"
                      style={{ height: "40px", backgroundColor: "#F5F5F5" }}
                    />
                    <InputGroup.Text
                      style={{ backgroundColor: "#F5F5F5" }}
                      className=" border-0 rounded-end-pill pe-3"
                    >
                      <FiSearch size={20} className="text-muted" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                {!isSearching && (
                  <Row>
                    <Col md={6} className="border-start mt-md-5 mt-4">
                      <h4 className=" fs_30 fw-bold ff_m mb-0">
                        Recent Searches
                      </h4>

                      <ul
                        className="mt-3"
                        style={{ listStyle: "none", padding: 0, margin: 0 }}
                      >
                        {searches.map((item, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "8px",
                            }}
                          >
                            <AiOutlineClockCircle
                              size={14}
                              style={{ marginRight: "8px", color: "#333" }}
                            />
                            <p className=" mb-0 fs_16 fw-normal ff_m ">
                              {" "}
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6} className="border-start mt-md-5 mt-4">
                      <h4 className=" fs_30 fw-bold ff_m mb-0">
                        Popular Searches
                      </h4>

                      <ul
                        className="mt-3"
                        style={{ listStyle: "none", padding: 0, margin: 0 }}
                      >
                        {searches.map((item, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "8px",
                            }}
                          >
                            <p className=" mb-0 fs_16 fw-normal ff_m ">
                              {" "}
                              {item}
                            </p>
                            <FiArrowUpRight
                              size={14}
                              style={{ marginLeft: "6px", color: "#333" }}
                            />
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                )}
                {isSearching && (
                  <Nav
                    variant="pills"
                    className="mb-4 d-flex align-items-center"
                  >
                    <Image
                      width={60}
                      height={60}
                      src={pulsh_icon}
                      alt="icon"
                      className="me-4"
                    />
                    {tabs.map((tab) => (
                      <Nav.Item className=" border-bottom  pb-2" key={tab}>
                        <Nav.Link
                          onClick={() => setActiveTab(tab)}
                          active={activeTab === tab}
                          className={`mx-2 px-3 py-2 ${
                            activeTab === tab
                              ? "bg-dark text-white"
                              : "text-dark"
                          }`}
                          style={{ borderRadius: "20px" }}
                        >
                          {tab}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                )}
              </Col>
            </Row>
            {!isSearching ? (
              <Row>
                <Col lg={3} md={6} className="mt-md-5 mt-4 px-4">
                  <Image
                    src={filterImg}
                    alt="filterImg"
                    className="img-fluid w-100 mt-2 rounded-3 "
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="mt-2">
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
                    <p className="fs_14 ff fw-semibold text-black mb-0">
                      In the world of branding, few logos are as iconic—or as
                      frequently debated—as Pepsi’s...
                    </p>
                  </div>
                </Col>
                <Col lg={3} md={6} className="mt-md-5 mt-4 px-4">
                  <Image
                    src={filterImg1}
                    alt="filterImg"
                    className="img-fluid w-100 mt-2 rounded-3 "
                    style={{ maxHeight: "180px", objectFit: "cover" }}
                  />
                  <div className="mt-2">
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
                    <p className="fs_14 ff fw-semibold text-black mb-0">
                      In the world of branding, few logos are as iconic—or as
                      frequently debated—as Pepsi’s...
                    </p>
                  </div>
                </Col>
                <Col lg={3} md={6} className="mt-md-5 mt-4 px-4">
                  <Image
                    src={filterImg2}
                    alt="filterImg"
                    className="img-fluid w-100 mt-2 rounded-3 "
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="mt-2">
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
                    <p className="fs_14 ff fw-semibold text-black mb-0">
                      In the world of branding, few logos are as iconic—or as
                      frequently debated—as Pepsi’s...
                    </p>
                  </div>
                </Col>
                <Col lg={3} md={6} className="mt-md-5 mt-4 px-4">
                  <Image
                    src={filterImg}
                    alt="filterImg"
                    className="img-fluid w-100 mt-2 rounded-3 "
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="mt-2">
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
                    <p className="fs_14 ff fw-semibold text-black mb-0">
                      In the world of branding, few logos are as iconic—or as
                      frequently debated—as Pepsi’s...
                    </p>
                  </div>
                </Col>
              </Row>
            ) : null}
            {isSearching ? (
              <div className="d-flex border-bottom pb-3 justify-content-between align-items-center mt-5 mb-4">
                <p className=" fs_18 ff_m fw-bold mb-0 ">502 results </p>
                <button className=" rounded-5 bg-black text-white px-4 py-2 fs_16 fw-semibold ff_m border-0">
                  Sort by{" "}
                  <Image
                    className="ms-2"
                    width={15}
                    height={15}
                    src={bottomArrow}
                    alt="bottomArrow"
                  />
                </button>
              </div>
            ) : null}
          </div>
          {/* Blog content and sidebar */}
          <Row className="mt-md-5 mt-4">
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
                          className="img-fluid w-100 mt-2 rounded-3 "
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
                              className="img-fluid w-100 mt-2 rounded-3 "
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
        </Container>
      </div>
    </div>
  );
};

export default SearchPosts;
