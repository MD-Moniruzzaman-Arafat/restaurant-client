import React from 'react'
import image from '../assets/menu/soup-bg.jpg'

export default function Item() {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='w-28 rounded-tr-full rounded-br-full'>
                    <img
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body p-1 md:p-5">
                    <h2 className="card-title text-[12px] md:text-[20px]">ROAST DUCK BREAST ------------------</h2>
                    <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                </div>
                <p className='text-[14px] card-body text-[#BB8506]'>$14.5</p>
            </div>
        </>
    )
}
