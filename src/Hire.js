import React, { useState,useRef } from "react";
import arrowimg from "./images/download 5.png";
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
import "./Hire.css";
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";
import twitter from './images/twitter 1.png'
import edit from './images/edit 11.png';
import delete1 from './images/delete 6.png'
import agency from './images/agency 1.png'
import career from './images/career 2.png'
import facebook from './images/facebook 1.png'
import linkedin from './images/linkedin 1.png'
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import del from "./images/del.png";
import ed from "./images/ed.png";

import lock from './images/padlock 1.png'
import {DragDropContext , Droppable,Draggable} from 'react-beautiful-dnd';
import { sizeHeight } from '@mui/system';

function Hire() {

     const [sdate, setDate] = useState();
     const [textlist, settext] = useState([]);
     const dragItem = useRef();
     const dragOverItem = useRef();
     const [list, setList] = useState([
        "screening",
        "1st Interview",
       "2nd Interview"
     ]);

     const dragStart = (e, position) => {
       dragItem.current = position;
       console.log(e.target.innerHTML);
     };

     const dragEnter = (e, position) => {
       dragOverItem.current = position;
       console.log(e.target.innerHTML);
     };
    const drop = (e) => {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    };
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
            className="soc-rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "0%" }}
          >
            <p style={{ color: "#E0791B" }}>Hiring Workflow</p>
          </div>
          <div
            className="soc-rec-drop"
            style={{ marginLeft: "5%", position: "relative", left: "0%" }}
          >
            <p>Tags & sources</p>
          </div>
          <div
            className="soc-rec-drop"
            style={{ marginLeft: "5%", position: "relative", left: "0%" }}
          >
            <p>Email Templates</p>
          </div>

          <div
            className="new-job"
            style={{ marginLeft: "5%", position: "relative", left: "0%" }}
            maonClick={clickbtn}
          >
            <div div className="user-job">
              <div>
                {" "}
                <img
                  src={Maskjob4}
                  style={{ marginLeft: "35px", marginTop: "10px" }}
                />
              </div>
              <div className="post">
                <p>
                  <Link
                    to="/edits"
                    style={{
                      textDecoration: "none",
                      color: "#003666",
                      fontWeight: "700",
                      fontSize: "20",
                    }}
                  >
                    NEW STAGE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pos-rec">
          <div style={{ display: "flex" }}>
            <img
              src={lock}
              style={{
                marginLeft: "3%",
                height: "20px",
                marginTop: "0.5%",
              }}
            />
            <p
              className="lock-p"
              style={{
                marginLeft: "1%",
                height: "20px",
                marginTop: "0.5%",
              }}
            >
              Applied
            </p>
          </div>
          <div className="pos-line"></div>
          <div style={{ display: "flex" }}></div>
          <div className="pos-line-1"></div>

          {list &&
            list.map((item, index) => (
              <div
                className="lock-p-1"
                style={{
                  marginLeft: "8%",
                  position: "relative",
                  top: "-10%",
                  marginTop: "1%",
                  marginBottom: "0.5%",
                  fontSize: "18px",
                }}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable
              >
                <img className="ed" src={ed} />
                <img className="del" src={del} />
                {item}
                <div className="pos-line-2"></div>
              </div>
            ))}

          <div style={{ display: "flex" }}>
            <img
              src={lock}
              style={{
                marginLeft: "3%",
                height: "20px",
                marginTop: "0.5%",
              }}
            />
            <p
              className="lock-p"
              style={{
                marginLeft: "1%",
                height: "20px",
                marginTop: "0.5%",
              }}
            >
              Offered
            </p>
          </div>
          <div className="pos-line"></div>
          <div style={{ display: "flex" }}>
            <img
              src={lock}
              style={{
                marginLeft: "3%",
                height: "20px",
                marginTop: "0.5%",
              }}
            />
            <p
              className="lock-p"
              style={{
                marginLeft: "1%",
                height: "20px",
                marginTop: "0.5%",
              }}
            >
              Hired
            </p>
          </div>
          <div className="pos-line"></div>
          <div style={{ display: "flex" }}>
            <img
              src={lock}
              style={{
                marginLeft: "3%",
                height: "20px",
                marginTop: "0.5%",
              }}
            />
            <p
              className="lock-p"
              style={{
                marginLeft: "1%",
                height: "20px",
                marginTop: "0.5%",
              }}
            >
              Rejected
            </p>
          </div>
          <div className="pos-line"></div>
        </div>
      </Container>
    </div>
  );
}

export default Hire;
