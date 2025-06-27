import React from 'react'
import image from '../assets/menu/soup-bg.jpg'

export default function Item({ item }) {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='w-28 rounded-tr-full rounded-br-full'>
                    <img
                        src={item?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body p-1 md:p-5">
                    <h2 className="card-title text-[12px] md:text-[20px]">{item?.name} ------------------</h2>
                    <p>{item?.recipe}</p>
                </div>
                <p className='text-[14px] card-body text-[#BB8506]'>${item?.price}</p>
            </div>
        </>
    )
}
