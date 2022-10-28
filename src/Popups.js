import React, { useState } from "react";
import "./Popupscss.css";
import { BiMinusCircle } from "react-icons/bi";
import dashblur from './images/dashblur.jpeg';
import {Link} from 'react-router-dom';
function Popups() {
  const [Style, setStyle] = useState("none");
  const [back,setback] = useState("none");
  const [set,notset] = useState(false);
  const [data,setdata] = useState("Select Your Industry")
  const clickbtn = () => {
    setStyle("flex");
     
      setback("blur(8px)")

     
  };
  const clickbtnn = () => {
    setStyle("none");
    setback("none");
  };
     const storedata = (h) => {
       setdata(h);
     };
  return (
    <div>
      <div className="btr" style={{ filter: back }}>
        <img src={dashblur} style={{ height: "100vh", width: "100%" }} />
        
      </div>
      <div className="App-1" style={{ marginTop:'5%' }}>
        <div className="content-1">
          <p className="heading--1">
            Right on! We can now Create a Workspace for your team.
          </p>
          <p className="heading--1">
            What is your <p className="different">Industry?</p>
          </p>
          <div className="child" style={{ marginLeft: "10%", marginTop: "5%" }}>
            <p>
              <BiMinusCircle /> Crypto
            </p>
            <p>
              <BiMinusCircle /> E-commerce
            </p>
            <p>
              <BiMinusCircle /> Fintech
            </p>

            <p>
              <BiMinusCircle /> HealthTech
            </p>
            <p>
              <BiMinusCircle /> Software OutReach
            </p>
          </div>
          <div className="search-pop"></div>
          <div
            class="dropdown"
            style={{
              alignItems: "center",
              marginLeft: "10%",
              position: "relative",
              top: "-8%",
              width: "80%",
            }}
          >
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#034666",
                overflow: "auto",
                position: "relative",

                opacity: 0.3,
              }}
            >
             {data}
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{
                alignItems: "center",
                marginLeft: "70%",
                overflow: "hidden",
                position: "absolute",
                top: "-100%",
              }}
            >
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("Crypto");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  Crypto
                </a>
              </div>
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("E-commerce");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  E-commerce
                </a>
              </div>
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("Body Temperature");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  Body Temperature
                </a>
              </div>
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("Health Tech");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  Health Tech
                </a>
              </div>
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("Software OutReach");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  Software OutReach
                </a>
              </div>
              <div
                style={{ display: "flex", marginLeft: "3%" }}
                onClick={() => {
                  storedata("Mood");
                }}
              >
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <a class="dropdown-item" href="#">
                  Mood
                </a>
              </div>
            </div>
          </div>
          <div className="btn--9">
            <Link
              to="/Emailver"
              style={{ width: "50%" }}
              onClick={() => {
                storedata("E-commerce");
              }}
            >
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

export default Popups;
