import React from 'react'
import Banner from '../../components/Banner/Banner'
import OrderOnline from '../../components/OrderCategory/OrderOnline'
import SectionBanner from '../../components/SectionBanner/SectionBanner'
import FormOurMenu from '../../components/FormOurMenu/FormOurMenu'

export default function Home() {
    return (
        <div>
            <Banner />
            <OrderOnline />
            <SectionBanner />
            <FormOurMenu />
        </div>
    )
}
