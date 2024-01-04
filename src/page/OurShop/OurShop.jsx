import Banner from "../../components/Banner/Banner";
import img from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import MenuItemhook from "../../hooks/menuItem/MenuItemhook";
import { useState } from "react";

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = MenuItemhook()
    const offered = menus.filter(data => data.category == 'offered')
    const dessert = menus.filter(data => data.category == 'dessert')
    const pizza = menus.filter(data => data.category == 'pizza')
    const salad = menus.filter(data => data.category == 'salad')
    const soup = menus.filter(data => data.category == 'soup')
    const drinks = menus.filter(data => data.category == 'drinks')

    return (
        <div>
            <Banner img={img} title={"OUR SHOP"} description={"Would you like to try a dish?"}></Banner>
            <Tabs className={"text-center my-10"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SOUP</Tab>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;