// import React, { useState } from "react";
// import { Row, Col, Container } from "react-bootstrap";
// import "./App.css";
// import { Link } from "react-router-dom";
// import logo from "./images/logo 1.png";
// import { TextField } from "@mui/material";
// import hidden from "./images/hidden 1.png";
// import visible from "./images/view (1).png";
// import Button from "react-bootstrap/Button";
// import ellipse from "./images/Ellipse 13.png";
// import vector from "./images/Vector.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import arrow from "./images/Vector1.png";

// function Createacc() {
//   return (
//     <div className="top">
//       <Container>
//         <Row>
//           <Col className="text-end">
//             <img src={logo} className="img-fluid" />
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center">
//             <h2 style={{ marginTop: "8%" }} className="create-acc-text-1">
//               <span style={{ color: "#E0791B" }}>Forgot</span> Your Password?{" "}
//             </h2>

//             <h4 style={{ marginTop: "2%" }} className="create-acc-text-2">
//               Hello! Create your account to manage your work at Kaaryalay
//             </h4>
//             <div className="psd-div-acc">
//               <TextField
//                 className="textfield-acc"
//                 id="standard-password-input"
//                 label="Email Address"
//                 type="email"
//                 placeholder="john@gmail.com"
//                 autoComplete="current-password"
//                 variant="standard"
//               />
//             </div>
//             <Link to="/Createacc" style={{ width: "50%" }}>
//               <button
//                 className="button--2"
//                 style={{ width: "40%", marginTop: "10%" }}
//               >
//                 Reset Password{" "}
//               </button>
//             </Link>
//           </Col>
//         </Row>
//         <div>
//           <Link to="/" className="back">
//             <img src={arrow} className="bk-lg" />
//             <h5 className="bk-lg-1">
//               Back to <span>Login</span>
//             </h5>
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Createacc;
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import logo from "./images/logo 1.png";
import { TextField } from "@mui/material";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Button from "react-bootstrap/Button";
import ellipse from "./images/Ellipse 13.png";
import vector from "./images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrow from "./images/Vector1.png";

function Createacc() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-end">
            <img src={logo} className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2 style={{ marginTop: "8%" }}>
              <span style={{ color: "#E0791B" }}>Forgot </span>{" "}
              <span style={{ color: "#003666" }}>Your Password? </span>
            </h2>

            <h4 style={{ marginTop: "2%" }}>
              <span style={{ color: "#003666" }}>
                Hello! Create your account to manage your work at Kaaryalay
              </span>
            </h4>
            <div className="psd-div-acc">
              <TextField
                className="textfield-acc"
                id="standard-password-input"
                label="Email Address"
                type="email"
                placeholder="john@gmail.com"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            <Link to="/Resetpsd">
              <Button className="btn--2 text-center"> Continue </Button>
            </Link>
          </Col>
        </Row>
        <div>
          <Link to="/" className="back">
            <img src={arrow} className="bk-lg" width={"20px"} height="20px" />
            <h5 className="bk-lg-1">
              <span style={{ color: "#003666" }}>Back to Login</span>
            </h5>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Createacc;
