import React from 'react'

export default function Card({ item }) {
    return (
        <>
            <div className="card bg-base-100 md:w-80 shadow-sm">
                <figure className="relative">
                    <img
                        src={item?.image}
                        alt="Shoes"
                        className="rounded-xl" />
                    <p className='bg-[#111827] px-2 absolute top-3 right-4 text-white'>${item?.price}</p>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item?.name}</h2>
                    <p>{item?.recipe}</p>
                    <div className="card-actions">
                        <button className="btn text-[#BB8506] border-0 border-b-2 border-[#BB8506] hover:bg-[#1F2937]">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
