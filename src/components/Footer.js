import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo1 from '../images/logo-white.png';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <>
            <section className='footer-container'>
                <div className='footer-logo'>
                    <img src={logo1} alt="Logo" />
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><Link to="/"> HOME</Link></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">MENU</a></li>
                        <li><Link to="/reservation">RESERVATIONS</Link></li>
                        <li><a href="#">ORDER ONLINE</a></li>
                        <li><a href="#">LOGIN</a></li>


                    </ul>
                </div>
                <div className='footer-address'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> &nbsp; 1609 North Avenue, Lake St, Chicago, IL, USA</p>
                    <p><FontAwesomeIcon icon={faPhone} />&nbsp; (312) 555-1234
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;littlelemon@mail.com
                    </p>
                    <p>
                        <a href="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.instagram.com" target='_blank'><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://twitter.com" target='_blank'><FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.youtube.com" target='_blank'><FontAwesomeIcon icon={faYoutube} />&nbsp;&nbsp;&nbsp;</a>
                    </p>

                </div>

            </section>
            <section className="footer-bottom">
                <ul>
                    <li>Privacy Policy</li>
                    <li>FAQs</li>
                    <li>Terms & Conditions</li>
                </ul>

            </section>
        </>

    );
}
