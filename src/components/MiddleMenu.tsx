"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import '../app/style.css';


const MiddleMenu = () => (
  <Nav className =  "row justify-content-center pt-4">
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Men</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Women</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Kids</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Brands</strong></div>
    </Col>
    <Col className = "col-1">
      <strong>Search</strong>
    </Col>

  </Nav>
);

export default MiddleMenu;