import Header from "../../components/header/header";
import HeroSection from "../../components/hero-section/HeroSection";
import Companyinfo from "../../components/companyinfo/companyinfo";
import Product from "../../components/product/product";
import Company from "../../components/company/company";
import Client from "../../components/clients/client";
import Footer from "../../components/footer/footer";

const Page = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Companyinfo/>
            <Product/>
            {/*<Company/>*/}
            {/*adding the company stack carousel is not successful*/}
            <Client/>
            <Footer/>
        </div>
    );
};

export default Page;