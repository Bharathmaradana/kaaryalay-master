import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import logo from './images/logo 1.png'
import otpimg from "./images/Enter OTP-pana (1) 1.png";
import OtpInput from "otp-input-react";
import './App.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
function Validations() {
    
     const [otp, setOtp] = useState("");
     const preventDefault = (event) => event.preventDefault();
  return (
    <Container>
      <Row>
        <Col className="text-end">
          <img src={logo} className="img-fluid otp-logo" />
        </Col>
      </Row>
      <Row className="otp">
        <Col className="text-center">
          <img src={otpimg} className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>
            <span>OTP</span> Verification
          </h1>
          <h6>
            Enter your verification Code at <span>Email id</span>
          </h6>
          <p className="ver-code">Verification Code</p>
          <OtpInput
            value={otp}
            onChange={(otp) => {
              console.info(otp);
              setOtp(otp);
            }}
            className="otp-dash"
            numInputs={4}
            isInputNum
          />
          <Link to="/Emailsuc">
            <button className="sub">submit</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Validations