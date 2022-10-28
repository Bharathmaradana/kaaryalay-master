import Container from 'react-bootstrap/Container'
import React,{useState} from 'react'
import './signupcss.css'
import { Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'
import mainpic from './images/Reset password-pana.png'
import Button from 'react-bootstrap/Button'
import logo from './images/logo 1.png'
import Form from 'react-bootstrap/Form'
import hidden from './images/hidden 1.png'
import visible from './images/view (1).png'
import Role from './Role'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
const eye = <FontAwesomeIcon icon={faEye} />;
const hiddeneye = (
  <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
);
function Signup() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password:"",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
  return (
    <div className="mt-1 top">
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo-1 img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="mt">
            <div className="mt-2">
              <h1 className="sign-up">
                <span className="sign-up" style={{ color: "#E0791B" }}>
                  Set up
                </span>{" "}
                your account!
              </h1>
              <p className="sign-up-p" style={{ marginTop: "3%" }}>
                Hello! Create your account to manage
                <span>
                  <br />
                </span>
                your work at <span>Kaaryalay</span>
              </p>
            </div>
            <div className="mt-3">
              <form className="mt-4 text-center">
                <TextField
                  className="mt-5"
                  id="standard-password-input"
                  label="User Name"
                  type="text"
                  value={contactInfo.name}
                  autoComplete="current-password"
                  variant="standard"
                />

                <TextField
                  className="mt-5"
                  id="standard-email-input"
                  label="Email Address"
                  type="email"
                  value={contactInfo.email}
                  autoComplete="current-password"
                  variant="standard"
                />

                <div className="pass-wrapper">
                  <TextField
                    className="input"
                    id="standard-password-input"
                    label="Password"
                    placeholder="**********"
                    value={contactInfo.password}
                    type={passwordShown ? "text" : "password"}
                    autoComplete="current-password"
                    variant="standard"
                  />
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>

                <TextField
                  className="mt-5"
                  id="standard-password-input"
                  label="Mobile Number"
                  type="number"
                  value={contactInfo.phonenumber}
                  autoComplete="current-password"
                  variant="standard"
                />

                <Link
                  to="/Role"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <button className="button--1" style={{ marginTop: "13%",width:'100%' }}>
                    Signup{" "}
                  </button>
                </Link>

                <div className="mt-6">
                  <Form.Check aria-label="option 1" />
                  <p style={{ marginLeft: "2%" }}>
                    I agree <span>Terms of Services</span> and{" "}
                    <span>Privacy Policy</span>
                  </p>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <img src={mainpic} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup