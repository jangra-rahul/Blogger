"use client";
import React, { useEffect, useState } from "react";
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
import PaginationUI from "../Homepage/Pagination";
import cross_icon from "../../assets/images/svg/crossIcon.svg";

const searches = [
  "Ind VS Pak",
  "Donald Trump",
  "Snakeskin Fashion Trend",
  "Dundee’s Tourism Surge",
  "Dundee’s Tourism Surge",
];

type SearchPostsProps = {
  searchdata: any;
  onSearchChange: any;
  onSortChange: (sort: string) => void; // 👈 Add this line
};

const SearchPosts = ({
  searchdata,
  onSearchChange,
  onSortChange,
}: SearchPostsProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(2); // Current page
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const totalPages = 25;
  const [blogs, setBlogs] = useState([]);
  const [posts, setPopularPost] = useState([]);
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const tabs = ["UI/UX Design", "India", "Automobiles", "News", "Articles"];
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("Sort by"); // 👈 This expects a string
  const [category, setCatgary] = useState([]);
  const visibleTabs = category?.slice(0, 4);
  const hiddenTabs = category?.slice(4);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option: { label: string; value: string }) => {
    setSelected(option.label); // ✅ Correct: set label (string)
    setShowOptions(false);
    onSortChange(option.value); // ✅ Send actual API value
  };

  const options = [
    { label: "Newest first", value: "newest" },
    { label: "Oldest first", value: "oldest" },
    { label: "Popularity", value: "popularity" },
  ];
  const BASE_URL = "https://newtopics-blogger.s3.ap-south-1.amazonaws.com/";
  useEffect(() => {
    setBlogs(searchdata?.blogs);
    // setPopularPost(searchdata.searchdata.blogs);
    setCatgary(searchdata?.categories);

    setLoading(false);
  }, [searchdata]);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);

    // If input is cleared, remove from recentSearches
    if (value.trim() === "") {
      const existing = JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      ) as string[];

      const updated = existing.filter((item) => item !== searchValue.trim());
      localStorage.setItem("recentSearches", JSON.stringify(updated));
      setRecentSearches(updated);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = searchValue.trim();
      if (!value) return;

      const existing = JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      ) as string[];

      const updated = [value, ...existing.filter((item) => item !== value)];
      const limited = updated.slice(0, 5);

      localStorage.setItem("recentSearches", JSON.stringify(limited));
      setRecentSearches(limited); // 👈 This line updates the UI immediately
      setSearchValue(""); // optional: clear input
    }
  };

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("recentSearches") || "[]"
    ) as string[];
    setRecentSearches(stored);
  }, []);

  const isSearching = searchValue.trim() !== "";

  const formatDate = (createdAt: any) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString("default", { month: "long" }); // e.g. "September"
    const day = date.getDate(); // e.g. 5
    return { month, day };
  };

  return (
    <div>
      {" "}
      <div className="py-4">
        <Container>
          {/* HERO */}
          <div>
            <Row className=" justify-content-center">
              <Col md={8}>
                <div className="py-4 mx-auto">
                  <Link href="/" className="tdn text-black">
                    <h2 className="fs_96 ff_m fw-normal  py-md-3   mb-0 text-center">
                      Blogger
                    </h2>
                  </Link>
                  <InputGroup
                    style={{ backgroundColor: "#F5F5F5" }}
                    className="rounded-pill w-100 mt-3 "
                  >
                    <Form.Control
                      value={searchValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
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
                  <Row className="  ">
                    <Col md={9} className="   mt-4">
                      <h4 className=" fs_30 fw-bold ff_m mb-0">
                        Recent Searches
                      </h4>
                      {recentSearches?.length > 0 ? (
                        <>
                          {" "}
                          <ul
                            className="mt-3"
                            style={{ listStyle: "none", padding: 0, margin: 0 }}
                          >
                            {recentSearches?.map((item: any, index: any) => (
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
                        </>
                      ) : null}
                    </Col>
                  </Row>
                )}
                {isSearching && (
                  <Nav
                    variant="pills"
                    className="mb-4 d-flex align-items-center flex-wrap"
                  >
                    {/* Pulsing Icon with Dropdown */}

                    <div style={{ position: "relative", top: 0, left: 0 }}>
                      {category?.length > 4 ? (
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
                        </div>
                      ) : null}
                      {category?.length === 0 && (
                        <>
                          <div
                            className="text-muted"
                            style={{ fontSize: "14px" }}
                          >
                            No Category found
                          </div>
                        </>
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
                                  padding: "6px 10px",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  borderRadius: "6px",
                                  fontWeight: "600",
                                  backgroundColor:
                                    activeTab === tab
                                      ? "#f1f1f1"
                                      : "transparent",
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
                            activeTab === tab
                              ? "bg-dark text-white"
                              : "text-dark"
                          }`}
                          style={{ borderRadius: "20px", fontSize: "14px" }}
                        >
                          {tab?.name}
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
                <p className=" fs_18 ff_m fw-bold mb-0 ">
                  {blogs?.length || 0} results{" "}
                </p>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <button
                    onClick={() => setShowOptions(!showOptions)}
                    className=" rounded-5 bg-black text-white px-4 py-2 fs_16 fw-semibold ff_m border-0"
                  >
                    {selected ? selected : "Sort by"}

                    <Image
                      className="ms-2"
                      width={15}
                      height={15}
                      src={bottomArrow}
                      alt="bottomArrow"
                    />
                  </button>
                  {showOptions && (
                    <div
                      style={{
                        position: "absolute",
                        top: "120%",
                        left: 0,
                        backgroundColor: "#f7f7f7",
                        borderRadius: "12px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                        padding: "10px 0",
                        zIndex: 10,
                        width: "180px",
                      }}
                    >
                      {options.map((option: any, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelect(option)}
                          style={{
                            padding: "10px 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                            color: "#333",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#eaeaea")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
          {/* Blog content and sidebar */}
          <Row className="mt-5">
            <Col xl={9} lg={9} className="pe-lg-5 ">
              {/* Repeatable Blog List */}
              <div>
                {blogs?.length > 0 ? (
                  <>
                    {" "}
                    {blogs?.map((item: any, index: any) => {
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
                  <PaginationUI
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

              {/* <h5 className="mb-3">Popular Posts</h5>
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
              )} */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchPosts;
