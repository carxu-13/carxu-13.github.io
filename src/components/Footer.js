import React from "react";
import { Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineMail} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className= "align-content-center font-link w-128">
            <Container fluid className="w-36">
                <Row className="bg-red-700 text-yellow-500 p-4 max-w-xs">
                        <a href="https://github.com/carxu-13">
                            <FaGithub icon="FaGithub" width={50} height = {50} rounded />
                        </a>
                        <a href="https://www.linkedin.com/in/caroline-xu1/">
                            <CiLinkedin icon="CiLinkedin" width={100} height = {100} rounded />
                        </a>
                        <a href="mailto:carolinexu2014@gmail.com">
                            <MdOutlineMail icon="MdOutlineMail" width={100} height = {100} rounded />
                        </a>
                </Row>
            </Container>
        </footer>
    )
}