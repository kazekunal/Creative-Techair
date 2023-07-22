import '../header/header.css'
import logo from '../../public/images/logo 3.png'


const Header = () => {

    // // When the user scrolls the page, execute myFunction
    // window.onscroll = function() {myFunction()};
    //
    // // Get the navbar
    // const navbar = document.getElementsByClassName("header-main");
    //
    // // Get the offset position of the navbar
    // const sticky = navbar.offsetTop;
    //
    // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }


    return (
        <div className="header-main">
            <div className="header-main_container">
                <div className="header-main_container-right">
                    <p className="header-main_container__item-1">
                        <img src={logo.src} className="navbar-logo"/>
                    </p>
                    <p className="header-main_container__item-2"><a href="#Hero-Section" className="header-main_container__item-3__a">Creative Techair Pvt. Ltd</a></p>
                </div>
                <div className="header-main_container-left">
                    <p className="header-main_container__item-3"><a href="#Hero-Section" className="header-main_container__item-3__a">Home</a></p>
                    <p className="header-main_container__item-4"><a href="#company" className="header-main_container__item-3__a">About</a></p>
                    <p className="header-main_container__item-5"><a href="#company-products" className="header-main_container__item-3__a">Our Products</a></p>
                    <p className="header-main_container__item-6"><a href="#" className="header-main_container__item-3__a">Contact Us</a></p>
                </div>
            </div>
        </div>
    );
};

export default Header;


