import React from 'react';
import '../hero-section/HeroSection.css'
import backimg from '../../public/images/backimg.jpeg'

const HeroSection = () => {
    return (
        <div id="Hero-Section">
            <div className="Hero-Section-bgsection">
                <img src={backimg.src} alt="" className="Hero-Section-bg" />
            </div>
            <div className="Hero-Section-main">
                <div className="Hero-Section-main_1">
                    <p className="Hero-Section-main_1__para">
                        EXPERTS IN COMPRESSED AIR DISTRIBUTION SYSTEM
                    </p>
                </div>
                <div className="Hero-Section-main_2">
                    <p className="Hero-Section-main_1__para">
                        We have expertise in the field of Design, supply, fabrication and erection of all kinds of piping for Compressed Air. We provide complete solution from the source to the point of use for compressed air with lowest cost of ownership
                    </p>
                </div>
                <div className="Hero-Section-main_3">
                    <p className="Hero-Section-main_3__btn">
                        Get A Free Quote Today
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;