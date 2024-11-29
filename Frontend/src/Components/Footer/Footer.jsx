import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LOGO from '../../asserts/LOGO(b).jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="container">
                    <div className="logo">
                        <a href="#img">
                            <img src={LOGO} alt="logo" width="250" height="150" />
                        </a>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <hr />
                        <ul>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Internships">Internships</a></li>
                            <li><a href="#LMS">LMS</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <hr />
                        <div>
                            <a href="https://www.linkedin.com/company/webcook-software-solutions-pvt-ltd/"><i className="fab fa-linkedin-in  social"></i></a>
                            <a href="https://www.facebook.com/share/ZkG58LAU87zQVmkm/?mibextid=qi2Omg"><i className="fab fa-facebook-f social"></i></a>
                            <a href="https://www.instagram.com/webcooksoftwaresolutions?utm_source=qr&amp;igsh=MWI4aGU3YzhlMmV2eA=="><i className="fab fa-instagram social"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <hr />
                        <span><i className="fa-regular fa-envelope"></i> hr.webcook@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2024 WebCook Software Solutions Pvt.Ltd. All Rights Reserved. Designed By Team WebCook Software Solutions Pvt.Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;
