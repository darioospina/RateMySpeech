import React from "react";
import { Link } from "react-router-dom";
export function Questionary
() {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-5 m-auto">
          <div className="mt-3" >
            <div className="card text-left">
              <div
                className="card-body"
                
              >
                <form>
                  <h1
                    className=""
                  
                  >
                    Your Feedback
                  </h1>
                  <h2>
                    Please rate the aspects of the speech 
                    
                  </h2>
                  <div className="form-group my-3">
                    <label htmlFor="">
                      {" "}
                      <b>1.Length of speech</b> 
                    </label>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="length"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="Lenght">Poor</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="good"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="good">Good</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="vg"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="vg">Very Good</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="radio"
                        id="excellent"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                      <br />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      {" "}
                      <b>Content of the Speech</b>
                    </label>
                    <br />
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="length"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="Lenght">Poor</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="good"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="good">Good</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="vg"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="vg">Very Good</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="radio"
                        id="excellent"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                      <br />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">
                      {" "}
                      <b>Vocabulary of Speech ?</b> 
                    </label>
                    <br />
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="length"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="Lenght">Poor</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="good"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="good">Good</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="vg"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="vg">Very Good</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="radio"
                        id="excellent"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                      <br />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">
                      {" "}
                      <b>Pace of the speaker</b>
                    </label>
                    <br />
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="length"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="Lenght">Poor</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="good"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="good">Good</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="vg"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="vg">Very Good</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="radio"
                        id="excellent"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                      <br />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="">
                      {" "}
                      <b>5.</b> Overall Speech
                    </label>
                    <br />
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="length"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="Lenght">Poor</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="good"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="good">Good</label>
                    </div>
                    <div className="mx-2">
                      {" "}
                      <input
                        type="radio"
                        id="vg"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="vg">Very Good</label>
                    </div>
                    <div className="mx-2">
                      <input
                        type="radio"
                        id="excellent"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                      <br />
                    </div>
                  </div>
                  <button
                  type="next"
                  className="btn btn-primary"
                  style={{backgroundColor:"gold", textDecoration:"none"}}

                >
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/comments"
                    style={{color:"black"}}
                  >
                    Save
                  </Link>
                </button>
                 


                </form>
                <center>
                  <span className="badge badge-pill disabled"></span>
                  <span className="badge badge-pill badge-primary"></span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
