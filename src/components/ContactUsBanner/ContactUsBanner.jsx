import React from 'react'
import image from '../../assets/contact/banner.jpg'

export default function ContactUsBanner() {
    return (
        <>

            <div
                className="hero md:py-30 md:px-60"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay "></div>
                <div className="hero-content  text-white text-center">
                    <div className="max-w-xl py-20">
                        <h1 className="mb-2 text-6xl font-bold">OUR MENU</h1>
                        <p className="mb-5">
                            Would you like to try a dish?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
