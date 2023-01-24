import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Details from "../page/Details";
import Home from "../page/Home";
export default function Header() {
  return (
    <>
      <section className="bg-light py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start">
              Welcome to Open Shop
            </div>

            <div className="col-lg-6 text-lg-end text-center">
              <i
                className="fa fa-facebook-official fa-lg"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </section>

      <header className="py-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
             
              <Link to={`/`}>
                <img src={require("../asset/img/Lg.webp")} />
              </Link>
            </div>

            <div className="col-lg-6">
              <form className="d-flex position-relative" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-success position-absolute bottom-0 end-0"
                  type="submit"
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="col-lg-3 text-lg-end">
              <div className="d-flex align-items-center">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <p className="ps-4">
                  Call To +1800090098 <br />
                  Email : Info@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav
        class="navbar navbar-expand-lg bg-dark navbar-dark"
        style={{ marginTop: "11px" }}
      >
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Shop
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Upgrade to Pro
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Pro
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Premium
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Details/:id/:title" element={<Details />} />
    </Routes>
      
    </>
  );
}
