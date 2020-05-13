import React from "react";
import logo from "./images/logo2.png";

export const Open = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1">
            <h3>Senior Tail-Wagger</h3>
            <p className="lead">
              Finding a loving safe home for abandoned senior dogs in western
              Washington
            </p>
            {/* <p><a href="#" class="btn btn-primary shadow mr-2">Discover More</a><a href="#" class="btn btn-outline-primary">Some another action</a></p> */}
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <img src={logo} alt="..." className="img-fluid" width="100px" />
          </div>
        </div>
      </div>
    </section>
  );
};
