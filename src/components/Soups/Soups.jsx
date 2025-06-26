import React from 'react'
import ItemBanner from '../../reUseableComponents/ItemBanner'
import Item from '../../reUseableComponents/Item'
import { Link } from 'react-router-dom'

export default function Soups() {
    return (
        <>
            <ItemBanner title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className='max-w-6xl  mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className='max-w-6xl text-center mx-auto'>
                    <Link to={`/category/${'soups'}`} >
                        <button className='border border-b-gray-400  px-5 py-3 font-bold cursor-pointer'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
