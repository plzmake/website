import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
//import { Stripe } from "@stripe/stripe-js";
const Footer = () => {
    
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    If you're a music lover or someone who enjoys high-quality sound, our website is the perfect destination for you!<br/>
                    We offer a wide range of bluetooth headphones, earbuds and speakers, designed to satisfy all your audio needs. <br/>
                    Our collection includes the latest cutting-edge technology, stylish designs, and premium craftsmanship, ensuring that you'll always find the perfect product to suit your style and taste.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Thu Duc, Ho Chi Minh
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: mucsic@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span onClick={() => navigate(`/category/1`)} className="text">Headphones</span>
                    <span onClick={() => navigate(`/category/3`)} className="text">Smart Watches</span>
                    <span onClick={() => navigate(`/category/2`)} className="text">Bluetooth Speakers</span>
                    <span onClick={() => navigate(`/category/4`)} className="text">Wireless Earbuds</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    SoundSpace
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
