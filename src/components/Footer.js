import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineMail} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    const iconStyle = { fontSize: '2rem' }; // Adjust the size as needed

    return (
        <footer className= "align-content-center font-link w-1000">
            <div className="flex flex-row justify-center items-center space-x-8">
                <a href="https://github.com/carxu-13" style={iconStyle}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/caroline-xu1/" style={iconStyle}>
                    <CiLinkedin/>
                </a>
                <a href="mailto:carolinexu2014@gmail.com" style={iconStyle}>
                    <MdOutlineMail />
                </a>
            </div>
        </footer>
    )
}