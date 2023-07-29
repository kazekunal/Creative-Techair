import React from 'react';
import './footer.css'
import logo from '../../public/images/logo.png'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-section-1">
                <div className="footer-section-1__upper">
                <div className="footer-logo">
                    <img src={logo.src} alt={logo} className="logo"/>
                </div>
                <div className="footer-company">
                    Creative Techair Pvt. Ltd.
                </div>
                </div>
                <div className="footer-subtext">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="footer-section-2">
                <p className="footer-section-2__1">Products</p>
                <p className="footer-section-2__sub">Compressors</p>
                <p className="footer-section-2__sub">Vacuum Pumps</p>
                <p className="footer-section-2__sub">Airnet Pipelines</p>
                <p className="footer-section-2__sub">Trident Dryers</p>
            </div>
            <div className="footer-section-3">
                <p className="footer-section-2__1">Team</p>
                <p className="footer-section-2__sub">Niraj Khurana, Director</p>
                <p className="footer-section-2__sub">Sahil Passan, Director</p>
            </div>
            <div className="footer-section-4">
                <p className="footer-section-2__1">Contact Us</p>
                <icon/>
                <p className="footer-section-2__sub">+91 9899060226</p>
                <icon/>
                <p className="footer-section-2__sub">creativetechair@gmail.com</p>
                <icon/>
                <p className="footer-section-2__sub">IMT Manisar, Manisar, Haryana</p>
            </div>
        </div>
    );
};

export default Footer;