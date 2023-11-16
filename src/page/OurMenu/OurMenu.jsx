import Banner from "../../components/Banner/Banner";
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from "react-helmet-async";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Our-Menu</title>
            </Helmet>
            <Banner img={img} title={"OUR MENU"} description={"Would you like to try a dish?"}></Banner>
        </div>
    );
};

export default OurMenu;