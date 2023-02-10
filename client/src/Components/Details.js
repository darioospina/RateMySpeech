import React from "react";
import { Link } from "react-router-dom";

export function Details() {
  return (
    <div className="container-fluid">
      <div className="col-md-5 m-auto" style={{ fontFamily: "monospace" }}>
        <div className="">
          <div className="">
            <div className="card-body">
              <form>
                <h1 className="">Personal Details</h1>

                <div className="form-group">
                  <label htmlFor="">
                    {" "}
                    <h2>Name</h2>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder=""
                    autoComplete="off"
                    style={{ padding: "1%" }}
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="">
                    {" "}
                    <h2>E-Mail</h2>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder=""
                    autoComplete="off"
                    style={{ padding: "1%" }}
                  />
                </div>
                <br />
                <button
                  type="next"
                  className="btn btn-primary"
                  style={{backgroundColor:"gold", textDecoration:"none"}}

                >
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/questions"
                    style={{color:"black"}}
                  >
                    Next
                  </Link>
                </button>
              </form>
              <center>
                <span className="badge badge-pill disabled">1</span>
                <span className="badge badge-pill badge-primary"></span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
