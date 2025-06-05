"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg2 from "../../assets/images/svg/blog-img.png";
import img1 from "../../assets/images/svg/Img1.png";
import img2 from "../../assets/images/svg/Img2.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
import profileImg from "../../assets/images/svg/profileImg.svg";

import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

type FilterSectionProps = {
  popularPosts: any;
  data: any;
};
const PostsSection = ({ popularPosts, data }: FilterSectionProps) => {
  const [picksData, setPicksData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(null);
  const totalPages = 25;
  const BASE_URL = "https://newtopics-blogger.s3.ap-south-1.amazonaws.com/";
  useEffect(() => {
    setPicksData(popularPosts);
    setPosts(data?.data);
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
    <div>
      {" "}
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
                                              <span className="dot"></span>{" "}
                                              &nbsp; {month} {day}
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
                <Col
                  xl={3}
                  lg={3}
                  className="mt-4 mt-lg-0 border-start ps-lg-4"
                >
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
                                      <span className="dot"></span> &nbsp;{" "}
                                      {month} {day}
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
    </div>
  );
};

export default PostsSection;
