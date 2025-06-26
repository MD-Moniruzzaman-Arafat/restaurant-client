import React from 'react'
import 'react-tabs/style/react-tabs.css';
import Card from '../../reUseableComponents/Card';

export default function ShopCategory() {
    return (
        <>
            <div className='max-w-6xl mx-auto px-4 py-10'>
                <div className="tabs tabs-lift justify-center">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Salad" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6 ">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="pizza" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="soups" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="desserts" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="drinks" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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
                    </div>
                </div>
            </div>
        </>
    )
}
