import React,{useState} from "react";
import logo from './images/1.png';
import time from './images/3.png';
import blue from './images/6.png';
import lo from './images/5.png';
import calendar from './images/calendar (2) 1.png'
import hero from './images/Rectangle 37.png'
import salary from './images/salary 1.png'
import footersec from './images/bac.png'
import hero1 from "./images/Rectangle 39.png";
import lamp from './images/lamp.png'
import loudspeaker from './images/loudspeaker 1.png'
import small from './images/image 9.png'
import bl from './images/2.png';
import ble from './images/8.png';
import b from './images/4.png';
import google from './images/bar.png'
import ig from './images/interview.png';
import i from './images/image 5.png';
import q from './images/Ellipse 22.png';
import todo from './images/to-do-list 1.png';
import percentage from './images/7.png'
import w from './images/Ellipse 28.png';
import e from './images/Subtract.png';
import './Contentcss.css';
import {Row,Col} from 'react-bootstrap'
import Header from "./Header";
import { Container } from "react-bootstrap";
import summer from "./images/summer-holidays 1.png";
import star from "./images/star 1.png"
import beach from './images/beach-chair 1.png'
import Rectangles from './images/Rectangle 91.png';
import party from './images/party 1.png';
import user from './images/user 6.png'
import adduser from './images/add-user 1.png'

//import Clock from './Clockdemo';

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,

  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Recharts from "./Recharts";
import Recharts2 from "./Recharts2";



