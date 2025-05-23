import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="pt-5">
      <Container className="text-center py-4 pb-5">
        <h3 className="fw-normal text-uppercase fs_40 mb-0">
          Cut through the noise.
        </h3>
        <p className="fw-normal fs_14 clr_gray mb-0 mt-3">
          We write what matters. You read what moves you. It's that simple.
        </p>
      </Container>
      <div className="border"></div>
      <Container>
        <div className="d-sm-flex my-4 align-items-center justify-content-between">
          <ul className="ps-0 mb-0 pb-0 justify-content-center justify-content-sm-start d-flex align-items-center gap-3 ">
            <li className="fs_14 clr_gray ">About us</li>
            <li className="fs_14 clr_gray ">Contact us</li>
            <li className="fs_14 clr_gray ">Privacy Policy</li>
          </ul>
          <p className="mb-0 fs_14 text-sm-start text-center mt-3 mt-sm-0 clr_gray">
            Copyright © 2025 • Blogger
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
