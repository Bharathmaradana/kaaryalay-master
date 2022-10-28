import React,{useState,useRef} from 'react'
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import { Dropdown } from 'react-bootstrap';
import searchbar from "./images/search_black_24dp 1.png";
import lock from './images/padlock 1.png'
import jobs from "./images/jobs.png";
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import { Container, Row, Col } from "react-bootstrap";
import Header from './Header';


import {DragDropContext , Droppable,Draggable} from 'react-beautiful-dnd';
import { sizeHeight } from '@mui/system';


function RecrutimentPos() {
    const [name,setname]=useState("Muskan Bhatia");
    const [email,setemail] = useState("beyondhumanresouces@gmail.com")
     const [back, setback] = useState("none");
     const [dec, setdec] = useState(false);
     const dragItem = useRef();
     const dragOverItem = useRef();
     const [list, setList] = useState([
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
            <div onClick={showsearch} className="main-block12">
              <div className="block" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="search-bar12"
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
      </Container>
      <div className="create-main-1">
        <div className="create-1">
          <div className=" text-start create-title-1">
            <h3>Create New Job</h3>
            <div className="create-line-1"></div>
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
            <div className="create-txt-logo-1">
              <img src={arrow1} />
            </div>
            <div>
              <h3 className="create-hiring-1">HIRING TEAM & WORKFLOW</h3>
            </div>
          </div>
          <div>
            <div>
              <div className="block" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="search-bar-1"
                  style={{ opacity: opac }}
                />

                <input
                  type="search"
                  placeholder="        search"
                  style={{ width: "50%" }}
                  className="rec-search"
                  onClick={showicon}
                />

                <p className="hiring-workflow">Hiring Workflow</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  marginLeft: "5%",
                }}
              >
                <p className="name-pos">{name} </p>
                <p className="email-pos">{email}</p>
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
                <div style={{ display: "flex" }}>
                  <p
                    className="lock-p-1"
                    style={{
                      marginLeft: "8%",
                      height: "20px",
                      position: "relative",
                     fontSize:'18px',
                      paddingTop: "1%",
                    }}
                  >
                    screening
                  </p>
                </div>
                <div className="pos-line-1"></div>

                {list &&
                  list.map((item, index) => (
                    <div
                      className="lock-p-1"
                      style={{
                        marginLeft: "8%",
                        position: "relative",
                        top: "-10%",
                        marginTop:'1%',
                        marginBottom:'0.5%',
                        fontSize: "18px",
                      }}
                      onDragStart={(e) => dragStart(e, index)}
                      onDragEnter={(e) => dragEnter(e, index)}
                      onDragEnd={drop}
                      key={index}
                      draggable
                    >
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
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "3%",
                    marginBottom: "3%",
                  }}
                >
                  <button className="button--1">
                    <span>Conform</span>
                  </button>
                  <button className="button--1" style={{ marginLeft: "3%" }}>
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecrutimentPos