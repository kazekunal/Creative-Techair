import React from 'react';
import './client.css'
import icon from '../../public/images/icon.svg'

const Client = () => {
    return (
        <div className="clients-main">
            <div className="clients-main-title">
                Word from Our Clients
            </div>

                <div className="clients-main-box">
                    <div className="clients-main-box-left">
                        <div className="clients-main-box-left__img">
                            <img src={icon.src} alt="icon" className="clients-main-box-left-icon"/>
                        </div>
                    </div>
                    <div className="clients-main-box-right">
                        <div className="clients-main-desc">
                            Received an excellent air compressor from Creative Techair, and the experience was exceptional. Fast delivery, great tech support, and excellent service. The compressor's quality is outstanding, and the knowledgeable support team guided me through setup. Highly recommended! <br/>
                            Moreover, their commitment to providing good service was evident in every interaction. From the moment I placed the order until the delivery and beyond, their customer service was top-notch. They were always responsive, addressing any concerns promptly and ensuring my satisfaction throughout the entire process.
                        </div>
                        <div className="clients-main-name">
                            Sana Singh
                        </div>
                </div>

            </div>
            <div className="customer-bar">
                <div className="customer-bar-1"></div>
                <div className="customer-bar-2"></div>
                <div className="customer-bar-3"></div>
                <div className="customer-bar-4"></div>
                <div className="customer-bar-5"></div>
            </div>
        </div>
    );
};

export default Client;