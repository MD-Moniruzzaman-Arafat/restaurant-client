import React from 'react'
import image from '../../assets/home/chef-service.jpg'

export default function SectionBanner() {
    return (
        <>
            <div
                className="hero max-w-5xl mx-auto py-20 px-20 my-20"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay bg-white "></div>
                <div className="hero-content  text-black text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
