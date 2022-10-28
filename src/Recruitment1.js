import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import jobs from './images/jobs.png'
import candidate from './images/candidate.png'
import { Link } from 'react-router-dom';
import setting from './images/settings 3.png'
import  searchbar  from './images/search_black_24dp 1.png';
import Dropdown from 'react-bootstrap/Dropdown'
import Recruitdetails from './Recruitdetails'
import jobicon from './images/Mask group.png'
import Header from './Header'
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from './RecrutimentPos'
import arrow from './images/arrow.png'
import arrow1 from './images/arrow1.png'
import b from './images/B.png'
import i from './images/I.png'
import u from './images/U.png'
import mask1 from './images/Mask group-1.png'
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from 'react-bootstrap/Button';
import mask4 from './images/Group 2394-1.png'
import mask5 from './images/Group 2395-2.png'
import mask6 from "./images/Mask group-link.png";
import group1 from './images/Group.png'
import Maskjob4 from './images/Mask group--1.png'

function Recruitment1() {

   
   const [sdate, setDate] = useState();
   const [textlist,settext] = useState([]);
   const changetextstyle = (e) => {
    console.log(e.target.id);
        if (e.target.id == "dotted-list") {
         
          let k = document.getElementById("freeform").value;
          console.log(document.getElementById("freeform").value);
          const myArray = document.getElementById("freeform").value.split(".");
          document.getElementById("freeform").value = myArray;
          let ul = document.createElement("ul");
          document.getElementById("freeform").value = "";
          for (let user of myArray) {
            let li = document.createElement("li");
            li.innerText = user;
        
            ul.appendChild(li);
               document.getElementById("freeform").value +=  li.innerText;
          }
         
          
        }
   }
   const changeStyles = (e) => {
     if (e.target.id == "bold") {
       var k = document.getElementById("freeform");
       if (k.style.fontWeight == "bold")
       {
       
       k.style.fontWeight = "none";
       console.log(k.style.fontWeight); 
       }
       else {
         console.log("ues");
         k.style.fontWeight = e.target.id;
       }
     }
     if (e.target.id == "italic") {
       var k = document.getElementById("freeform");
       if (k.style.fontStyle == "italic") k.style.fontStyle = "none";
       else {
         console.log("ues");
         k.style.fontStyle = e.target.id;
       }
     }
     if (e.target.id == "underline") {
       var k = document.getElementById("freeform");
       if (k.style.textDecoration == "underline")
         k.style.textDecoration = "none";
       else {
         console.log("ues");
         k.style.textDecoration = e.target.id;
       }
     }
   };
         
     const details = [
       {
         id: 1,
         name: "John Doe",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 2,
         name: "VicWayne",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Jane Doe",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Jane Doe",
         role: "Developer",
         candidates: "4 candidates",
       },
     ];
     const [back,setback] = useState("none");
     const [dec,setdec] = useState(false);
      const clickbtn = () => {
        setdec(true);
        setback("blur(8px)");
      };
        const clickbtnn = () => {
        setdec(false);
          setback("none");
        };
     const [data, setdata] = useState(true);
     const [opac,setopac] = useState('10');
      
    const showsearch = () => {
        setopac('0.1')
    }
     const showicon = (e) => {
       
          
          if(data)
          { 
            setdata(false);
            
        }
          else
          { 
            setdata(true);
            setopac('10');
          }
     }

     
  return (
    <div>
      <div style={{ filter: back }}>
        <Header />
        <div
          onClick={showsearch}
          className="main-block1"
          style={{ width: "100%", marginLeft: "-2%" }}
        >
          <div className="block" style={{ display: "flex", width: "100%" }}>
            <img
              src={searchbar}
              className="search-bar2"
              style={{ opacity: opac, position: "relative" }}
            />

            <input
              type="search"
              placeholder="        search"
              style={{ width: "60%" }}
              className="rec-search"
              onClick={showicon}
            />
            <div className="bag">
              <Link>
                <div>
                  <img src={jobs} className="bag-icon" />
                </div>
              </Link>
            </div>
            <div className="bag" style={{ backgroundColor: "#ffffff" }}>
              <Link>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={candidate} className="bag-icon-1" />
                  <p
                    style={{
                      fontSize: "9px",
                      marginLeft: "8%",
                      color: "#003666",
                      textDecoration: "none",
                    }}
                  >
                    candidate
                  </p>
                </div>
              </Link>
            </div>
            <div className="bag" style={{ backgroundColor: "#ffffff" }}>
              <Link>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={setting} className="bag-icon-2" />
                  <p
                    style={{
                      fontSize: "9px",
                      marginLeft: "18%",
                      color: "#003666",
                      textDecoration: "none",
                    }}
                  >
                    settings
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
          <Row>
            <Col></Col>
          </Row>
          <div
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            className="rec-select"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "10%", position: "relative", left: "0%" }}
            >
              <Dropdown
                className="rec-down"
                style={{ border: "none", outline: "none" }}
              >
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="rec-tog"
                >
                  All Employement
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "5%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="rec-tog"
                >
                  All Department
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "5%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  className="rec-tog"
                >
                  All Office
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "2%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  className="rec-tog"
                >
                  All status
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="new-job" onClick={clickbtn}>
              <div div className="user-job">
                <div>
                  {" "}
                  <img
                    src={Maskjob4}
                    style={{ marginLeft: "15px", marginTop: "10px" }}
                  />
                </div>
                <div className="post">
                  <p>NEW JOB POST</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "13%" }}>
            <div>
              {details.map((user) => (
                <div className="details0">
                  {user.name}
                  <p className="details-10">{user.role}</p>
                  <p className="details-20">{user.candidates}</p>
                </div>
              ))}
            </div>
          </div>
        
      </div>
      {dec ? (
        <div className="create" id="new--job">
          <div className="create-main">
            <div className="create-1">
              <div className=" text-center create-title">
                <h3>Create New Job</h3>
                <div className="create-line"></div>
              </div>
              <div className="create-content">
                <div className="create-circle">
                  <div className="create-arrow">
                    <img src={arrow} className="arrow-logo" />
                  </div>
                </div>
                <div>
                  <p className="create-txt">JOB INFO</p>
                </div>
                <div className="create-txt-logo">
                  <img src={arrow1} />
                </div>
                <div>
                  <h3 className="create-hiring">HIRING TEAM & WORKFLOW</h3>
                </div>
              </div>
            </div>
            <div className="form-create">
              <form>
                <div
                  class="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex" }}>
                    <label for="exampleInputEmail1" className="jobtitle">
                      Job Title
                    </label>
                    <span className="required-sym"></span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    className="form-enter-1"
                  />
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Employement Type
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Department
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Department
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            All Employement
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Office
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Office
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Employement Type
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          position: "relative",

                          width: "100%",
                          fontSize: "14px",
                          opacity: "0.5",
                        }}
                      >
                        <label for="exampleInputEmail1" className="jobtitle">
                          Expected Closing Date
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ display: "flex", width: "250px" }}
                      >
                        <input
                          type="date"
                          onChange={(e) => setDate(e.target.value)}
                          style={{
                            width: "100%",
                            fontSize: "14px",
                            opacity: "0.5",
                          }}
                          className="rec-tog-date"
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Salary Range
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Salary Range
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", width: "70%" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Hiring Manager
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ width: "100%", marginTop: "1%" }}
                      >
                        <Dropdown
                          className="rec-down-2"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "100%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Hiring Manager
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Notice Period
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1">
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            Notice Period
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ color: "black" }}>
                            <Dropdown.Item
                              href="#/action-1"
                              style={{ color: "black" }}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              style={{ color: "black" }}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              style={{ color: "black" }}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", width: "auto" }}>
                    <label for="exampleInputEmail1" className="jobtitle">
                      Description
                    </label>
                    <span className="required-sym"></span>
                  </div>
                  <div
                    className="description1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "5%",
                      
                    }}
                  >
                    <div
                      className="descrip-icon"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <img
                        src={b}
                        className="descrip-icon-1 bold"
                        id="bold"
                        onClick={changeStyles}
                      />
                      <img
                        src={i}
                        className="descrip-icon-1 italic"
                        id="italic"
                        onClick={changeStyles}
                      />
                      <img
                        src={u}
                        className="descrip-icon-1 underline"
                        id="underline"
                        onClick={changeStyles}
                      />
                      <div className="vc"></div>
                      <img
                        src={mask1}
                        className="descrip-icon-1"
                        id="dotted-list"
                        onClick={changetextstyle}
                      />
                      <img src={mask2} className="descrip-icon-1" />
                      <img src={mask3} className="descrip-icon-1" />
                      <img src={mask4} className="descrip-icon-1" />
                      <img src={mask5} className="descrip-icon-1" />
                      <img src={mask6} className="descrip-icon-1" />
                    </div>
                    <div className="upload1" style={{ display: "flex" }}>
                      <img
                        src={group1}
                        className="descrip-icon-1"
                        style={{ height: "20px", width: "20px" }}
                      />
                      <p className="upload-txt" style={{ marginLeft: "3px" }}>
                        Upload
                      </p>
                    </div>
                  </div>
                  <div className="txt-data">
                    <textarea
                      id="freeform"
                      name="freeform"
                      className="txt-upload"
                    ></textarea>
                  </div>
                </div>
              </form>

              <div
                className="button-section"
                style={{ display: "flex", marginBottom: "5%" }}
              >
                <Link
                  to="/Publish"
                  style={{ marginTop: "4%", marginLeft: "4%" }}
                >
                  <button
                    className="button--1"
                    style={{ marginTop: "13%", width: "100%" }}
                  >
                    <span>Published</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutiment"
                  style={{ marginTop: "4%", marginLeft: "4%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{ marginTop: "13%", width: "max-content" }}
                  >
                    <span>Internal Use</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutiment"
                  style={{ marginTop: "4.5%", marginLeft: "4%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{ marginTop: "13%", width: "100%" }}
                  >
                    <span>Closed</span>
                  </button>
                </Link>
                <Link
                  to="/Publish"
                  style={{ marginTop: "3%", marginLeft: "4%" }}
                >
                  <button
                    className="button--1"
                    style={{ marginTop: "13%", width: "max-content" }}
                  >
                    <span>Save and Continue</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutiment"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "4%",
                  }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{
                      marginTop: "15%",
                      width: "100%",
                      marginLeft: "14%",
                    }}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Recruitment1