const percentagemain= 66;
const intervel = null;
let second=0;
function Content(){

           const [title,settitle] = useState("Compensation");
          const [charts,setcharts] = useState(false);
          
           const data = [
             {
               name: "RichMan",
               value: "UI Designer",
               time: "Full time-Remote",
               color: "#003666",
               show: true,
               detail: "Hired",
             },
             {
               name: "RichMan",
               value: "UI Designer",
               time: "Full time-Remote",
               color: "#E0791B",
               show: true,
               detail: "Hired",
             },
             {
               name: "RichMan",
               value: "UI Designer",
               time: "Full time-Remote",
               color: "#C20F0F",
               show: false,
               detail: "Hired",
             },
           ];
           const timer  = () => {
            

            second=second+1;
             console.log(second);
             let hours = Math.floor(second / 3600);
             let minss = Math.floor((second - hours * 3600) / 60);
             let secs = second % 60;
             let settime = document.getElementById("time");
             settime.innerText = `${hours} Hr : ${minss} Min`;
           }
           const stop = () => {
            let settime = document.getElementById("time");
             settime.innerText = `00 Hr : 00 Min`;
            
             clearInterval(timer);
            
           }
    const start = () => {

        
                    
     let progressCircle = document.querySelector(".progress");
     let radius = progressCircle.r.baseVal.value;
     //circumference of a circle = 2πr;
     let circumference = radius * 2 * Math.PI;
     progressCircle.style.strokeDasharray = circumference;

     //0 to 100
     var datetime = new Date();
     var hrs = datetime.getHours();
     var min = datetime.getMinutes();
     var sec = datetime.getSeconds();
     setProgress(25);

     function setProgress(percent) {
       progressCircle.style.strokeDashoffset =
         circumference - (percent / 100) * circumference;
     }
     setInterval(timer, 1000); 
 
    }
    return (
      <div style={{ overFlow: "hidden" }} className="intervel">
        <Header/>
        <Container>
          <Row style={{ marginTop: "5%" }}>
            <Col sm={8}>
              <div className="dash-1">
                <img className="dash img-fluid" src={logo} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <div
                    className="dash-para"
                    style={{ display: "flex", marginTop: "5%" }}
                  >
                    <p className="dash1">
                      Upgrade Your Account To <br /> Access Any Features!!
                    </p>
                    <p className="dash2">Continue to use all benefits..</p>
                  </div>
                  <div className="btn--dash">
                    {" "}
                    <button className="btn-upgrade">Upgrade</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <div className="dash-2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      overflow: "auto",
                    }}
                    className="dash-3"
                  >
                    <p className="dash-p" style={{ marginTop: "3%" }}>
                      CLOCK IN AND CLOCK OUT
                    </p>
                    <div className="dash-6">
                      <button onClick={start} className="btn-dash">
                        IN
                      </button>
                      <div
                        id="time"
                        style={{
                          position: "absolute",
                          position: "absolute",
                          marginLeft: "35.7%",
                          marginTop: "29%",
                          fontSize: "12px",
                          fontWeight: "800",
                        }}
                      >
                        00 Hr : 00 Min
                      </div>
                      <img
                        src={b}
                        style={{
                          height: "133px",
                          width: "133px",
                          position: "absolute",
                          marginLeft: "29%",
                          marginTop: "15.1%",
                        }}
                      />
                      <svg
                        width="250"
                        height="250"
                        style={{ marginLeft: "-2%" }}
                        className="svgs"
                      >
                        <circle
                          r="70"
                          cx="125"
                          cy="125"
                          className="track"
                        ></circle>

                        <circle
                          r="70"
                          cx="117"
                          cy="139"
                          className="progress"
                        ></circle>
                      </svg>
                      <button
                        onClick={stop}
                        className="btn-dash-1"
                        style={{ backgrounColor: "#003666" }}
                      >
                        OUT
                      </button>
                    </div>
                    <div
                      className="btn-dash-3"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <button
                        onClick={start}
                        className="btn-dash-2"
                        style={{ backgrounColor: "#003666" }}
                      >
                        BREAK TIME
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginTop: "5%" }}>
            <Col>
              <div className="dash-7" style={{ width: "100%" }}>
                <div className="dash-8">
                  <div className="dash-9" style={{ display: "flex" }}>
                    <img
                      src={ig}
                      style={{
                        height: "45px",
                        width: "45px",
                        marginTop: "2%",
                        marginLeft: "3%",
                      }}
                    />
                    <p className="dash-9-p">Application Responses</p>
                  </div>
                  <div
                    className="dash-10"
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={percentage}
                      style={{ height: "200px", width: "300px" }}
                    />
                  </div>
                  <div
                    className="dash-11"
                    style={{ display: "flex", marginTop: "5%" }}
                  >
                    <div className="dash-12" style={{ display: "flex" }}>
                      <div
                        className="dash-13"
                        style={{ backgroundColor: " #003666" }}
                      ></div>
                      <p className="dash-12-p">Shortlisted</p>
                    </div>
                    <div
                      className="dash-12"
                      style={{ display: "flex", marginLeft: "7%" }}
                    >
                      <div
                        className="dash-13"
                        style={{ backgroundColor: "#E0791B" }}
                      ></div>
                      <p className="dash-12-p">Hired</p>
                    </div>
                    <div
                      className="dash-12"
                      style={{ display: "flex", marginLeft: "7%" }}
                    >
                      <div
                        className="dash-13"
                        style={{ backgroundColor: " #A9B9C9" }}
                      ></div>
                      <p className="dash-12-p">Rejected</p>
                    </div>
                  </div>
                  <div
                    className="dash-11"
                    style={{
                      display: "flex",
                      marginTop: "0%",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="dash-12" style={{ display: "flex" }}>
                      <p
                        className="dash-12-p"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                          marginLeft: "-20%",
                        }}
                      >
                        942
                      </p>
                    </div>
                    <div className="dash-12" style={{ display: "flex" }}>
                      <p
                        className="dash-12-p"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                          marginLeft: "30%",
                        }}
                      >
                        25
                      </p>
                    </div>
                    <div className="dash-12" style={{ display: "flex" }}>
                      <p
                        className="dash-12-p"
                        style={{ fontSize: "25px", fontWeight: "600" }}
                      >
                        2,452
                      </p>
                    </div>
                  </div>
                  <div
                    className="btn-dash-3"
                    style={{
                      marginTop: "5%",

                      marginBottom: "3%",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={start}
                      className="btn-dash-4"
                      style={{
                        opacity: "10",
                        borderRadius: "12px",
                        fontSize: "15",
                        fontWeight: "400",
                        border: "1px solid white",
                      }}
                    >
                      Download Report
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="dash-7 imp"
                style={{
                  width: "90%",
                  marginLeft: "7%",
                  borderRadius: "12px",
                  marginLeft: "12%",
                }}
              >
                <div className="dash-8">
                  <div className="dash-9" style={{ display: "flex" }}>
                    <img
                      src={ig}
                      style={{
                        height: "45px",
                        width: "45px",
                        marginTop: "2%",
                        marginLeft: "3%",
                      }}
                    />
                    <p className="dash-9-p">Interview Scheduled</p>
                  </div>
                  <div
                    className="dash-16"
                    style={{ width: "90%", marginLeft: "2%" }}
                  >
                    {data.map((data) => {
                      return (
                        <div>
                          <div
                            className="dash-14"
                            style={{
                              display: "flex",
                              marginTop: "0%",
                              padding: "3px",
                            }}
                          >
                            <div className="dash-15">
                              <img src={i} style={{ borderRadius: "50%" }} />
                            </div>
                            <div
                              className="dash-17"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0",
                                marginTop: "5%",
                                marginLeft: "8%",
                              }}
                            >
                              <p className="dash-17-p">{data.name}</p>
                              <p
                                className="dash-17-p"
                                style={{
                                  marginTop: "-12%",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                {data.value}
                              </p>
                              <p
                                className="dash-17-p"
                                style={{
                                  marginTop: "-15%",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                {data.time}
                              </p>
                            </div>

                            <div className="dash-18">
                              <CircularProgressbar
                                value={percentagemain}
                                text={`${percentagemain}%`}
                                styles={buildStyles({
                                  strokeLinecap: "butt",
                                  pathColor: data.color,
                                })}
                                className="bar"
                              />
                              <p className="dash-det">{data.detail}</p>
                            </div>
                          </div>
                         {data.show ? <div className="dash-line"></div> : null} 
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="dash-20"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "11%",
                  marginTop: "5%",
                  width: "100%",
                }}
              >
                <div className="dash-21" style={{marginTop:'3%'}}>
                  <img
                    src={summer}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginTop: "45%",
                      marginLeft: "45%",
                    }}
                  />
                </div>
                <div
                  className="dash-22"
                  style={{ marginLeft: "10%", marginTop: "6%" }}
                >
                  <p className="dash-22-p">My Time Off</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "-5%",
                    }}
                  >
                    <p className="dash-time-p">
                      You have 5.323 Annual days left.
                    </p>
                    <img
                      src={star}
                      style={{
                        height: "30px",
                        width: "30px",
                        marginTop: "-3%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="dash-24"
                  style={{ marginTop: "2%", marginLeft: "0%" }}
                >
                  <p className="dash-24-p">View all</p>
                </div>
              </div>
              <div
                className="dash-20"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "11%",
                  marginTop: "10%",
                  width: "100%",
                }}
              >
                <div className="dash-21">
                  <img
                    src={beach}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginTop: "71%",
                      marginLeft: "45%",
                    }}
                  />
                </div>
                <div
                  className="dash-22"
                  style={{ marginLeft: "10%", marginTop: "6%", width: "60%" }}
                >
                  <p className="dash-22-p">Who’s off today</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "-1%",
                    }}
                  >
                    <img
                      src={Rectangles}
                      style={{
                        height: "30px",
                        width: "30px",
                        marginTop: "-3%",
                      }}
                    />
                    <p style={{ marginLeft: "1%" }} className="dash-time-p">
                      Muskan is Absent Today.
                    </p>
                    <img
                      src={party}
                      style={{
                        height: "20px",
                        width: "20px",
                        marginLeft: "2%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="dash-24"
                  style={{ marginTop: "2%", marginLeft: "3%" }}
                >
                  <p className="dash-24-p">View all</p>
                </div>
              </div>
              <div
                className="dash-20"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "9%",
                  marginLeft: "11%",
                  width: "100%",
                }}
              >
                <div className="dash-21">
                  <img
                    src={user}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginTop: "73%",
                      marginLeft: "45%",
                    }}
                  />
                </div>
                <div
                  className="dash-22"
                  style={{ marginLeft: "10%", marginTop: "6%" }}
                >
                  <p className="dash-22-p">New members today</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "-5%",
                    }}
                  >
                    <p className="dash-time-p">
                      There is no new member today.{" "}
                    </p>
                    <img
                      src={adduser}
                      style={{
                        height: "20px",
                        width: "20px",
                        marginTop: "%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="dash-24"
                  style={{ marginTop: "2%", marginLeft: "5%" }}
                >
                  <p className="dash-24-p">View all</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginTop: "5%" }}>
            <Col>
              <div
                className="dash-7"
                style={{ width: "100%", borderRadius: "12px" }}
              >
                <div className="dash-8" style={{ width: "100%" }}>
                  <div
                    className="dash-9"
                    style={{
                      display: "flex",
                      marginLeft: "4%",
                      width: "100%",
                    }}
                  >
                    <img
                      src={calendar}
                      style={{
                        height: "45px",
                        width: "45px",
                        marginTop: "3%",
                       
                      }}
                    />
                    <p className="dash-9-p">Upcoming Events</p>
                  </div>
                  <div className="dash-date">
                    <p className="dash-date-1">15 April 2022</p>
                  </div>
                  <div
                    className="dash-25"
                    style={{ display: "flex", marginLeft: "10%" }}
                  >
                    <div className="dash-26">
                      <p className="dash-27">04:00</p>
                    </div>
                    <div
                      className="dash-28"
                      style={{ marginLeft: "5%", width: "100%" }}
                    >
                      <div
                        className="dash-29"
                        style={{ display: "flex", width: "100%" }}
                      >
                        <div className="dash-30"></div>
                        <p style={{ marginLeft: "5%" }} className="dash-31">
                          Senior ReactNative Developer
                        </p>
                      </div>
                      <span className="dash-32">Training Session</span>
                    </div>
                  </div>
                  <div
                    className="dash-25"
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginTop: "2%",
                    }}
                  >
                    <div className="dash-26">
                      <p className="dash-27">06:00</p>
                    </div>
                    <div
                      className="dash-28"
                      style={{ marginLeft: "5%", width: "100%" }}
                    >
                      <div
                        className="dash-29"
                        style={{ display: "flex", width: "100%" }}
                      >
                        <div
                          className="dash-30"
                          style={{ backgroundColor: "#003666" }}
                        ></div>
                        <p style={{ marginLeft: "5%" }} className="dash-31">
                          Senior ReactNative Developer
                        </p>
                      </div>
                      <span className="dash-32">Training Session</span>
                    </div>
                  </div>
                  <div
                    className="dash-line"
                    style={{ marginLeft: "10%", marginTop: "5%" }}
                  ></div>
                  <div className="dash-date">
                    <p className="dash-date-1">18 April 2022</p>
                  </div>
                  <div
                    className="dash-25"
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginTop: "2%",
                    }}
                  >
                    <div className="dash-26">
                      <p className="dash-27">04:00</p>
                    </div>
                    <div
                      className="dash-28"
                      style={{ marginLeft: "5%", width: "100%" }}
                    >
                      <div
                        className="dash-29"
                        style={{ display: "flex", width: "100%" }}
                      >
                        <div className="dash-30"></div>
                        <p style={{ marginLeft: "5%" }} className="dash-31">
                          Senior ReactNative Developer
                        </p>
                      </div>
                      <span className="dash-32">Training Session</span>
                    </div>
                  </div>
                  <div
                    className="dash-25"
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginTop: "2%",
                    }}
                  >
                    <div className="dash-26">
                      <p className="dash-27">06:00</p>
                    </div>
                    <div
                      className="dash-28"
                      style={{ marginLeft: "5%", width: "100%" }}
                    >
                      <div
                        className="dash-29"
                        style={{ display: "flex", width: "100%" }}
                      >
                        <div
                          className="dash-30"
                          style={{ backgroundColor: "#003666" }}
                        ></div>
                        <p style={{ marginLeft: "5%" }} className="dash-31">
                          Senior ReactNative Developer
                        </p>
                      </div>
                      <span className="dash-32">UI/UX session</span>
                      <div
                        className="btn-dash-3"
                        style={{
                          marginTop: "8%",
                          width: "130px",
                          marginBottom: "5%",
                        }}
                      >
                        <button
                          onClick={start}
                          className="btn-dash-4"
                          style={{
                            opacity: "10",
                            marginLeft: "5%",
                            fontSize: "15",
                            fontWeight: "400",
                            width: "100%",
                            border: "1px solid white",
                          }}
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="dash-7"
                style={{
                  width: "100%",
                  marginLeft: "5%",
                  borderRadius: "12px",
                }}
              >
                <div className="dash-8">
                  <div className="dash-9" style={{ display: "flex" }}>
                    <img
                      src={todo}
                      style={{
                        height: "35px",
                        width: "35px",
                        marginTop: "3%",
                        marginLeft: "3%",
                      }}
                    />
                    <p className="dash-9-p">To-dos</p>
                    <div
                      className="dash-24"
                      style={{
                        marginTop: "2%",
                        width: "100%",
                        marginLeft: "40%",
                        marginTop: "5%",
                      }}
                    >
                      <p className="dash-24-p">View all</p>
                    </div>
                  </div>
                  <div className="dash-40">
                    <div className="dash-41" style={{ height: "max-content" }}>
                      <div className="dash-42" style={{ display: "flex" }}>
                        <div style={{ marginLeft: "5%", marginTop: "5%" }}>
                          {" "}
                          <img src={hero} />
                          <div className="dash-one"></div>
                        </div>
                        <div style={{ marginLeft: "5%", marginTop: "8%" }}>
                          {" "}
                          <p className="dash-42-p">Onboarding</p>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="dash-two"></div>
                        <div className="dash-43"></div>
                        <p className="dash-43-p" style={{ marginLeft: "3%" }}>
                          Prepare Welcome Kit
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          className="dash-43"
                          style={{ background: "#003666" }}
                        ></div>
                        <div className="dash-two"></div>
                        <p className="dash-43-p-1" style={{ marginLeft: "3%" }}>
                          Collect Documents
                        </p>
                      </div>
                    </div>
                    <div className="dash-41" style={{ height: "max-content" }}>
                      <div
                        className="dash-41"
                        style={{ height: "max-content", marginBottom: "26%" }}
                      >
                        <div className="dash-42" style={{ display: "flex" }}>
                          <div style={{ marginLeft: "0%", marginTop: "5%" }}>
                            {" "}
                            <img src={hero1} />
                            <div
                              className="dash-one"
                              style={{ height: "47px" }}
                            ></div>
                          </div>
                          <div style={{ marginLeft: "5%", marginTop: "8%" }}>
                            {" "}
                            <p className="dash-42-p">Collect Documents</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: "-4%" }}>
                          <div
                            className="dash-43"
                            style={{ background: "#003666" }}
                          ></div>
                          <div
                            className="dash-two"
                            style={{ marginLeft: "8%", width: "38px" }}
                          ></div>
                          <p
                            className="dash-43-p-1"
                            style={{ marginLeft: "3%", color: "#BBBBBF" }}
                          >
                            Self Copy
                          </p>
                        </div>
                        <div style={{ display: "flex", marginLeft: "-4%" }}>
                          <div className="dash-43"></div>
                          <div
                            className="dash-two"
                            style={{ marginLeft: "8%", width: "38px" }}
                          ></div>
                          <p
                            className="dash-43-p"
                            style={{ marginLeft: "3%", color: "#003666" }}
                          >
                            Upload ID Card
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="dash-8"
                style={{
                  marginLeft: "25%",
                  marginTop: "5%",
                  justifyContent: "center",
                }}
              >
                <div
                  className="dash-70"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <p className="dash-9-p" style={{ marginLeft: "25%" }}>
                      FOLLOW UP
                    </p>
                    <svg
                      width="250"
                      height="250"
                      style={{ marginTop: "-25%" }}
                      className="svgs"
                    >
                      <circle
                        r="50"
                        cx="125"
                        cy="125"
                        className="track-1"
                      ></circle>
                      <circle
                        r="50"
                        cx="125"
                        cy="125"
                        className="track-2"
                      ></circle>

                      <circle
                        r="50"
                        cx="125"
                        cy="125"
                        className="progress-1"
                      ></circle>
                    </svg>
                    <div
                      className="dash-75"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginLeft: "-15%",
                        marginTop: "-15%",
                      }}
                    >
                      <p className="dash-75-p" style={{ color: "#8FA4B9" }}>
                        Offboarding
                      </p>
                      <p className="dash-75-p">Onboarding</p>
                      <p className="dash-75-p" style={{ color: "#E0791B" }}>
                        Others
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="dash-8"
                style={{
                  marginLeft: "15%",
                  marginTop: "5%",
                  justifyContent: "center",
                  width: "95%",
                }}
              >
                <div
                  className="dash-70"
                  style={{ display: "flex", width: "100%" }}
                >
                  <div>
                    <p className="dash-9-p" style={{ marginLeft: "25%" }}>
                      PENDING APPROVAL
                    </p>
                    <div
                      style={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "space-evenly",
                        width: "100%",
                        marginBottom: "11%",
                        marginTop: "8%",
                      }}
                    >
                      <div style={{ marginLeft: "10%", width: "100%" }}>
                        {" "}
                        <CircularProgressbar
                          value={percentagemain}
                          strokeWidth={15}
                          text={`Leaves`}
                          styles={buildStyles({
                            textColor: "#003666",
                            textSize: "12px",
                            pathColor: "#003666",
                            trailColor: "#E0791B",
                          })}
                          size="200px"
                        />
                      </div>
                      <div
                        style={{
                          marginLeft: "25%",
                          width: "100%",
                          marginRight: "8%",
                        }}
                      >
                        <CircularProgressbar
                          value={percentagemain}
                          strokeWidth={15}
                          text={`Attendence`}
                          styles={buildStyles({
                            textColor: "#003666",
                            textSize: "12px",
                            pathColor: "#003666",
                            trailColor: "#E0791B",
                            marginLeft: "10%",
                          })}
                          size="100px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginTop: "5%" }}>
            <Col sm={4}>
              <div
                className="dash-7"
                style={{ width: "100%", marginTop: "7%", borderRadius: "12px" }}
              >
                <div className="dash-8">
                  <div className="dash-9" style={{ display: "flex" }}>
                    <img
                      src={loudspeaker}
                      style={{
                        height: "45px",
                        width: "45px",
                        marginTop: "2%",
                        marginLeft: "3%",
                      }}
                    />
                    <p className="dash-9-p">Announcement</p>
                  </div>
                  <div className="dash-50">
                    <div
                      className="dash-51"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3%",
                        height: "58px",
                      }}
                    >
                      <p className="dash51-p" style={{ marginLeft: "6%" }}>
                        Meeting at 5 AM
                      </p>
                      <div
                        className="dash-52"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "5%",
                        }}
                      >
                        <div
                          className="dash-53"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <img
                            src={small}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">Muskan Bhatia</p>
                        </div>
                        <div
                          className="dash-53"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "-6%",
                          }}
                        >
                          <img
                            src={lamp}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">12 April 2022</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dash-51"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3%",
                      }}
                    >
                      <p className="dash51-p" style={{ marginLeft: "6%" }}>
                        Meeting at 5 AM
                      </p>
                      <div
                        className="dash-52"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "5%",
                        }}
                      >
                        <div
                          className="dash-53"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <img
                            src={small}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">Muskan Bhatia</p>
                        </div>
                        <div
                          className="dash-53"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "-6%",
                          }}
                        >
                          <img
                            src={lamp}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">12 April 2022</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dash-51"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3%",
                      }}
                    >
                      <p className="dash51-p" style={{ marginLeft: "6%" }}>
                        Meeting at 5 AM
                      </p>
                      <div
                        className="dash-52"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "5%",
                        }}
                      >
                        <div
                          className="dash-53"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <img
                            src={small}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">Muskan Bhatia</p>
                        </div>
                        <div
                          className="dash-53"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "-6%",
                          }}
                        >
                          <img
                            src={lamp}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">12 April 2022</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dash-51"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3%",
                      }}
                    >
                      <p className="dash51-p" style={{ marginLeft: "6%" }}>
                        Meeting at 5 AM
                      </p>
                      <div
                        className="dash-52"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "5%",
                        }}
                      >
                        <div
                          className="dash-53"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <img
                            src={small}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">Muskan Bhatia</p>
                        </div>
                        <div
                          className="dash-53"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "-6%",
                          }}
                        >
                          <img
                            src={lamp}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">12 April 2022</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dash-51"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3%",
                        marginBottom: "3%",
                      }}
                    >
                      <p className="dash51-p" style={{ marginLeft: "6%" }}>
                        Meeting at 5 AM
                      </p>
                      <div
                        className="dash-52"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "5%",
                        }}
                      >
                        <div
                          className="dash-53"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <img
                            src={small}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">Muskan Bhatia</p>
                        </div>
                        <div
                          className="dash-53"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "-6%",
                          }}
                        >
                          <img
                            src={lamp}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <p className="dash-53-p">12 April 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={8}>
              <div className="dash-60">
                <div className="dash-61">
                  <div className="dash-9" style={{ display: "flex" }}>
                    <img
                      src={salary}
                      style={{
                        height: "45px",
                        width: "45px",
                        marginTop: "2%",
                        marginLeft: "3%",
                      }}
                    />
                    <p className="dash-9-p-1" style={{ position: "relative" }}>
                      {title}
                    </p>
                  </div>
                  <div
                    className="dash-62"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "6.5%",
                    }}
                  >
                    <div
                      className="dash-63"
                      style={{ display: "flex", width: "100%" }}
                    >
                      <p className="dash-63-p">Total Cycle</p>
                      <p
                        className="dash-63-p-1"
                        style={{ marginTop: "-1%", marginLeft: "2%" }}
                      >
                        $ 500.00
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        position: "relative",
                        left: "-5%",
                      }}
                    >
                      <div
                        className="email-2"
                        style={{
                          alignItems: "center",
                          backgroundColor: "white",
                          width: "max-content",
                        }}
                      >
                        <div
                          className="email-3"
                          style={{
                            alignItems: "center",
                            textAlign: "center",
                            paddingLeft: "5px",
                            paddingRight: "10px",
                          }}
                        >
                          <input
                            type="radio"
                            name="radio"
                            style={{ marginTop: "-21%" }}
                            onClick={() => {
                              settitle("payroll");
                              setcharts(true);
                            }}
                          />
                          <p
                            className="email-p-1"
                            style={{
                              color: "#003666",
                              marginTop: "5%",
                              marginLeft: "3%",
                            }}
                            
                          >
                            Payroll
                          </p>
                        </div>
                      </div>
                      <div
                        className="email-2"
                        style={{
                          marginLeft: "2%",
                          alignItems: "center",
                          backgroundColor: "white",
                          width: "max-content",
                          marginLeft: "3%",
                          
                        }}
                      >
                        <div
                          className="email-3"
                          style={{
                            alignItems: "center",
                            textAlign: "center",
                            marginTop: "2%",
                            marginLeft: "3%",
                            paddingLeft: "5px",
                            paddingRight: "14px",
                          }}
                        >
                          <input
                            type="radio"
                            name="radio"
                            style={{ marginTop: "-13%" }}
                            onClick={() => {
                              settitle("Compensation");
                              setcharts(false);
                            }}
                          />
                          <p
                            className="email-p-1"
                            style={{ color: "#003666", marginLeft: "3%" }}
                            
                          >
                            Compensation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "4%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "5%",
                      }}
                    >
                      <p className="dollar" style={{ paddingTop: "54%" }}>
                        $500
                      </p>
                      <p className="dollar" style={{ paddingTop: "54%" }}>
                        $250
                      </p>
                      <p className="dollar" style={{ paddingTop: "54%" }}>
                        $100
                      </p>
                    </div>
                    <div style={{ position: "relative" }}>
                      {charts ? <Recharts /> : <Recharts2 />}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      marginLeft: "13%",
                      marginTop: "0%",
                    }}
                  >
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                    <p className="dollar-1">Cycle1</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <footer
          style={{
            position: "relative",
            backgroundColor: "white",
            width: "100rem",
            marginLeft: "-2%",
            marginTop: "5%",
          }}
        >
          <img
            src={footersec}
            className="img fluid"
            style={{ width: "100%", height: "100%" }}
          />
          <div style={{ position: "absolute", top: "60%", left: "78%" }}>
            <a href="#">
              <img src={google} style={{ height: "120px" }} />
            </a>
          </div>
        </footer>
      </div>
    );
}
export default Content;



/*<div style={{ overflow: "hidden", display: "flex"}}>
          <img className="dash img-fluid" src={logo} />
         
          </div>
          <div className="dash-1">
            <div className="dash-2"></div>
          </div>
        </div> */