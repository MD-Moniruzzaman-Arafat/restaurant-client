import React from 'react'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'
import { GrSend } from 'react-icons/gr'

export default function ContactForm() {
    return (
        <>
            <div className='max-w-6xl mx-auto my-20'>
                <SmallTitle title="Send Us a Message" />
                <MainTitle title="CONTACT FORM" />
                <div className='bg-[#F3F3F3] mt-10 p-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name*</legend>
                            <input type="text" className="input w-full" placeholder="Enter your name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email*</legend>
                            <input type="text" className="input w-full" placeholder="Enter your email" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Phone*</legend>
                        <input type="text" className="input w-full" placeholder="Enter your phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Message*</legend>
                        <textarea name="" id="" className='input w-full h-60' placeholder='Write your message here'></textarea>
                    </fieldset>
                    <div className='text-center mt-10 bg-[#835D23] w-42 mx-auto'>
                        <button className='px-5 py-2 text-white flex items-center gap-1'>Send Message <GrSend /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
