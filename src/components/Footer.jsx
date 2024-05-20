import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div  className="container-fluid mt-5 w-100 text-bg-primary ">
      <div className="d-lg-flex justify-content-between">
        <div style={{ width: "400px" }} className="intro ps-5 ">
          <h5 className="py-2">
            <i className="fa-solid fa-truck-fast"></i> FF Store
          </h5>
          <p>
            Designed and built with all the love in the world by Luminar team
            with the help of our contributors
          </p>
          <p>Code Licensed Luminar, docs CC by 3.0</p>
          <p>Currently v1.0.0</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className="py-2">Links</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link to={"/Cart"} style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>
          <Link
            to={"/Wishlist"}
            style={{ textDecoration: "none", color: "white" }}
          >
           Wishlist
          </Link>
        </div>
        <div className="Guides d-flex flex-column">
          <h5 className="py-2">Guides </h5>
          <a
            href="https://react.dev/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React JS
          </a>
          <a
            href="https://reactrouter.com/en/main"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React Routing
          </a>
          <a
            href="https://react-bootstrap.github.io/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React Bootstrap
          </a>
        </div>
        <div className="Contact d-flex flex-column pe-3">
          <h5 className="py-2">Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
             placeholder="Email id Please"
              className="form-control "
            />
            <button className="btn btn-primary ms-2">
              <i className="fa-solid fa-arrow-right "></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-twitter text-white"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-facebook text-white"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-instagram text-white"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-white"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-github text-white"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-solid fa-phone text-white"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <p>Copyright © 2024 Store Luminar Jan24 Batch. Built with React.</p>
      </div>
    </div>
  );
}

export default Footer;
