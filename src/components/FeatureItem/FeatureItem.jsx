import React from 'react'
import bgImage from '../../assets/home/featured.jpg'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'

export default function FeatureItem() {
    return (
        <>
            <div
                className="hero min-h-screen md:my-20"
                style={{
                    backgroundImage:
                        `url(${bgImage})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content ">
                    <div className="max-w-4xl">
                        <SmallTitle title="Check it out" />
                        <MainTitle title="FROM OUR MENU" />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:items-center'>
                            <div className=' md:w-96'>
                                <img src={bgImage} alt="" />
                            </div>
                            <div>
                                <p>March 20, 2023</p>
                                <p>WHERE CAN I GET SOME?</p>
                                <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                                <button className='border-b-3 mt-1 border-b-amber-700 cursor-pointer'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
