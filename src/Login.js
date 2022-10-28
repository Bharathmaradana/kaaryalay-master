import Container from "react-bootstrap/Container";
import React,{useState} from "react";
import "./logincss.css";
import { Col, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import mainpic from "./images/hiring-manager-quantumhunts 1.png";
import Button from "react-bootstrap/Button";
import logo from "./images/logo 1.png";
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom'
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import logingif from './images/a.gif'
const eye = <FontAwesomeIcon icon={faEye} />;
function Login() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
  return (
    <div className="st-1 top">
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo-2 img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="st justify-content-center">
            <div className="st-2">
              <h1
                className="text-start login-text"
                style={{ color: "#003666", marginBottom: "10%" }}
              >
                Log In
              </h1>
              <p className="text-start login-text-1">
                <span>Welcome </span>
                back! <br />
                <p style={{ marginTop: "3%" }}>
                  Please enter <span>Email </span>and
                  <span> Password</span>
                </p>
              </p>
            </div>
            <div className="st-3">
              <form className="st-4">
                <div class="form-group">
                  <label
                    for="exampleInputEmail1 forg-psd"
                    style={{ marginTop: "6%", fontSize: "20px" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control inpt "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    style={{
                      marginTop: "3%",
                      backgroundColor: "#F2F5FF",
                      borderRadius: "12px",
                      height: "3rem",
                      width: "100%",
                    }}
                  />
                </div>
                <div class="form-group wrapper">
                  <label
                    for="exampleInputPassword1"
                    style={{ marginTop: "6%" }}
                    className="forg-psd"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    class=" intp form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{
                      marginTop: "3%",
                      backgroundColor: "#F2F5FF",
                      borderRadius: "12px",
                      height: "3rem",
                      width: "100%",
                    }}
                  />
                  <i onClick={togglePasswordVisiblity} className="eye-logo">
                    {passwordShown ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <div class="fm-1">
                  <Link to="/Forgetpsd">
                    <label
                      class="form-check-label forget-txt"
                      for="exampleCheck1"
                    >
                      Forget Your
                      <span style={{ color: "#E0791B" }}> Password</span>
                    </label>
                  </Link>
                </div>
                <Link
              to="/Emailver"
              style={{ width: "100%" }}
              
            >
              <button
               
                className="button--2"
                style={{ width: "100%",marginTop:'10%' }}
              >
                Login{" "}
              </button></Link>
                <div style={{ marginTop: "12%", marginLeft: "12%" }}>
                  <small className="text-center  dont-txt">
                    Don’t have an account?
                    <Link to="/Signup">
                    
                      <a href="#">
                       
                        <span style={{ color: "#E0791B" ,textDecoration:'none',listStyle:'none'}}> Sign Up</span>
                      </a>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </Col>
          <Col className="text-center f-1">
            <img src={logingif} className="img-fluid img-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
