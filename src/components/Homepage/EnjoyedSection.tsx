import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const EnjoyedSection = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className=" justify-content-center">
          <Col md={8}>
            <div className="card text-center p-sm-5 p-3">
              <div className="py-4">
                <h4 className="fw-bold mb-0">Enjoyed the read?</h4>
                <p className=" mb-0 fs_14 clr_gray mt-3">
                  Be the first to get every new article delivered straight to
                  your inbox.{" "}
                </p>
                <div className="mt-4 d-flex rounded-5 bg-white border py-2 px-2 ps-4">
                  <input
                    type="email"
                    className=" border-0 w-100"
                    placeholder="Your email address"
                  />
                  <button className="px-3 py-2 d-md-block d-none rounded-5 text-white bg-black border-0">
                    Subscribe
                  </button>
                </div>
                <button className="px-3 py-2 d-md-none mt-3 w-100 d-block rounded-5 text-white bg-black border-0">
                  Subscribe
                </button>
                <p className=" mb-0 fs_14 clr_gray mt-3">
                  By signing up, you agree to our user agreement, and
                  acknowledge our privacy policy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EnjoyedSection;
