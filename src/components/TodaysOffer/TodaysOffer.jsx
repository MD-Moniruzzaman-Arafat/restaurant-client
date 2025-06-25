import React from 'react'
import Item from '../../reUseableComponents/Item'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'

export default function TodaysOffer() {
    return (
        <>
            <div className='max-w-6xl  mx-auto my-10'>
                <SmallTitle title="Don't miss" />
                <MainTitle title="TODAY'S OFFER" />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className='max-w-6xl text-center mx-auto'>
                    <button className='border border-b-gray-400  px-5 py-3 font-bold cursor-pointer'>ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </>
    )
}
