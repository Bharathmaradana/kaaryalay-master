import React, { useState } from "react";
import "./Popupscss.css";
import dashblur from './images/dashblur.jpeg'
import { BiMinusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Role() {
    const [Style, setStyle] = useState("none");
    const [back, setback] = useState("none");
    const [set, notset] = useState(false);
    const [data,setdata] = useState("select your industry");

    const clickbtn = () => {
      setStyle("flex");

      setback("blur(8px)");
    };
    const clickbtnn = () => {
      setStyle("none");
      setback("none");
    };
    const storedata = (h) => {
       
        setdata(h);
    }

    return (
      <div>
        <div className="btr" style={{ filter: back }}>
          <img src={dashblur} style={{ height: "100vh", width: "100%" }} />
         
        </div>
        <div className="App-1" style={{  marginTop:'5%'}}>
          <div className="content" >
            <p className="heading" style={{ marginLeft: "10%" }}>
              What is your <p className="different">Role</p>?
            </p>
            <div
              className="child"
              style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}
            >
              <p>
                <BiMinusCircle /> CEO/Owner/Founder
              </p>
              <p>
                <BiMinusCircle /> HR Manager
              </p>
              <p>
                <BiMinusCircle /> HR Staff
              </p>
              <p>
                <BiMinusCircle /> IT/Tech Manager
              </p>
              <p>
                <BiMinusCircle /> Project Manager
              </p>
            </div>
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
                  opacity: 0.3,
                }}
              >
                {data}
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{ alignItems: "center", marginLeft: "70%",overflow:'hidden',zIndex:'100000000' }}
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
                  <a class="dropdown-item" href="#" id="anc">
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
                  <a class="dropdown-item" href="#" id="anc">
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
                  <a class="dropdown-item" href="#" id="anc">
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
                  <a class="dropdown-item" href="#" id="anc">
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
                  <a class="dropdown-item" href="#" id="anc">
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
                  <a class="dropdown-item" href="#" id="anc">
                    Mood
                  </a>
                </div>
              </div>
            </div>
            <div className="btn--9">
              <Link to="/Popups" style={{ width: "50%" }}>
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

export default Role;
