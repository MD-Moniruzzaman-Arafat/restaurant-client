import React from 'react'
import Banner from '../../components/Banner/Banner'
import OrderOnline from '../../components/OrderCategory/OrderOnline'
import SectionBanner from '../../components/SectionBanner/SectionBanner'
import FormOurMenu from '../../components/FormOurMenu/FormOurMenu'
import ChefRecommends from '../../components/ChefRecommends/ChefRecommends'
import FeatureItem from '../../components/FeatureItem/FeatureItem'

export default function Home() {
    return (
        <div>
            <Banner />
            <OrderOnline />
            <SectionBanner />
            <FormOurMenu />
            <ChefRecommends />
            <FeatureItem />
        </div>
    )
}
