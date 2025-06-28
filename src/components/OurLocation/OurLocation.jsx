import React from 'react'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'
import { FaPhoneVolume } from 'react-icons/fa6'

export default function OurLocation() {
    return (
        <>
            <div className='max-w-6xl mx-auto my-20'>
                <SmallTitle title="Visit Us" />
                <MainTitle title="OUR LOCATION" />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                    <div className='text-center bg-white '>
                        <div className='bg-[#D1A054] text-white flex justify-center items-center py-4'>
                            <FaPhoneVolume />
                        </div>
                        <div className='mb-5 mx-5 p-10 bg-[#F3F3F3] h-40 flex flex-col justify-center items-center'>
                            <h3 className='text-2xl font-bold'>PHONE</h3>
                            <p className='text-lg'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className='text-center bg-white '>
                        <div className='bg-[#D1A054] text-white flex justify-center items-center py-4 '>
                            <FaPhoneVolume />
                        </div>
                        <div className='mb-5 mx-5 p-10 bg-[#F3F3F3] h-40 flex flex-col justify-center items-center'>
                            <h3 className='text-2xl font-bold'>ADDRESS</h3>
                            <p className='text-lg'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className='text-center bg-white '>
                        <div className='bg-[#D1A054] text-white flex justify-center items-center py-4'>
                            <FaPhoneVolume />
                        </div>
                        <div className='mb-5 mx-5 p-10 bg-[#F3F3F3] h-40 flex flex-col justify-center items-center'>
                            <h3 className='text-2xl font-bold'>WORKING HOURS</h3>
                            <p className='text-lg'>+38 (012) 34 56 789</p>
                            <p className='text-lg'>+38 (012) 34 56 789</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
