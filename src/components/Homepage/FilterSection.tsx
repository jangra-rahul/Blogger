"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Card,
  Button,
  Spinner,
  Dropdown,
} from "react-bootstrap";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
import pulsh_icon from "../../assets/images/svg/pulsh_icon.svg";
import cross_icon from "../../assets/images/svg/crossIcon.svg";
import Pagination from "../../components/Homepage/Pagination";
import Image from "next/image";
import Link from "next/link";

type FilterSectionProps = {
  popularPosts: any;
  data: any;
};

const FilterSection = ({ popularPosts, data }: FilterSectionProps) => {
  const [posts, setPosts] = useState([]);
  const [category, setCatgary] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const visibleTabs = category?.slice(0, 4);
  const hiddenTabs = category?.slice(4);
  const [page, setPage] = useState(2); // Current page
  const [showDropdown, setShowDropdown] = useState(false);
  const totalPages = 25;
  const tabs = ["UI/UX Design", "India", "Automobiles", "News", "Articles"];
  const [picksData, setPicksData] = useState([]);

  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://newtopics-blogger.s3.ap-south-1.amazonaws.com/";
  useEffect(() => {
    setPicksData(popularPosts);
    setPosts(data?.data);
    setCatgary(data?.categories);
    setLoading(false);
  }, [popularPosts]);

  console.log(posts);
  const formatDate = (createdAt: any) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString("default", { month: "long" }); // e.g. "September"
    const day = date.getDate(); // e.g. 5
    return { month, day };
  };
  return (
    <div className="py-4">
      {loading ? (
        <>
          <Container className="d-flex justify-content-center py-5">
            <Spinner animation="border" className="text-black" />
          </Container>
        </>
      ) : (
        <>
          {" "}
          <Container>
            {/* Tabs */}

            {/* Blog content and sidebar */}
            <Row>
              <Col xl={9} lg={9} className="pe-lg-5 ">
                <Nav
                  variant="pills"
                  className="mb-4 d-flex align-items-center flex-wrap"
                >
                  {/* Pulsing Icon with Dropdown */}

                  <div style={{ position: "relative", top: 0, left: 0 }}>
                    {showDropdown === false && (
                      <Image
                        width={70}
                        height={70}
                        src={pulsh_icon}
                        alt="icon"
                        className="me-2"
                        onClick={() => setShowDropdown(true)}
                      />
                    )}
                    {showDropdown === true && (
                      <Image
                        width={70}
                        height={70}
                        src={cross_icon}
                        alt="icon"
                        className="me-2"
                        onClick={() => setShowDropdown(false)}
                      />
                    )}
                    {showDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "80px",
                          border: "0px solid #565656",
                          backgroundColor: "#F5F5F5",
                          padding: "15px 10px",
                          borderRadius: "12px",
                          minWidth: "260px",
                          zIndex: 10,
                        }}
                      >
                        {hiddenTabs.length > 0 ? (
                          hiddenTabs.map((tab: any, index: any) => (
                            <div
                              key={index}
                              onClick={() => {
                                setActiveTab(tab);
                                setShowDropdown(false);
                              }}
                              style={{
                                padding: "6px 15px",
                                cursor: "pointer",
                                fontSize: "14px",
                                borderRadius: "6px",
                                fontWeight: "600",
                                backgroundColor:
                                  activeTab === tab ? "#f1f1f1" : "transparent",
                              }}
                            >
                              {tab?.name}
                            </div>
                          ))
                        ) : (
                          <div
                            className="text-muted"
                            style={{ fontSize: "14px" }}
                          >
                            No Category found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Visible Nav Items */}
                  {visibleTabs?.map((tab: any, index: any) => (
                    <Nav.Item className="pb-2" key={index}>
                      <Nav.Link
                        onClick={() => setActiveTab(tab)}
                        active={activeTab === tab}
                        className={`mx-2 px-3 py-2 ${
                          activeTab === tab ? "bg-dark text-white" : "text-dark"
                        }`}
                        style={{ borderRadius: "20px", fontSize: "14px" }}
                      >
                        {tab?.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                {/* First blog */}

                <div
                  style={{ border: "1px solid #eee7e7" }}
                  className=" mt-4 "
                ></div>
                {/* Repeatable Blog List */}
                <div>
                  {posts?.length > 0 ? (
                    <>
                      {" "}
                      {posts?.map((item: any, index: any) => {
                        const { month, day } = formatDate(item.createdAt);
                        return (
                          <div key={index}>
                            <Link
                              className=" tdn"
                              href={`/blog-details/${item?.slug}`}
                            >
                              <Card className="mb-4 border-0">
                                <Card.Body className="px-0">
                                  <div className="row align-items-center">
                                    <div className="col-md-8">
                                      <div className="d-flex gap-2 align-items-center mb-2">
                                        {item?.image && (
                                          <Image
                                            src={`${BASE_URL}${item?.image}`}
                                            alt="filterImg"
                                            className=" mt-2"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "50%" }}
                                          />
                                        )}
                                        <div>
                                          <small className="fs_14  ff fw-normal clr_gray mb-0">
                                            {item?.categoryId?.name}
                                          </small>
                                          <p className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                                            <span className="dot"></span> &nbsp;{" "}
                                            {month} {day}
                                          </p>
                                        </div>
                                      </div>
                                      <Card.Title className="fs_32 mt-2 fw-bold">
                                        {item?.title}
                                      </Card.Title>
                                      <Card.Text
                                        className="text-muted mt-3 blog-description fs_14 fw-normal"
                                        dangerouslySetInnerHTML={{
                                          __html: item.description || "",
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-4">
                                      <Image
                                        width={300}
                                        height={300}
                                        src={`${BASE_URL}${item?.image}`}
                                        alt="filterImg"
                                        className="img-fluid rounded-3 w-100 mt-2"
                                        style={{
                                          maxHeight: "200px",
                                          objectFit: "cover",
                                        }}
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
                        );
                      })}
                    </>
                  ) : (
                    <p className="mt-4">No Blogs Found</p>
                  )}

                  <div className="d-flex justify-content-center py-5">
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={(pg: any) => setPage(pg)}
                    />
                  </div>
                </div>
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
                {picksData.length > 0 ? (
                  <>
                    {" "}
                    {picksData?.map((item: any, index: any) => {
                      const { month, day } = formatDate(item?.createdAt);
                      return (
                        <div key={index}>
                          <Link
                            className="text-black tdn"
                            href={`/blog-details/${item?.slug}`}
                          >
                            <div className=" mb-3">
                              <div className="d-flex gap-2 align-items-center">
                                {item?.image && (
                                  <Image
                                    src={`${BASE_URL}${item.image}`}
                                    alt="filterImg"
                                    className=" mt-2"
                                    width={40}
                                    height={40}
                                    style={{ borderRadius: "50%" }}
                                  />
                                )}

                                <div>
                                  <small className="fs_14  ff fw-normal clr_gray mb-0">
                                    {item?.categoryId?.name}
                                  </small>
                                  <p className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                                    <span className="dot"></span> &nbsp; {month}{" "}
                                    {day}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 fs_18 fw-semibold  small">
                                  {item?.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                          <div
                            style={{ border: "1px solid #eee7e7" }}
                            className=" my-3 "
                          ></div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  "No Populer Post Found"
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default FilterSection;
