import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";


import "./index.css"

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
        <h1>Contact</h1>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: jagadeeshsiddani03@gmail.com</p>
          <p>Phone: +91 9666977354</p>
          <a href="https://github.com/jagadeesh056" target="_blank" rel="noreferrer">Github<BiLinkExternal /></a><br />
          <a href="https://www.linkedin.com/in/jagadeesh-siddani-914a061b6/" target="_blank" rel="noreferrer">LinkedIn<BiLinkExternal /></a>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow On</h3>
          <div className="social-icons">
            <a href="https://github.com/jagadeesh056" target="_blank"  rel="noreferrer" className="social-icon">
              <i className="fab fa-github"><FaGithub /></i>
            </a>
            <a href="https://www.linkedin.com/in/jagadeesh-siddani-914a061b6/" target="_blank"  rel="noreferrer" className="social-icon">
              <i className="fab fa-linkedIn"><FaLinkedin /></i>
            </a>
            <a href=""  rel="noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"><FaFacebook /></i>
            </a>
            <a href=""  rel="noreferrer" className="social-icon">
              <i className="fab fa-twitter"><FaTwitter /></i>
            </a>
            <a href=""  rel="noreferrer" className="social-icon">
              <i className="fab fa-instagram"><FaInstagram /></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 jagadeeshsiddani. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer