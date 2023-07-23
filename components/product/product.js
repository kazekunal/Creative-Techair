import React from 'react';
import '../product/product.css'
import img1 from '../../public/images/card_img1.png'

const Product = () => {
    const ProductDetails = [
        {
            "Name" : "Compressors",
            "Hero_image" : '/images/card_img1.png'
        },
        {
            "Name" : "Vacuum Pumps",
            "Hero_image" : '/images/card_img1.png'
        },
        {
            "Name" : "Airnet pipelines",
            "Hero_image" : '/images/card_img1.png'
        },
        {
            "Name" : "Trident Dryers",
            "Hero_image" : '/images/card_img1.png'
        },
        ]

    return (
        <div id="pro">
            {ProductDetails.map((item) => {
            return (
                <div key={item.name} className="products">
                    <div className="product-main">
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
                </div>
            );

        })}
        </div>
    );

};

export default Product;