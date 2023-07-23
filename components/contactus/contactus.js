import './contactus.css';
import bg from '../../public/images/backimg2_cleanup.png'
import Accordian from "../questions/accordian";
import Footer from "../footer/footer";
import React from "react";

const Contactus = () => {
    return (
        <div>
            <img src={bg.src} className="image_back"/>
            <div className="contact-section">
                <p className="contact-section-title">Contact Our Friendly Team</p>
                <p className="contact-section-subtitle">Let us know how we can help</p>
            </div>
            <div className="contact-cards">
                <div className="contact-card1">
                    <icon></icon>
                    <div className="card1_det">
                        <p className="card1_det_para1">Chat to sales</p>
                        <p className="card1_det_para2">Speak to our friendly team.</p>
                        <p className="card1_det_para3">Sales@gmail.com</p>
                    </div>
                </div>
                <div className="contact-card2">
                    <icon></icon>
                    <div className="card1_det">
                        <p className="card1_det_para1">Chat to support</p>
                        <p className="card1_det_para2">We're here to help.</p>
                        <p className="card1_det_para3">support@gmail.com</p>
                    </div>
                </div>
                <div className="contact-card3">
                    <icon></icon>
                    <div className="card1_det">
                        <p className="card1_det_para1">Visit Us</p>
                        <p className="card1_det_para2">Visit our office HQ</p>
                        <p className="card1_det_para3">View on Google Maps</p>
                    </div>
                </div>
                <div className="contact-card4">
                    <icon></icon>
                    <div className="card1_det">
                        <p className="card1_det_para1">Call Us</p>
                        <p className="card1_det_para2">Mon-Fri From 9am to 7pm</p>
                        <p className="card1_det_para3">+91-9953485540</p>
                    </div>
                </div>
            </div>
            <Accordian/>
            <div className="company-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93862.83013766442!2d76.87053177049073!3d28.389818988980792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e685f7ffd23%3A0xdee3e7c6c905333e!2sCyberwalk%20-%20the%20Greener%20pastures!5e0!3m2!1sen!2sin!4v1690134119624!5m2!1sen!2sin"
                    className="map" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/*<iframe*/}
                {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.442005228027!2d76.89317208449943!3d28.375714933330325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e685f7ffd23%3A0xdee3e7c6c905333e!2sCyberwalk%20-%20the%20Greener%20pastures!5e0!3m2!1sen!2sin!4v1690130143457!5m2!1sen!2sin"*/}
                {/*    className="map" allowFullScreen="" loading="lazy"*/}
                {/*    referrerPolicy="no-referrer-when-downgrade">*/}
                {/*</iframe>*/}
            </div>
            <Footer/>
        </div>
    );
};

export default Contactus;