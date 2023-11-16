import Banner from "../../components/Banner/Banner";
import img from '../../assets/menu/banner3.jpg'

const OurMenu = () => {
    return (
        <div>
            <Banner img={img} title={"OUR MENU"} description={"Would you like to try a dish?"}></Banner>
        </div>
    );
};

export default OurMenu;