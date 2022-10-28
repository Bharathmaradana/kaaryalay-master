import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import logo from "./images/logo 6.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse.js";
import group from "./images/Group 148.png";
import vector from "./images/Vector-1.png";
import profile from "./images/Group 147.png";

function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#003466" }}
        variant="dark"
        className="rec-bar"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="img-fluid rec-logo"
              style={{ height: "55px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto s-2 justify-content-center">
              <a href="#features" className="s-1">
                DashBoard
              </a>
              <a href="#pricing" className="s-1">
                Recruitment
              </a>
              <a href="#pricing" className="s-1">
                Employees
              </a>
              <a href="#pricing" className="s-1">
                Checklist
              </a>
              <a href="#pricing" className="s-1">
                Timeoff
              </a>
              <a href="#pricing" className="s-1">
                Attendance
              </a>{" "}
              <a href="#pricing" className="s-1">
                Payroll
              </a>
              <a href="#pricing" className="s-1">
                More
              </a>
            </Nav>
            <NavbarCollapse className="justify-content-start h-1">
              <a href="#deets">
                <div className="rec-icons">
                  <img src={group} className="chat" />
                </div>
              </a>
              <a href="#deets" style={{ marginLeft: "13%" }}>
                <div className="rec-icons">
                  <img src={vector} className="chat" />
                </div>
              </a>
              <a href="#deets" style={{ marginLeft: "13%" }}>
                <Link to="/common">
                  <img src={profile} className="chat1" />
                </Link>
              </a>
            </NavbarCollapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

/*
  
 <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#003466" }}
        variant="dark"
       
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
             
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto s-2 justify-content-center">
              <a href="#features" className="s-1">
                Features
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>{" "}
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
            </Nav>
          
              <Link href="#deets" className="h-1">
                More deets
              </Link>
              <Link eventKey={2} href="#memes">
                Dank memes
              </Link>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Dashboard />
 <header>
      <div className="container-1 container-nav">
        <div className='brand'>
          <h1>Kaaryalay</h1>
        </div>
        <div className="s-1">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="icons-nav">
            <nav>
              <ul>
                <li>
                  <a href="#">something</a>
                </li>
                <li>
                  <a href="#">something</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
 <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:'#003466',height:'100%'}} variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="md-auto s-2">
            <Link href="#features" className="s-1">
              Features
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>{" "}
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end s-3">
            <Nav.Link href="#deets" className="h-1">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
              Dank memes
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     */
