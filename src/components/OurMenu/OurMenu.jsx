import MenuItemhook from "../../hooks/menuItem/MenuItemhook";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";


const OurMenu = () => {
    const [menus] = MenuItemhook();
    const popularItem = menus.filter(data => data.category == 'popular')

    // const [menus, setMenus] = useState([]);

    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(data => data.category == 'popular')
    //             setMenus(popularItem)
    //         })
    // }, [])



    return (
        <div className="max-w-5xl mx-auto">
            <SectionTitle smallTitle={"---Check it out---"} bigTitle={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    popularItem.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
            <div className="w-48 mx-auto my-10">
                <button className="btn border-b-4 border-b-cyan-950 text-center bg-white hover:border-b-cyan-950 hover:bg-white">View Full  Menu</button>
            </div>
        </div>
    );
};

export default OurMenu;