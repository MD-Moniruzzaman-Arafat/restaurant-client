import React from 'react'
import image from '../assets/home/chef-service.jpg'

export default function ItemBanner({ title, description }) {
    return (
        <>
            <div
                className="hero  md:py-20 md:px-70 md:my-20"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay "></div>
                <div className="hero-content py-20 text-white text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
