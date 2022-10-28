import React, { useState } from "react";
import "./Popupscss.css";
import dashblur from './images/dashblur.jpeg'
import {IoIosRadioButtonOn} from 'react-icons/io'
import {IoMdRadioButtonOn} from "react-icons/io"
import {ImRadioUnchecked} from 'react-icons/im'
import { IoMdRadioButtonOff } from "react-icons/io";
import {Link} from 'react-router-dom'
function EmailVer() {
  const [Style, setStyle] = useState("none");
  const [clicked,setclick] = useState(false);
   const [back, setback] = useState("none");
   const [set, notset] = useState(false);
  const click= () => {
       setclick(clicked ? false: true);
  }
 const [clicked1, setclick1] = useState(false);
 const click1 = () => {
   setclick1(clicked1 ? false : true);
 };
  const [clicked2, setclick2] = useState(false);
  const click2 = () => {
    setclick2(clicked2 ? false : true);
  };
   const [clicked3, setclick3] = useState(false);
   const click3 = () => {
     setclick3(clicked3 ? false : true);
   };
  const clickbtn = () => {
    setStyle("flex");
     setback("blur(8px)");
  };
  const clickbtnn = () => {
    setStyle("none");
     setback("none");
  };

  return (
    <div>
      <div className="btr" style={{ filter: back }}>
        <img src={dashblur} style={{ height: "100vh", width: "100%" }} />
       
      </div>
      <div className="App-1" style={{ marginTop:'5%' }}>
        <div className="content-ver">
          <p className="heading--2">
            What will you mainly use{" "}
            <span style={{ color: "#E0791B" }}> Kaaryalay </span> for ?
          </p>

          <div className="child-1-2" style={{ marginTop: "8%" }}>
            <p className="child-1-1 ">
              <div className="content--1">
                <div style={{ display: "flex" }}>
                  <p
                    onClick={click}
                    style={{
                      alignItems: "center",
                      marginTop: "3%",
                    }}
                  >
                    {" "}
                    {clicked ? (
                      <IoIosRadioButtonOn
                        style={{
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    ) : (
                      <IoMdRadioButtonOff
                        style={{
                          alignItems: "center",
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    )}
                  </p>

                  <div>
                    <h3
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        marginTop: "2%",
                      }}
                      className="ver-1"
                    >
                      Onboard New Employees
                    </h3>

                    <p
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        position: "relative",
                        top: "-10%",
                      }}
                    >
                      I want to onboard new employees in a consistent and
                      systematic way.
                    </p>
                  </div>
                </div>
              </div>
            </p>
            <p className="child-1-1 ">
              <div className="content--1">
                <div style={{ display: "flex" }}>
                  <p
                    onClick={click3}
                    style={{
                      alignItems: "center",
                      marginTop: "3%",
                    }}
                  >
                    {" "}
                    {clicked3 ? (
                      <IoIosRadioButtonOn
                        style={{
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    ) : (
                      <IoMdRadioButtonOff
                        style={{
                          alignItems: "center",
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    )}
                  </p>

                  <div>
                    <h3
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        marginTop: "2%",
                      }}
                      className="ver-1"
                    >
                      Onboard New Employees
                    </h3>

                    <p
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        position: "relative",
                        top: "-10%",
                      }}
                    >
                      I want to onboard new employees in a consistent and
                      systematic way.
                    </p>
                  </div>
                </div>
              </div>
            </p>
            <p className="child-1-1 ">
              <div className="content--1">
                <div style={{ display: "flex" }}>
                  <p
                    onClick={click1}
                    style={{
                      alignItems: "center",
                      marginTop: "3%",
                    }}
                  >
                    {" "}
                    {clicked1 ? (
                      <IoIosRadioButtonOn
                        style={{
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    ) : (
                      <IoMdRadioButtonOff
                        style={{
                          alignItems: "center",
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    )}
                  </p>

                  <div>
                    <h3
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        marginTop: "2%",
                      }}
                      className="ver-1"
                    >
                      Onboard New Employees
                    </h3>

                    <p
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        position: "relative",
                        top: "-10%",
                      }}
                    >
                      I want to onboard new employees in a consistent and
                      systematic way.
                    </p>
                  </div>
                </div>
              </div>
            </p>
            <p className="child-1-1 ">
              <div className="content--1">
                <div style={{ display: "flex" }}>
                  <p
                    onClick={click2}
                    style={{
                      alignItems: "center",
                      marginTop: "3%",
                    }}
                  >
                    {" "}
                    {clicked2 ? (
                      <IoIosRadioButtonOn
                        style={{
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    ) : (
                      <IoMdRadioButtonOff
                        style={{
                          alignItems: "center",
                          width: "26px",
                          height: "26px",
                          color: "#003666",
                        }}
                      />
                    )}
                  </p>

                  <div>
                    <h3
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        marginTop: "2%",
                      }}
                      className="ver-1"
                    >
                      Onboard New Employees
                    </h3>

                    <p
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        position: "relative",
                        top: "-10%",
                      }}
                    >
                      I want to onboard new employees in a consistent and
                      systematic way.
                    </p>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="btn--9">
            <Link to="/Validations" style={{ width: "50%" }}>
              <button
                onClick={clickbtnn}
                className="button--2"
                style={{ width: "100%" }}
              >
                Continue{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVer;
