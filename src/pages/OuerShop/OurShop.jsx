import React from 'react'
import OurShopBanner from '../../components/OurShopBanner/OurShopBanner'
import ShopCategory from '../../components/ShopCategory/ShopCategory'
import { Helmet } from 'react-helmet'

export default function OurShop() {
    return (
        <>
            <Helmet>
                <title>Restaurant | Our-Shop</title>
            </Helmet>
            <OurShopBanner />
            <ShopCategory />
        </>
    )
}
