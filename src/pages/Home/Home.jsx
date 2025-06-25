import React from 'react'
import Banner from '../../components/Banner/Banner'
import OrderOnline from '../../components/OrderCategory/OrderOnline'
import SectionBanner from '../../components/SectionBanner/SectionBanner'
import FormOurMenu from '../../components/FormOurMenu/FormOurMenu'
import ChefRecommends from '../../components/ChefRecommends/ChefRecommends'
import FeatureItem from '../../components/FeatureItem/FeatureItem'
import Testimonial from '../../components/Testimonial/Testimonial'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <Banner />
            <OrderOnline />
            <SectionBanner />
            <FormOurMenu />
            <ChefRecommends />
            <FeatureItem />
            <Testimonial />
        </div>
    )
}
