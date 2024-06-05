import React from "react";
import { Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <footer className= "justify-content-center font-link">
            <Container fluid>
                <Row className="bg-red-700 text-yellow-500 p-4">
                    <Col>
                        <a href="https://github.com/carxu-13">
                            <Image src="github.png" className="githubIcon" width={50} height = {50} rounded />
                        </a>
                        <a href="https://www.linkedin.com/in/caroline-xu1/">
                            <Image src="linkedin.png" className="linkedinIcon" width={50} height = {50} rounded />
                        </a>
                    </Col>
                    <Col>
                        <a href="mailto:carolinexu2014@gmail.com">
                            <Image src="email.png" className="emailIcon" width={50} height = {50} rounded />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}