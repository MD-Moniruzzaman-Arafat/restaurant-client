import React from 'react'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'
import Card from '../../reUseableComponents/Card'

export default function ChefRecommends() {
    return (
        <>
            <div className='my-20 max-w-6xl mx-auto'>
                <SmallTitle title="Should Try" />
                <MainTitle title="CHEF RECOMMENDS" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
