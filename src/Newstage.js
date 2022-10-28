import React, { useState } from "react";
import {Link} from 'react-router-dom'

function Newstage() {
  const [style, setStyle] = useState("flex");

  const clickbtn = () => {
    setStyle("flex");
  };
  const clickbtnn = () => {
    setStyle("none");
  };
  return (
    <div className="upload-back">
      <div className="testing-App" style={{ display: style }}>
        <div className="testing-content">
          <p className="testing-p">New Stage</p>
          <hr />
          <input type="text" className="testing-input1" />

          <div className="testing-btn">
            <button className="testing-button">
              {" "}
              <Link
                to="/Tag"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button">
              {" "}
              <Link
                to="/deletes"
                style={{ textDecoration: "none", color: "white" }}
              >
                cancel
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newstage;
