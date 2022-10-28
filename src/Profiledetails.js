import React from 'react'


function Profiledetails() {
  return (
    <div style={{ overflow: "auto" }}>
      <div className="border-bas">
        <div className="bas-1">
          <div className="bas-title" style={{ display: "flex" }}>
            <p className="bas-title-1">Basic Information</p>
          </div>
          <div className="bas-data" style={{ display: "flex" }}>
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
                  First Name
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
                  Last Name
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
                  Email Address
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
                  Phone Number
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter PhoneNumber"
                className="bas-form-enter-1"
                style={{ marginTop: "10%" }}
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
                  Skill
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Skills"
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
                  Source
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Source"
                className="bas-form-enter-1"
                style={{ marginTop: "10%" }}
              />
            </div>
          </div>
          <div
            class="form-group"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{ display: "flex" }}>
              <label for="exampleInputEmail1" className="bas-jobtitle">
                Tags
              </label>
            </div>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Tags"
              className="bas-form-enter-2"
            />
          </div>
          <div className="bas-cv">
            <p className="bas-cv-p-1">CV</p>
            <p className="bas-cv-p">Download CV</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
          ></textarea>
          <div className="bos-cover-1">
            <p className="bos-letter">Cover letter</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
            style={{ height: "6rem" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Profiledetails