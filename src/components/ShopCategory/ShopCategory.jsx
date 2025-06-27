import React, { useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import Card from '../../reUseableComponents/Card';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useParams } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';

export default function ShopCategory() {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soups');
    const desserts = menu.filter(item => item.category === 'desserts');
    const drinks = menu.filter(item => item.category === 'drinks');

    console.log(soups, desserts);


    const tabs = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
    const { categoryName } = useParams();
    const categoryIndex = tabs.indexOf(categoryName);
    const [tabIndex, setTabIndex] = useState(categoryIndex !== -1 ? categoryIndex : 0);

    return (
        <>
            <div className='max-w-6xl mx-auto px-4 py-10'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center mb-6">
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                salads.map(item => <Card key={item._id} item={item} />)
                            }

                        </div>
                        <div className="join mt-2.5">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                                defaultChecked
                            />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                pizzas.map(item => <Card key={item._id} item={item} />)
                            }
                        </div>
                        <div className="join mt-2.5">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                            />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                soups.map(item => <Card key={item._id} item={item} />)
                            }
                        </div>
                        <div className="join mt-2.5">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                            />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                desserts.map(item => <Card key={item._id} item={item} />)
                            }
                        </div>
                        <div className="join mt-2.5">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                            />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                drinks.map(item => <Card key={item._id} item={item} />)
                            }
                        </div>
                        <div className="join mt-2.5">
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label="1"
                            />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}
