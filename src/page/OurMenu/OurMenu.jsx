import Banner from "../../components/Banner/Banner";
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from "react-helmet-async";
import MenuItemhook from "../../hooks/menuItem/MenuItemhook";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/OurMenu/MenuItem";
import img2 from "../../assets/home/chef-service.jpg"

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

            {/* our banner */}
            <Banner img={img} title={"OUR MENU"} description={"Would you like to try a dish?"}></Banner>

            {/* offered food */}
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

            {/* dessert food banner */}
            <Banner img={img2} title={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Banner>

            {/* dessert food */}
            <div className=" max-w-5xl mx-auto my-12">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto" >
                    {
                        dessert.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                    }
                </div>
                <div className="w-64 mx-auto my-10">
                    <button className="btn border-b-4 border-b-cyan-950 text-center bg-white hover:border-b-cyan-950 hover:bg-white">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* pizza food*/}
            <Banner img={img2} title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Banner>

            {/* pizza food */}
            <div className=" max-w-5xl mx-auto my-12">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto" >
                    {
                        pizza.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                    }
                </div>
                <div className="w-64 mx-auto my-10">
                    <button className="btn border-b-4 border-b-cyan-950 text-center bg-white hover:border-b-cyan-950 hover:bg-white">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>


            {/* salad food*/}
            <Banner img={img2} title={"SALAD"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Banner>

            {/* salad food */}
            <div className=" max-w-5xl mx-auto my-12">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto" >
                    {
                        salad.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                    }
                </div>
                <div className="w-64 mx-auto my-10">
                    <button className="btn border-b-4 border-b-cyan-950 text-center bg-white hover:border-b-cyan-950 hover:bg-white">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>


            {/* soup food*/}
            <Banner img={img2} title={"SOUP"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Banner>

            {/* soup food */}
            <div className=" max-w-5xl mx-auto my-12">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto" >
                    {
                        soup.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
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