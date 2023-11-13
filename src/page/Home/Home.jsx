import BistroBoss from "../../components/BistroBoss/BistroBoss";
import CallUs from "../../components/CallUs/CallUs";
import OrderOnline from "../../components/OrderOnline/OrderOnline";
import OurMenu from "../../components/OurMenu/OurMenu";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OrderOnline></OrderOnline>
            <BistroBoss></BistroBoss>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;