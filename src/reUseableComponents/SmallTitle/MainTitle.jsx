import React from 'react'

export default function MainTitle({ title }) {
    return (
        <>
            <h1 className='md:text-4xl border-y-3 py-5 my-5 w-[310px] mx-auto text-center'>{title}</h1>
        </>
    )
}
