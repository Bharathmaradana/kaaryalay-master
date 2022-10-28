import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import Activity from "./Activity";
import Profiledetails from "./Profiledetails";

import { Dropdown } from "react-bootstrap";
import Commentdata from "./Commentdata";

function Evaluate() {
  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);

  const showdata = (e) => {};
  return (
    <div style={{ overflow: "auto" }} className="upload-back">
      <Offcanvas
        show="true"
        onHide={handleClose}
        placement="end"
        className="off-canvas"
      >
        <div className="circle-nav"></div>
        <div className="pro-1">
          <div className="pro-2">
            <img
              src={profileimg}
              className="img-fluid pro-img"
              style={{ height: "125px", width: "125px" }}
            />
            <div className="pro-det">
              <p>Full Name = {name}</p>
              <p style={{ marginTop: "-6%" }}>Phone Number = {number}</p>
              <p style={{ marginTop: "-6%" }}>Email Address = {email}</p>
            </div>
            <div className="pro-btn">
              <Dropdown
                className="bas-rec-down"
                style={{ border: "none", outline: "none" }}
              >
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="rec-tog"
                >
                  Move To
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <button
                className="button--1"
                style={{
                  marginTop: "40%",
                  marginLeft: "20%",
                  width: "100%",
                  background: "#E0791B",
                }}
              >
                Applied
              </button>
            </div>
          </div>
        </div>
        <div className="pro-3" style={{ height: "100%" }}>
          <div className="pro-4" style={{ display: "flex" }}>
            <div className="pro-5">
              <ul className="pro-ul">
                <li className="pro-li" id="li-1" onClick={showdata("profile")}>
                  <Link to="/common">
                    <a href="#">PROFILE</a>
                  </Link>
                </li>
                <li className="pro-li-1" onClick={showdata("Evaluatedata")}>
                  <Link to="/Evaluate">
                    <a href="#">EVALUATE</a>
                  </Link>
                </li>
                <li className="pro-li-1" onClick={showdata("Evaluatedata")}>
                  <Link to="/comment">
                    <a href="#">COMMENTS</a>
                  </Link>
                </li>
                <li className="pro-li-1" onClick={showdata("Activitydata")}>
                  <Link to="/Activity">
                    <a href="#">ACTIVITY</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pro-6">
              <Commentdata />
            </div>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Evaluate;
