'use client'

import React, {useState} from 'react';
import cp from '../../public/images/cp_img.png'
import '../companyinfo/companyinfo.css'
import Link from "next/link";
import url from '../../src/app/about/page'


const Companyinfo = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
    return (
        <div>
        <div className="company-main">
            <div className="company-main-leftimg">
                <img src={cp.src} alt="cp-image" className="company-main-leftimg__img" />
            </div>
            <div className="company-main-right"  id="company">
                <div className="company-main-right_heading">
                    Creative Techair
                </div>
                <div className="company-main-right_subtitle">
                    Helping companies since 2017
                </div>
                <div className="company-main-right_body">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We at, 'Creative TechAir Private , take liberty to introduce ourselves as a Prime distributor of Chicago Pneumatic Sales, (A Division of ATLAS COPCO, Sweden) for Sales & Service of Air Compressor System.
                    Established in the year 2012 we have made our name in list of top service providers for Compressors and allied equipments .We also provide complete solution to your compressod air distribution including design and execution of pipeline from the source to the point of use with lowest cost of ownership. We are an engineering consultants having a team of Engineers with more than 20 years of enriched experience for Utility Project executions starting from understanding the need of customers, selecting a right product, get the value propositions from equipment suppliers, evaluate the same and then arrive at value cost effective propositions.
                    Creative TechAir Private Limited offers Engineering Services, procurement, construction & commissioning maintaining effective control of schedule, quality and safety to the benefit of project owners.
                </div>
                <div className="company-main-right_body__button">
                    <p className="company-main-right_body__button-text">
                        <Link className="company-main__link"
                              onClick={() => setOpenMenu(false)}
                              href="./about">Read More
                        </Link>
                    </p>
                </div>
            </div>
        </div>
            <div id="company-products">
                <p> Consulting Products</p>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Companyinfo;