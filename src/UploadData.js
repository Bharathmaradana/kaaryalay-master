import React, { useState } from "react";
import group1 from "./images/Group.png";
import profileimg from "./images/Ellipse 52.png";
import organge from "./images/Group-bas.png";
import {Link} from 'react-router-dom'


function UploadData() {
  const showdata = () => {
 
  };
  return (
    <div className="upload-back">
      <div className="or-1">
        <div className="upload-data">
          <div className="or-3" style={{ display: "flex" }}>
            <p className="or-title" style={{ marginLeft: "30%" }}>
              New Candidate
            </p>
            <div className="upload-upl" style={{ display: "flex" }}>
              <img
                src={organge}
                className="descrip-icon-1"
                style={{ height: "20px", width: "20px", marginRight: "4%" }}
              />
              <p
                className="upload-txt-upl"
                style={{ marginLeft: "3px", color: "white", marginTop: "3%" }}
              >
                Bulk Upload
              </p>
            </div>
          </div>
          <div className="upload-line"></div>

          <div className="upload-file">
            <div id="freeform" name="freeform" className="txt-upload-1">
              <div className="upload-2" style={{ display: "flex" }}>
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
              <div className="upload-tag">
                <p>File format: doc, docx, pdf. Max file size: 10MB.</p>
              </div>
            </div>
          </div>
          <div className="prof-img" style={{ display: "flex" }}>
            <img
              src={profileimg}
              className="img-fluid justify-content-start f-1"
            />
            <p>File format: png, jpg, jpeg. Max file size: 2MB.</p>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginLeft: "3%", marginTop: "3%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  FIRST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                className="bas-form-enter-1"
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  LAST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                className="bas-form-enter-1"
              />
            </div>
          </div>
          <div
            className="bas-data"
            style={{
              display: "flex",
              marginTop: "1%",
              marginLeft: "3%",
            }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  EMAIL ADDRESS
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email@com"
                className="bas-form-enter-1"
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  PHONE NUMBER
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
                className="bas-form-enter-1"
                style={{ marginTop: "10%" }}
              />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginLeft: "3%", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  JOBS
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Jobs"
                className="bas-form-enter-1"
                style={{ marginTop: "10%" }}
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  SOURCE
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="source"
                className="bas-form-enter-1"
              />
            </div>
          </div>

          <div className="bos-cover">
            <p className="bos-letter">COVER LETTER</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload-data"
          ></textarea>
          <div className="rej-btns">
            <button
              className="reject-btn"
              style={{ borderRadius: "10px" }}
              onClick={showdata}
            >
              <Link
                to="/Resume"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button
              className="reject-btn"
              style={{ borderRadius: "10px", marginLeft: "3%" }}
            >
              <Link
                to="/Candidate"
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

export default UploadData;

/*

<div>
      <div className="uplaod-data">
        <div className="App-data">
          <p className="heading-data">New Candidate</p>
          <hr className="hr-data" />
          <div className="upload---data">
            Upload
            <p className="down-data">
              File format doc,docx,pdf.Max file size: 10MB.
            </p>
          </div>
          <div className="imgdiv-data">
            <img src="" className='img-data'/>
            <p className="downn-data">File format: pdf,Max file size: 10MB</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
*/
