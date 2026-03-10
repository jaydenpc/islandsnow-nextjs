"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import '../app/style.css';


const FullWidthImage = () => (
  <Nav className = "row justify-content-center">
    <Image alt = "Island Snow Main Image" className = "img-fluid pt-3" src = "https://courses.ics.hawaii.edu/ics314s26/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"></Image>


  </Nav>
);

export default FullWidthImage;