import React from 'react';
import '../product/product.css'
import img1 from '../../public/images/card_img1.png'

const Product = () => {
    const ProductDetails = [
        {
            "Name" : "Compressors",
            "Hero_image" : '/images/card_img1.png',
            "desc" : "A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind a partial vacuum.A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind "
        },
        {
            "Name" : "Vacuum Pumps",
            "Hero_image" : '/images/card_img1.png',
            "desc" : "A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind a partial vacuum.A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind "

        },
        {
            "Name" : "Airnet pipelines",
            "Hero_image" : '/images/card_img1.png',
            "desc" : "A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind a partial vacuum.A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind "
        },
        {
            "Name" : "Trident Dryers",
            "Hero_image" : '/images/card_img1.png',
            "desc" : "A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind a partial vacuum.A vacuum pump is a type of pump device that draws gas particles from a sealed volume in order to leave behind "
        },
        ]

    return (
        <div id="pro">
            {ProductDetails.map((item) => {
            return (
                <div key={item.name} id="flip-card" className="products">
                    <div id="flip-card-inner" className="product-main">
                        <div className="flip-card-front">
                        <div className="product-main-image">
                            <img src={item.Hero_image} className="product-main-image-img"/>
                        </div>
                        <div className="product-main-info">
                            <div className="product-main-name">
                                {item.Name}
                            </div>
                            <div className="product-main-det">
                                <p className="product-main-det-txt">View Details</p>
                            </div>
                        </div>
                        </div>
                        <div className="flip-card-back">
                            <h1>{item.Name}</h1>
                            <p>{item.desc}</p>
                            <p>Get a free quote</p>
                        </div>
                    </div>
                </div>
            );

        })}
        </div>
    );

};

export default Product;