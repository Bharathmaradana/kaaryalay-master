import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "./images/logo 1.png";
import { TextField } from "@mui/material";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Button from "react-bootstrap/Button";
import { IoMdRadioButtonOff } from "react-icons/io";
import ellipse from "./images/icons8-round-50.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Forgetpsd() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-end">
            <img src={logo} className="img-fluid" />
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="text-center">
            <h1 className="psd-1 text-center">
              <span>Reset</span> Your Password
            </h1>
            <h5 className="psd-2 text-center">
              Your new password must be different from{" "}
              <span style={{ color: "#E0791B" }}>old </span>password.
            </h5>
            <Row>
              <Col>
                <div className="psd-div">
                  <TextField
                    className="textfield"
                    id="standard-password-input"
                    label="New Password"
                    type={passwordShown ? "text" : "password"}
                    placeholder="*******"
                    autoComplete="current-password"
                    variant="standard"
                  />
                  <i onClick={togglePasswordVisiblity} className="psd-eye">
                    {passwordShown ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <div className="psd-div1">
                  <TextField
                    className="textfield1"
                    id="standard-password-input"
                    label="Current Password"
                    type={passwordShown1 ? "text" : "password"}
                    placeholder="*******"
                    autoComplete="current-password"
                    variant="standard"
                  />

                  <i onClick={togglePasswordVisiblity1} className="psd-eye1">
                    {passwordShown1 ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <Link to="/Createacc" style={{ width: "50%" }}>
                  <button
                    className="button--2"
                    style={{
                      width: "40%",
                      marginTop: "10%",
                      marginLeft: "15%",
                    }}
                  >
                    Reset Password{" "}
                  </button>
                </Link>
              </Col>
              <Col sm={2}>
                <div className="box-psd">
                  <h4 style={{ marginTop: "8%", color: "#E0791B" }}>
                    Please use at least
                  </h4>
                </div>
                <div className="box-psd-1">
                  <div className="rest">
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 8
                      Characters
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      Upper Case
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      Number
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      lowercase letter
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> No
                      Leading Spaces
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forgetpsd;
