import { Link } from "react-router-dom"
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>

            <div className="footer-columns">

                <div className="footer-name">
                    <a>Guilherme Dorow</a>
                    <a>Frontend Developer | React Developer</a>
                </div>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/guilherme-dorow/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                        LinkedIn
                    </a>
                    <a href="mailto:guilhermedorow@gmail.com">
                        <MdOutlineMailOutline className="mail-icon" />
                        guilherme.dorow@hotmail.com
                    </a>

                </div>

            </div>
            
        </footer>
    )
}