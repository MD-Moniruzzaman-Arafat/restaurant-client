import Banner from "../../components/Banner/Banner";
import img from "../../assets/shop/banner2.jpg"

const OurShop = () => {
    return (
        <div>
            <Banner img={img} title={"OUR SHOP"} description={"Would you like to try a dish?"}></Banner>
        </div>
    );
};

export default OurShop;