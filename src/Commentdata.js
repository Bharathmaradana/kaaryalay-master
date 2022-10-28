import React from 'react'
import happy from './images/happy 1.png'
import happy1 from './images/happiness 1.png'
import notsure from './images/meh 1.png'
import sad from './images/sad 1.png'
import sick from './images/sick 1.png'
import edit from "./images/edit 11.png";
import delete1 from "./images/delete 6.png";


function Evaluatedata() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="eva-1">
        <div className="eva-2">
          <div className="eva-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "4%",
                marginTop: "1%",
                width: "100%",
              }}
            >
              <img src={happy} className="img-fluid eva-5" />
              <label className="eva-3">Excellent</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "8%",
                marginTop: "1%",

                width: "100%",
              }}
            >
              <img src={happy1} className="eva-5" />
              <label className="eva-3">Yes</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "12%",
                marginTop: "1%",

                width: "100%",
              }}
            >
              <img src={notsure} className="eva-5" />
              <label className="eva-3">NotSure</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "12%",
                marginTop: "1%",
                width: "100%",
              }}
            >
              <img src={sad} className="eva-5" />
              <label className="eva-3">No</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "12%",
                marginTop: "1%",
                marginRight: "2%",
                width: "100%",
              }}
            >
              <img src={sick} className="eva-5" />
              <label className="eva-31">StrongNo</label>
            </div>
          </div>
          <div className="eva-6">
            <div className="eva-7">
              <input type="text" placeholder="         TYPE A COMMENTS" />
            </div>
          </div>
          <div
            className="rej-btns"
            style={{ marginLeft: "22%", marginTop: "5%" }}
          >
            <button className="reject-btn" style={{ borderRadius: "10px" }}>
              Save
            </button>
            <button
              className="reject-btn"
              style={{ borderRadius: "10px", marginLeft: "5%" }}
            >
              cancel
            </button>
          </div>
          <div className="eva-line"></div>
          <p className="eva-name"> MUSKHAN BHATIA</p>

          <div className="eva-8">
            <div className="eva-11">
              <div className="eva-9" style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "8%",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  <img
                    src={sad}
                    className="eva-10"
                    style={{ marginLeft: "2%" }}
                  />
                  <label className="eva-3">Excellent</label>
                </div>
                <div
                  style={{
                    position: "relative",
                    left: "-55%",
                    alignItems: "center",
                    textAlign: "center",
                    paddingTop: "5%",
                  }}
                  className="eva-12"
                >
                  <p>GOOD</p>
                </div>
                <div className="soc-7">
                  <div className="soc-8" style={{ display: "flex" }}>
                    <img src={edit} style={{ height: "20px", width: "20px" }} />
                    <img
                      src={delete1}
                      style={{
                        height: "20px",
                        width: "20px",
                        marginLeft: "13%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evaluatedata