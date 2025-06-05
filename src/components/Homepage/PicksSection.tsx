"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Image from "next/image";

const PicksSection = (picks: any) => {
  const [picksData, setPicksData] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://newtopics-blogger.s3.ap-south-1.amazonaws.com/";
  useEffect(() => {
    setPicksData(picks?.picks);
    setLoading(false);
  }, [picks]);

  // console.log("Image URL:", picks?.picks[0].image);

  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4">Today’s Picks</h3>
      </Container>
      <div style={{ border: "1px solid #eee7e7" }} className=" my-4"></div>
      {loading ? (
        <Container className="d-flex justify-content-center py-5">
          <Spinner animation="border" className="text-black" />
        </Container>
      ) : (
        <Container>
          <Row>
            {picksData?.length > 0 ? (
              <>
                {" "}
                {picksData?.map((item: any, index) => (
                  <Col key={item.id || index} md={6} lg={3} className="mb-4">
                    <div className="h-100 rounded-3 border p-3">
                      {item?.image && (
                        <Image
                          width={200}
                          height={200}
                          src={`${BASE_URL}${item.image}`}
                          className="rounded w-100 object-fit-cover"
                          alt="siderImg1"
                        />
                      )}
                      <Card.Body className="px-0 mt-3">
                        <p className="text-muted fs_14 fw-normal small mb-1">
                          By {item?.categoryId?.name || ""}
                        </p>
                        <h4
                          className=" fw-bold mt-2 "
                          style={{ fontSize: "17px" }}
                        >
                          {item.title || ""}
                        </h4>
                        <Card.Text
                          className="text-muted mt-3 blog-description fs_14 fw-normal"
                          dangerouslySetInnerHTML={{
                            __html: item.description || "",
                          }}
                        />
                      </Card.Body>
                    </div>
                  </Col>
                ))}
              </>
            ) : (
              <p className="mb-4">No Data found</p>
            )}
          </Row>
        </Container>
      )}

      <div style={{ border: "1px solid #ccc" }} className=""></div>
    </section>
  );
};

export default PicksSection;
