import React, { useState } from "react";
import arrowimg from "./images/download 5.png";
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/jobs.png";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";

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


function EmailTemplate() {
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

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />

      <Row>
        <Col>
          <div onClick={showsearch} className="main-block1">
            <div className="block" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="search-bar1"
                style={{ opacity: opac }}
              />
              <input
                type="search"
                placeholder="        search"
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
      <div style={{ display: "flex", width: "100%" }} className="rec-select">
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "10%", position: "relative", left: "1%" }}
        >
          <p>Hiring Workflow</p>
        </div>
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "5%", position: "relative", left: "0%" }}
        >
          <p>Tags & sources</p>
        </div>
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "5%", position: "relative", left: "0%" }}
        >
          <p style={{ color: "#E0791B" }}>Email Templates</p>
        </div>

        <div
          className="new-job"
          style={{ marginLeft: "5%", position: "relative", left: "0%" }}
          onClick={clickbtn}
        >
          <div div className="user-job">
            <div>
              {" "}
              <img
                src={Maskjob4}
                style={{ marginLeft: "15px", marginTop: "10px" }}
              />
            </div>
            <div className="post">
              <p>NEW SOURCE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Email-1">
        <p style={{ color: "#E0791B" }} className="email-p">
          Email Templates
        </p>
        <div style={{ display: "flex" }}>
          <div
            className="email-2"
            style={{ marginLeft: "20%", alignItems: "center" }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "3%",
                marginLeft: "3%",
              }}
            >
              <input type="radio" style={{ marginTop: "-10%" }} />
              <p className="email-p-1">Auto Conformation</p>
            </div>
          </div>
          <div
            className="email-2"
            style={{
              marginLeft: "1%",
              width: "100px",
              backgroundColor: "white",
            }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "3%",
                marginLeft: "3%",
              }}
            >
              <input type="radio" style={{ marginTop: "-20%" }} />
              <p className="email-p-1" style={{ color: "#003666" }}>
                <Link
                  to="/EmailRejection"
                  style={{
                    textDecoration: "none",
                    color: "#003666",
                    fontWeight: "400",
                    fontSize: "20",
                  }}
                >
                  Rejection
                </Link>
              </p>
            </div>
          </div>
          <div
            className="email-2"
            style={{
              marginLeft: "1%",
              width: "80px",
              backgroundColor: "white",
            }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "3%",
                marginLeft: "3%",
              }}
            >
              <input type="radio" style={{ marginTop: "-20%" }} />
              <p className="email-p-1" style={{ color: "#003666" }}>
                <Link
                  to="/EmailOffer"
                  style={{
                    textDecoration: "none",
                    color: "#003666",
                    fontWeight: "400",
                    fontSize: "20",
                  }}
                >
                  Offer
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left" }} className="emaildiv">
          <p className="email-p">EDIT EMAIL TEMPLATE</p>
          <hr></hr>
          <p className="email-p">STAGE *</p>
          <input type="text" placeholder="Applied" className="email-input" />
          <p className="email-p" style={{ marginTop: "3%" }}>
            EMIAL TEMPLATE *
          </p>
          <input
            type="email"
            placeholder="Auto confomation"
            className="email-input"
          />
          <p className="email-p" style={{ marginTop: "3%" }}>
            SUBJECT *
          </p>
          <input
            type="text"
            placeholder="Thankyou for application at company name"
            className="email-input"
          />{" "}
          <div
            className="description1"
            style={{ display: "flex", flexDirection: "row", marginTop: "5%" }}
          >
            <div
              className="descrip-icon"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img
                src={b}
                className="descrip-icon-1 bold"
                id="bold"
                onClick={changeStyles}
              />
              <img
                src={i}
                className="descrip-icon-1 italic"
                id="italic"
                onClick={changeStyles}
              />
              <img
                src={u}
                className="descrip-icon-1 underline"
                id="underline"
                onClick={changeStyles}
              />
              <div className="vc"></div>
              <img
                src={mask1}
                className="descrip-icon-1"
                id="dotted-list"
                onClick={changetextstyle}
              />
              <img src={mask2} className="descrip-icon-1" />
              <img src={mask3} className="descrip-icon-1" />
              <img src={mask4} className="descrip-icon-1" />
              <img src={mask5} className="descrip-icon-1" />
              <img src={mask6} className="descrip-icon-1" />
            </div>
            <div className="upload1" style={{ display: "flex" }}>
              <img
                src={group1}
                className="descrip-icon-1"
                style={{ height: "20px", width: "20px" }}
              />
              <p className="upload-txt" style={{ marginLeft: "3px" }}>
                Upload
              </p>
            </div>
          </div>
          <div className="txt-data">
            <textarea
              id="freeform"
              name="freeform"
              className="txt-upload"
            ></textarea>
          </div>
          <p className="email-p">PLACEHOLDERS *</p>
          <input
            type="text"
            placeholder="{{candidate_first_name}} {{candidate_last_name}} {{company_name}} {{job_title}}"
            className="email-input"
          />
        </div>
        <br />
        <br />
        <div>
          <button className="email-btn">
            <Link
              to="/EmailRejection"
              style={{ textDecoration: "none", color: "white" }}
            >
              Save And Continue
            </Link>
          </button>{" "}
          <button className="email-btn" style={{ marginLeft: "3%" }}>
            <Link
              to="/newcv"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailTemplate;
