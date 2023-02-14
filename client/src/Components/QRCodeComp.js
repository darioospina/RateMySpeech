
import React, { Component } from "react";
// import Details from "./Details";
// import Questions from "./Questions";
import { Link } from "react-router-dom";

export class QRCodeComp extends Component {
  render() {
    return (
      <>
          <div className="container" >
          <button type="next" className="btn btn-primary my-3">
            <Link className="nav-link active" aria-current="page" to="/details">Click To Start The Survey</Link>
                  </button>
          </div>
      </>
    );
  }
}
