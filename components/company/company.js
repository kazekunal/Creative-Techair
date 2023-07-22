'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './company.css'
import clientimg from '../../public/images/imgclient.png'
import Carousel from 'react-bootstrap/Carousel';
import { createContext } from 'react'
const Context = createContext()
const Company = () => {
    return (
        <div className="carousel-company">
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="carousel-company-img__1"
                    src={clientimg.src}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-company-title">Rockman</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="carousel-company-img__2"
                    src={clientimg.src}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-company-title">Maruti Suzuki</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-company-img__3"
                    src={clientimg.src}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-company-title">DRDO</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Company;