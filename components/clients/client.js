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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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