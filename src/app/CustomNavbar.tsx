"use client";
import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const CustomNavbar = () => {
  return (
    <div className="py-3 bg-white">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className=" mb-2 fs-2 fw-normal">Blogger</h3>
          <InputGroup
            className="rounded-pill bg-light"
            style={{ maxWidth: "1100px" }}
          >
            <Form.Control
              placeholder="Search"
              className="border-0 px-4 bg-light rounded-pill"
              style={{ height: "40px" }}
            />
            <InputGroup.Text className="bg-light border-0 rounded-end-pill pe-3">
              <FiSearch className="text-muted" />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default CustomNavbar;
