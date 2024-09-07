import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineMail} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    const iconStyle = { fontSize: '2rem' }; // Adjust the size as needed

    return (
        <footer section id = "footer" className= "align-content-center font-link">
            <div className="flex justify-center space-x-8 text-white">
                <div>
                <h2 style = {{marginBottom: '20px'}}>Interested in working with me? Contact me here!</h2>
                <br />
                </div>
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