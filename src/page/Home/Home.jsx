import { Helmet } from "react-helmet-async";
import BistroBoss from "../../components/BistroBoss/BistroBoss";
import CallUs from "../../components/CallUs/CallUs";
import NewItemInfo from "../../components/NewItemInfo/NewItemInfo";
import OrderOnline from "../../components/OrderOnline/OrderOnline";
import OurMenu from "../../components/OurMenu/OurMenu";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <OrderOnline></OrderOnline>
            <BistroBoss></BistroBoss>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
            <NewItemInfo></NewItemInfo>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;