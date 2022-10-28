import React,{useState} from 'react'
import group1 from "./images/Group.png";
import {Link} from 'react-router-dom';


function Resume() {
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
          <p className="testing-p">Upload Cv</p>
          <p className="testing-2">CV/RESUME</p>
          <hr className="hin" />
          <div className="testing-input">
            <div
              className="upload-2"
              style={{ display: "flex", marginTop: "20%" }}
            >
              <img
                src={group1}
                className="descrip-icon-1"
                style={{ height: "20px", width: "20px" }}
              />
              <p
                className="upload-txt"
                style={{ marginLeft: "0px", marginTop: "4%" }}
              >
                Upload
              </p>
            </div>
            <p className="aaa">
              File format: doc, docx, pdf. Max file size: 10MB.
            </p>
          </div>
          <div className="testing-btn">
            <button  className="testing-button">
              {" "}
              <Link
                to="/Hire"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button  className="testing-button">
              {" "}
              <Link
                to="/upload"
                style={{ textDecoration: "none", color: "white" }}
              >
                cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
