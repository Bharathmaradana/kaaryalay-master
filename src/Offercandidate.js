import React,{useState} from 'react';
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
import { Link } from 'react-router-dom';


function Offercandidate() {
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
    <div className="upload-back">
      <div className="or-1">
        <div className="or-2">
          <div className="or-3">
            <p className="or-title1">Offer Candidate</p>
            <div className="or-line1"></div>
          </div>
          <div className="or-main">
            <div className="or-4">
              <div className="or-5" style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  style={{ marginLeft: "5%" }}
                  className="defaultCheckbox"
                />
                <p style={{ marginLeft: "3%" }} className="text-start or-5-P1">
                  Send offer email to candidate
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <label
                  form="exampleInputEmail1"
                  className="jobtitle"
                  style={{
                    marginTop: "15%",
                    marginLeft: "5.5%",
                    color: "#003666",
                  }}
                >
                  Email Template
                </label>
                <span
                  className="required-sym"
                  style={{ marginTop: "15%" }}
                ></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="    Offer"
                  className="form-enter---1"
                  style={{ width: "90%" }}
                />
              </div>

              <div className="form-enter---3">
                <p
                  className="or-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  To:
                </p>
                <input
                  type="text"
                  className="seperate"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="form-enter---3">
                <p
                  className="or-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  Subject:
                </p>
                <input
                  type="text"
                  className="seperate"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  className="description"
                  style={{ display: "flex", flexDirection: "row" }}
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
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={i}
                      className="descrip-icon-1 italic"
                      id="italic"
                      onClick={changeStyles}
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={u}
                      className="descrip-icon-1 underline"
                      id="underline"
                      onClick={changeStyles}
                      style={{ marginLeft: "5%" }}
                    />
                    <div className="vc"></div>
                    <img
                      src={mask1}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={mask2}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={mask3}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={mask4}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={mask5}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                    <img
                      src={mask6}
                      className="descrip-icon-1"
                      style={{ marginLeft: "5%" }}
                    />
                  </div>
                  <div
                    className="upload"
                    style={{ width: "60%", display: "flex" }}
                  >
                    <img
                      src={group1}
                      className="descrip-icon-2"
                      style={{ height: "20px", width: "20px" }}
                    />
                    <p className="upload-txt" style={{ marginLeft: "3px" }}>
                      Upload
                    </p>
                  </div>
                </div>
              </div>
              <div className="txt-data">
                <textarea
                  id="freeform"
                  name="freeform"
                  className="txt-upload"
                  style={{ width: "90%" }}
                ></textarea>
              </div>
              <div className="rej-btns">
                <button className="reject-btn" style={{ borderRadius: "10px" }}>
                  <Link
                    to="/add"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Offer
                  </Link>
                </button>
                <button
                  className="reject-btn"
                  style={{ borderRadius: "10px", marginLeft: "5%" }}
                >
                  <Link
                    to="/Recrutimentmain"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    cancel
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offercandidate