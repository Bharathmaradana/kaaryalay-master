import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from './images/Vector5.png'
import add from './images/Additional Information.png'
import {Link} from 'react-router-dom'
function NewProfile() {
  const [sdate, setDate] = useState();
  return (
    <div>
      <div className="newpro-1">
        <div className="newpro-2">
          <p>New Profile</p>
          <div className="newpro-3"></div>
        </div>
        <div className="newpro-4">
          <p>Basic Information</p>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
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
                style={{ marginTop: "2%" }}
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
                style={{ marginTop: "2%" }}
              />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
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
                  Contact Email
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="bas-form-enter-1"
                style={{ marginTop: "2%" }}
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
                  Contact Number
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="bas-form-enter-1"
                style={{ marginTop: "2%" }}
              />
            </div>
          </div>
          <div className="mt-6" style={{ marginLeft: "2%", marginTop: "0%" }}>
            <Form.Check aria-label="option 1" />
            <p style={{ marginLeft: "1%", fontSize: "16px" }}>
              send email invitation
            </p>
          </div>
          <p>Job Information</p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  position: "relative",

                  width: "100%",
                  fontSize: "14px",
                }}
              >
                <label
                  for="exampleInputEmail1"
                  className="jobtitle"
                  styke={{ opacity: "0.5" }}
                >
                  Join Date
                </label>
                <span className="required-sym"></span>
              </div>
              <div
                className="dropdown---1"
                style={{ display: "flex", width: "450px" }}
              >
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    opacity: "1",
                  }}
                  className="rec-tog-date"
                />
              </div>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginLeft: "7%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="bas-jobtitle">
                  Office
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Number"
                  className="bas-form-enter-1"
                  style={{ marginTop: "2%" }}
                />
                <img
                  src={vector}
                  className="TTT"
                  style={{ height: "10px", width: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%", width: "100%" }}
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
                  Job Type
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Number"
                  className="bas-form-enter-1"
                  style={{ marginTop: "2%" }}
                />
                <img
                  src={vector}
                  className="TTT"
                  style={{ height: "10px", width: "10px" }}
                />
              </div>
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
                  Employement Type
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Number"
                  className="bas-form-enter-1"
                  style={{ marginTop: "2%" }}
                />
                <img
                  src={vector}
                  className="TTT"
                  style={{ height: "10px", width: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%", width: "100%" }}
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
                  Department
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Number"
                  className="bas-form-enter-1"
                  style={{ marginTop: "2%" }}
                />
                <img
                  src={vector}
                  className="TTT"
                  style={{ height: "10px", width: "10px" }}
                />
              </div>
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
                  Line Manager
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Number"
                  className="bas-form-enter-1"
                  style={{ marginTop: "2%" }}
                />
                <img
                  src={vector}
                  className="TTT"
                  style={{ height: "10px", width: "10px" }}
                />
              </div>
            </div>
          </div>
          <div className="newpro-p">
            {" "}
            <p>Additional Information</p>
          </div>
          <p className="newpro-pp">Current CTC</p>
          <div className="textarea-pp">
            <p className="tst" style={{ opacity: "0.5" }}>
              Current CTC
            </p>
          </div>
          <div className="rej-btns" style={{ marginLeft: "25%" }}>
            <button className="reject-btn" style={{ borderRadius: "10px" }}>
              <Link
                to="/Recrutimentmain"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create
              </Link>
            </button>
            <button
              className="reject-btn"
              style={{ borderRadius: "10px", marginLeft: "5%" }}
            >
              <Link
                to="/NewProfile"
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

export default NewProfile