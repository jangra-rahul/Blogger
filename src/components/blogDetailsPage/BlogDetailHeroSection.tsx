"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import profileImg from "../../assets/images/svg/profileImg.svg";
import likeIcon from "../../assets/images/svg/likeIcon.svg";
import dislikeIcon from "../../assets/images/svg/dislikeIcon.svg";
import threeDotIcon from "../../assets/images/svg/threeDotIcon.svg";
import videoImg from "../../assets/images/png/VideoImg.png";
import detail_img from "../../assets/images/png/detail_img.png";
import filterImg from "../../assets/images/png/filterImg.png";
import filterImg1 from "../../assets/images/png/filterImg1.png";
// import { toast, toastContainer } from "react-toastify";

import { fetchBlogComments, submitBlogComment } from "@/services/Blogs.service";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

type FilterSectionProps = {
  blogDetail: any;
  popularpost: any;
  latestpost: any;
};

const BlogDetailHeroSection = ({
  blogDetail,
  popularpost,
  latestpost,
}: FilterSectionProps) => {
  const [blogDetails, setBlogDetails] = useState<any>([]);
  const [popularposts, setPopularPost] = useState<any>([]);
  const [latestposts, setLatestPost] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);
  const [blogId, setId] = useState("");

  const BASE_URL = "https://newtopics-blogger.s3.ap-south-1.amazonaws.com/";

  useEffect(() => {
    if (blogDetails?._id) {
      setId(blogDetails._id);
    }
  }, [blogDetails]);

  useEffect(() => {
    setBlogDetails(blogDetail);
    setPopularPost(popularpost);
    setLatestPost(latestpost);
    setLoading(false);
  }, [blogDetail]);

  console.log("blogDetails--------", blogId);
  console.log("popularpost--------", popularposts);
  console.log("latestpost--------", latestposts);

  let month = "";
  let day: any = "";

  const formatDate = (createdAt: any) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return { month, day };
  };

  if (blogDetails?.createdAt) {
    const formatted = formatDate(blogDetails.createdAt);
    month = formatted.month;
    day = formatted.day;
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const loadComments = async () => {
    if (!blogId) return;
    try {
      const res: any = await fetchBlogComments(blogId);
      setComments(res?.data?.data || []);
      setCommentLoading(false);
      // toast.success("Comments loaded!");
    } catch (error) {
      console.error("Failed to fetch comments", error);
      toast.error("Failed to load comments");
    }
  };

  useEffect(() => {
    loadComments();
  }, [blogId]);

  const handleSubmit = async () => {
    if (!name || !email || !comment) {
      alert("Please fill all fields");
      return;
    }

    const response = await submitBlogComment({
      blogId,
      name,
      email,
      comment,
    });
    if (response) {
      toast.success("Comment posted successfully!");
      setName("");
      setEmail("");
      setComment("");
      loadComments();
    } else {
      toast.error("Something went wrong!");
    }
  };
  console.log("blogId", blogId);

  console.log("comments", comments);

  const commentformatDate = (createdAt: any) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString("default", { month: "long" }); // e.g. "September"
    const day = date.getDate(); // e.g. 5
    const year = date.getFullYear();
    return { month, day, year };
  };
  return (
    <>
      <ToastContainer />
      <div style={{ border: "1px solid #eee7e7" }}></div>
      <div className="py-5">
        {loading ? (
          <Container className="d-flex justify-content-center py-5">
            <Spinner animation="border" className="text-black" />
          </Container>
        ) : (
          <>
            <Container>
              <Row>
                <Col lg={9} className=" pe-lg-5">
                  <h2 className="fw-bold mb-2 fs_40 ff_m">
                    {blogDetails?.title}
                  </h2>

                  <div className="d-flex mt-4 gap-2 align-items-center mb-2">
                    <Image src={profileImg} alt="profileImg" className="me-2" />
                    <div className="mt-1">
                      <p className="mb-0 ff fs_14 clr_gray">
                        By {blogDetails?.categoryId?.name}
                      </p>
                      <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                        <span className="dot"></span> &nbsp; {month} {day}
                      </small>
                    </div>
                  </div>
                  <video
                    height={540}
                    className=" border-2 border rounded-3 object-fit-contain w-100 mt-4"
                    controls
                  >
                    <source
                      className="rounded-4"
                      src={`${BASE_URL}${blogDetails?.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div
                    className="text-muted mt-4  fs_14 fw-normal"
                    dangerouslySetInnerHTML={{
                      __html: blogDetails?.description || "",
                    }}
                  />
                  {blogDetails?.image ? (
                    <>
                      {" "}
                      <Image
                        width={100}
                        height={600}
                        src={`${BASE_URL}${blogDetails?.image}`}
                        alt="videoImg"
                        className="me-2 border object-fit-contain p-3 rounded-3  w-100 mt-5"
                      />
                    </>
                  ) : null}

                  {/* <p className="mb-0 fs_14 ff_m clr_gray mt-4">
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
            /> */}
                  {/* <h4 className=" mt-5 fs_18 fw-bold ff_m mb-0">
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
            </p> */}
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control px-3 py-2 rounded-5 w-100"
                          />
                        </Col>
                        <Col md={6} className="mt-4">
                          <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control px-3 py-2 rounded-5 w-100"
                          />
                        </Col>
                        <Col md={12} className="mt-4">
                          <div className="form-control d-flex justify-content-between align-items-center border px-3 py-1 pe-1 rounded-5 w-100">
                            <input
                              type="text"
                              placeholder="Type your comment here"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="border-0 w-100"
                            />
                            <button
                              onClick={handleSubmit}
                              className="px-3 py-1 rounded-5 bg-black border-0 text-white ff_m"
                            >
                              Send
                            </button>
                          </div>
                        </Col>
                      </Row>
                      {commentLoading ? (
                        <div className="d-flex justify-content-center">
                          <Spinner animation="border" className="text-black" />
                        </div>
                      ) : (
                        <>
                          {" "}
                          <Row className="justify-content-center">
                            {comments.length > 0 ? (
                              <>
                                {comments?.map((obj: any, i: any) => {
                                  const { day, month, year } =
                                    commentformatDate(obj?.createdAt);
                                  return (
                                    <>
                                      {" "}
                                      <Col key={i} md={8}>
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
                                              <h6 className="fs_18 fw-bold ff_m mb-0 ">
                                                {obj?.name}
                                              </h6>
                                              <small className="fs_14 d-flex ff_m align-items-center ff fw-normal clr_gray mb-0">
                                                {day} {month} {year}
                                              </small>
                                            </div>
                                          </div>
                                          <small className="fs_14 mt-4 d-flex align-items-center ff fw-normal clr_gray mb-0">
                                            {obj?.comment}
                                          </small>
                                          {/* <div className="d-flex mt-4 align-items-center gap-3">
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
                                          </div> */}
                                          {/* <Col md={12} className="mt-4">
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
                                    </Col> */}
                                        </div>
                                        {/* <div
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
                                <h6 className="fs_18 fw-bold ff_m mb-0 ">
                                  Author
                                </h6>
                                <small className="fs_14 d-flex align-items-center ff fw-normal clr_gray mb-0">
                                  May 11, 2025
                                </small>
                              </div>
                            </div>
                            <small className="fs_14 mt-4 d-flex align-items-center ff fw-normal clr_gray mb-0">
                              Thank You for your amazing feedback. Your
                              appreciation is our fuel to Motivation.{" "}
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
                              I just read this blog and it was amazing! The
                              details were clear and easy to understand. I will
                              definitely be reading more blogs again. Thank You
                              Blogger for sharing!
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
                          </div> */}
                                      </Col>
                                    </>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <p className="py-4">No Comments Available</p>
                              </>
                            )}

                            <p className=" fs_16 fw-bold text-center my-4 ">
                              Load More
                            </p>
                          </Row>
                        </>
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  className="mt-4 mt-lg-0 border-start  ps-lg-4"
                >
                  <h5 className="mb-3 fs_30 fw-bold">Popular Posts</h5>
                  {popularposts?.length > 0 ? (
                    <>
                      {" "}
                      {popularposts?.map((item: any, index: any) => {
                        const { month, day } = formatDate(item?.createdAt);
                        return (
                          <div key={index}>
                            <Link
                              className=" tdn text-black"
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
                                      {item?.categoryId?.name || "--"}
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
                  <h5 className="mt-4 fs_30 fw-bold">
                    Latest & Trending Posts
                  </h5>
                  {latestposts?.length > 0 ? (
                    <>
                      {" "}
                      {popularposts?.map((item: any, index: any) => {
                        const { month, day } = formatDate(item?.createdAt);
                        return (
                          <div key={index}>
                            <Link
                              className=" tdn text-black"
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
                                      {item?.categoryId?.name || "--"}
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
                    "No Latest Post Found"
                  )}
                  {/* <Card className="mt-4 border-0">
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
            </Card> */}
                </Col>
              </Row>
            </Container>
            <Col md={9} className="pe-5">
              <div
                style={{ border: "1px solid #eee7e7" }}
                className=" mb-3 "
              ></div>
            </Col>
          </>
        )}
      </div>
    </>
  );
};

export default BlogDetailHeroSection;
