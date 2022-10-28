import React from 'react'
import { Link } from 'react-router-dom';
import circle from './images/Ellipse 63.png'

function Recpublish() {
  return (
    <div className="upload-back">
      <div className="publish">
        <img
          src={circle}
          style={{ position: "absolute", left: "95%", top: "5%" }}
        />

        <img
          src={circle}
          style={{ position: "absolute", left: "5%", top: "5%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "5%", top: "93%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "95%", top: "93%" }}
        />
        <div className="head-pub1">
          <p>Add this Condidate as an Employee ?</p>
        </div>
        <div className="pub-line"></div>
        <div className="pub-content">
          <p className="pub-con1 text-center">
            Add me to as employee now so you can start your onboarding your
            awesome new hire right now.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Link
            to="/Newprofile"
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "4%",
              marginLeft: "18%",
            }}
          >
            <button className="org-btn">
              <span>Confirm</span>
            </button>
          </Link>

          <Link
            to="/offer"
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "4%",
              marginLeft: "4%",
            }}
          >
            <button className="org-btn">
              <span>Cancel</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recpublish