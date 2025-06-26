import React from 'react'
import image from '../assets/menu/salad-bg.jpg'

export default function Card() {
    return (
        <>
            <div className="card bg-base-100 md:w-80 shadow-sm">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn text-[#BB8506] border-0 border-b-2 border-[#BB8506] hover:bg-[#1F2937]">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
