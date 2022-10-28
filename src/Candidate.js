import React,{useState} from 'react';
import arrowimg from './images/download 5.png'
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/jobs.png";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './App.css'
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";

function createData(
  name,
  calories,
  fat,
  carbs,
  hr,
  protein,
  date
) {
  return { name, calories, fat, carbs, hr, protein, date };
}

const rows = [
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
];

export default function Userdata() {


  
   const [sdate, setDate] = useState();
   const [textlist, settext] = useState([]);
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
         document.getElementById("freeform").value += li.innerText;
       }
     }
   };
   const changeStyles = (e) => {
     if (e.target.id == "bold") {
       var k = document.getElementById("freeform");
       if (k.style.fontWeight == "bold") {
         k.style.fontWeight = "none";
         console.log(k.style.fontWeight);
       } else {
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
       role: "developer",
       candidates: "4 candidates",
     },
     {
       id: 2,
       name: "VicWayne",
       role: "developer",
       candidates: "4 candidates",
     },
     {
       id: 3,
       name: "Jane Doe",
       role: "developer",
       candidates: "4 candidates",
     },
     {
       id: 3,
       name: "Jane Doe",
       role: "developer",
       candidates: "4 candidates",
     },
   ];
   const [back, setback] = useState("none");
   const [dec, setdec] = useState(false);
   const clickbtn = () => {
     setdec(true);
     setback("blur(8px)");
   };
   const clickbtnn = () => {
     setdec(false);
     setback("none");
   };
   const [data, setdata] = useState(true);
   const [opac, setopac] = useState("10");

   const showsearch = () => {
     setopac("0.1");
   };
   const showicon = (e) => {
     if (data) {
       setdata(false);
     } else {
       setdata(true);
       setopac("10");
     }
   };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <div onClick={showsearch} className="main-block1">
              <div className="block" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="search-bar"
                  style={{ opacity: opac }}
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
          </Col>
        </Row>
        <div
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
          className="rec-select"
        >
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "0%" }}
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
                All Jobs
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
                All Stages
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
                All Tags
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
                All Sources
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
                All Skills
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
                  style={{ marginLeft: "5px", marginTop: "10px" }}
                />
              </div>
              <div className="post">
                <p>
                  {" "}
                  <Link
                    to="/upload"
                    
                    style={{ textDecoration: "none",color:'#003666',fontWeight:'700',fontSize:'20' }}
                  >
                    New Candidate
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginLeft: "3%", position: "relative" }}
          className="download"
        >
          <img src={arrowimg} style={{ height: "20px", width: "20px" }} />
          <p style={{ marginLeft: "1%" }}>Download CV</p>
        </div>
      </Container>
      <TableContainer
        component={Paper}
        style={{
          width: "80%",
          margin: "auto",
          boxShadow: "0 0 10px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="child---1">Full Name</p>{" "}
              </TableCell>
              <TableCell>
                <p className="child---1"> Email ID</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Phone No</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> CV</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Job</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Created Date</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Expected Joining Date</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="user-table"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  <img
                    src={arrowimg}
                    style={{ height: "20px", width: "20px" }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.hr}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.protein}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
