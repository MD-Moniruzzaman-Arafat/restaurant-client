import React from 'react'
import SmallTitle from '../../reUseableComponents/SmallTitle/SmallTitle'
import MainTitle from '../../reUseableComponents/SmallTitle/MainTitle'
import Item from '../../reUseableComponents/SmallTitle/Item'

export default function FormOurMenu() {
    return (
        <>
            <div className='max-w-6xl  mx-auto my-10'>
                <SmallTitle title="Check it out" />
                <MainTitle title="FROM OUR MENU" />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <button className='border border-b-gray-400 block w-40 mx-auto px-5 py-3 font-bold cursor-pointer'>View Full  Menu</button>
            </div>
        </>
    )
}
