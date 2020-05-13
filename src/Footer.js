import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5>Bootstrap 101</h5>
              <ul className="contact-info list-unstyled">
                <li>
                  <a href="mailto:sales@landy.com" className="text-dark">
                    hello@bootstrap101.com
                  </a>
                </li>
                <li>
                  <a href="tel:123456789" className="text-dark">
                    +00 123 456 789
                  </a>
                </li>
              </ul>
              <p className="text-muted">
                Laborum aute enim consectetur eu laboris commodo.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5>Pages</h5>
              <ul className="links list-unstyled">
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Nisi in commodo
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    reprehenderit
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Nostrud
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Et eu eu
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5>Favourites</h5>
              <ul className="links list-unstyled">
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Minim labore nulla
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Nulla qui nisi
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Iris Vor Arnim
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="text-muted">
                    Consectetur cupidatat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-center text-md-left">
              <p className="mb-md-0">
                &copy; 2018 Your company. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-md-5 text-center text-md-right">
              <p className="mb-0">
                Template By{" "}
                <a
                  href="https://bootstrapious.com/"
                  className="external text-white"
                >
                  Bootstrapious
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
