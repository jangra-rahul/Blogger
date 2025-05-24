"use client";
import Link from "next/link";
import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const CustomNavbar = () => {
  return (
    <div className="py-3 bg-white">
      <Container>
        <div className="d-flex gap-5 justify-content-between align-items-center">
          <Link className=" text-decoration-none text-black" href="/">
            {" "}
            <h3 className=" mb-2 fs-2 fw-normal">Blogger</h3>
          </Link>

          <InputGroup
            className="rounded-pill d-md-flex d-none bg-light"
            style={{ maxWidth: "1100px" }}
          >
            <Link
              className=" text-decoration-none w-100 d-flex text-black"
              href="/search"
            >
              <Form.Control
                placeholder="Search"
                className="border-0 px-4 bg-light rounded-pill"
                style={{ height: "40px" }}
              />
              <InputGroup.Text className="bg-light border-0 rounded-end-pill pe-3">
                <FiSearch size={20} className="text-muted" />
              </InputGroup.Text>
            </Link>
          </InputGroup>

          <Link
            className=" text-decoration-none d-md-none d-block text-black"
            href="/search"
          >
            <FiSearch size={20} className="text-muted " />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CustomNavbar;
