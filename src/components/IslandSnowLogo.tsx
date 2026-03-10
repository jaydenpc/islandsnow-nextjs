"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../app/style.css';

const IslandSnowLogo = () => (
  <Row className = "pt-3">
    <Col className = "col-12 text-center">
      <Image src="https://courses.ics.hawaii.edu/ics314s26/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" className="img-fluid rounded mx-auto d-block py-1"/>
    </Col>

  </Row>
);

export default IslandSnowLogo;