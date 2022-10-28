import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import publishh from "./images/Drop down.png";
import jobs from "./images/jobs.png";
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Dropdown from "react-bootstrap/Dropdown";
import Recruitdetails from "./Recruitdetails";
import jobicon from "./images/Mask group.png";
import Header from "./Header";
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from "./RecrutimentPos";
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import b from "./images/B.png";
import i from "./images/I.png";
import u from "./images/U.png";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from "react-bootstrap/Button";
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import "./main.css";
import Maskjob4 from "./images/Mask group--1.png";
import { BsClockHistory } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Comment from "./Comment";
import Activity from "./Activity";
import Profiledetails from "./Profiledetails";
import Evaluatedata from "./Evaluatedata";

function RecrutmentMain() {
  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");

  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);

  const showdata = (e) => {};
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
      for (let user of myArray) {
        let li = document.createElement("li");
        li.innerText = user;

        ul.appendChild(li);
        document.getElementById("freeform").value += li.innerText;
      }
    }
  };
  const changeStyles = (e) => {
    if (e.target.id == "bold") {
      var k = document.getElementById("freeform");
      if (k.style.fontWeight == "bold") {
        k.style.fontWeight = "none";
        console.log(k.style.fontWeight);
      } else {
        console.log("ues");
        k.style.fontWeight = e.target.id;
      }
    }
    if (e.target.id == "italic") {
      var k = document.getElementById("freeform");
      if (k.style.fontStyle == "italic") k.style.fontStyle = "none";
      else {
        console.log("ues");
        k.style.fontStyle = e.target.id;
      }
    }
    if (e.target.id == "underline") {
      var k = document.getElementById("freeform");
      if (k.style.textDecoration == "underline")
        k.style.textDecoration = "none";
      else {
        console.log("ues");
        k.style.textDecoration = e.target.id;
      }
    }
  };
  const [back, setback] = useState("none");
  const [dec, setdec] = useState(false);
  const clickbtn = () => {
    setdec(true);
    setback("blur(8px)");
  };
  const clickbtnn = () => {
    setdec(false);
    setback("none");
  };
  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");

  const showsearch = () => {
    setopac("0.1");
  };
  const showicon = (e) => {
    if (data) {
      setdata(false);
    } else {
      setdata(true);
      setopac("10");
    }
  };

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <div onClick={showsearch} className="main-block1">
            <div className="block" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="search-bar"
                style={{ opacity: opac }}
              />

              <input
                type="search"
                placeholder="           search"
                style={{ width: "60%" }}
                className="rec-search"
                onClick={showicon}
              />
              <div className="bag">
                <Link>
                  <div>
                    <img src={jobs} className="bag-icon" />
                  </div>
                </Link>
              </div>
              <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                <Link>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={candidate} className="bag-icon-1" />
                    <p
                      style={{
                        fontSize: "9px",
                        marginLeft: "8%",
                        color: "#003666",
                        textDecoration: "none",
                      }}
                    >
                      candidate
                    </p>
                  </div>
                </Link>
              </div>
              <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                <Link>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={setting} className="bag-icon-2" />
                    <p
                      style={{
                        fontSize: "9px",
                        marginLeft: "18%",
                        color: "#003666",
                        textDecoration: "none",
                      }}
                    >
                      settings
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className="digital"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="digital-2">
          <p className="digital-1">Digital Marketing Executive</p>
        </div>
        <div className="digital-3" style={{ display: "flex" }}>
          <div
            className="rec-drop"
            style={{ marginRight: "10%", position: "relative", left: "0%" }}
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "0%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                    width: "100%",
                  }}
                  className="rec-tog"
                >
                  Publish
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
          </div>
          <div className="new-job" onClick={clickbtn} style={{ width: "100%" }}>
            <div div className="user-job" style={{ width: "200px" }}>
              <div>
                {" "}
                <img
                  src={Maskjob4}
                  style={{ marginLeft: "15px", marginTop: "10px" }}
                />
              </div>
              <div className="post">
                <p>NEW JOB POST</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              marginTop: "5%",
            }}
            className="icons-div"
          >
            <BsClockHistory
              style={{
                height: "22px",
                width: "22px",
                marginLeft: "1%",
                color: "#003666",
              }}
            />
            <FaRegEdit
              style={{
                height: "22px",
                marginLeft: "15%",
                width: "22px",
                color: "#003666",
              }}
            />
            <RiDeleteBin6Line
              style={{
                height: "22px",
                width: "22px",
                marginLeft: "10%",
                color: "#003666",
              }}
            />
          </div>
        </div>
      </div>
      <div className="rec-col">
        <div
          className="rec-col-1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="rec-col-2">
            <p className="rec-col-p">Applied</p>
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">Screening</p>
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">1st Interview</p>
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>{" "}
            <div className="rec-col-3">
              <p>Vishal</p>
            </div>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">2nd Interview</p>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">Offered</p>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">Hired</p>
          </div>
          <div className="rec-col-2">
            <p className="rec-col-p">Rejected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecrutmentMain;
