"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import '../app/style.css';

const FooterMenu = () => (
  <footer id = "footer" className = "py-5" style = {{backgroundColor: "#292929", color: "white"}}>
        <Container>
            <Row>
                <Col>
                    <h5>NAVIGATION</h5>
                    <hr/>
                    <div className ="list-unstyled">
                        <div>About Us</div>
                        <div>Employment</div>
                        <div>Videos</div>
                     </div>

                </Col>
                <Col>
                    <h5>MAIN MENU</h5>
                    <hr/>
                    <div className="list-unstyled">
                        <div>Men</div>
                        <div>Women</div>
                        <div>Kids</div>
                     </div>

                </Col>

                <Col>
                    <h5>CONNECT</h5>
                    <hr/>
                    <div className="list-unstyled">
                        <div>Sign up for the latest updates</div>
                        <input type="text" placeholder="Enter your email address" />
                        <Button style={{backgroundColor: "#000000ff", borderColor: "#000000ff"}}>Join</Button>
                     </div>

                </Col>

            </Row>

        </Container>


    </footer>
);

export default FooterMenu;