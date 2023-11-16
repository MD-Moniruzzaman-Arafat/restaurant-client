import Banner from "../../components/Banner/Banner";
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from "react-helmet-async";
import MenuItemhook from "../../hooks/menuItem/MenuItemhook";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/OurMenu/MenuItem";

const OurMenu = () => {

    const [menus] = MenuItemhook()
    const offered = menus.filter(data => data.category == 'offered')
    const dessert = menus.filter(data => data.category == 'dessert')
    const pizza = menus.filter(data => data.category == 'pizza')
    const salad = menus.filter(data => data.category == 'salad')
    const soup = menus.filter(data => data.category == 'soup')
    // const drinks = menus.filter(data => data.category == 'drinks')
    // const popular = menus.filter(data => data.category == 'popular')



    return (
        <div>
            <Helmet>
                <title>Our-Menu</title>
            </Helmet>
            <Banner img={img} title={"OUR MENU"} description={"Would you like to try a dish?"}></Banner>
            <SectionTitle smallTitle={"---Don't miss---"} bigTitle={"TODAY'S OFFER"}></SectionTitle>
            <div className=" max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto" >
                    {
                        offered.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                    }
                </div>
                <div className="w-64 mx-auto my-10">
                    <button className="btn border-b-4 border-b-cyan-950 text-center bg-white hover:border-b-cyan-950 hover:bg-white">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;