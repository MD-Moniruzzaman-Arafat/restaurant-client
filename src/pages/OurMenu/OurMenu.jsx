import React from 'react'
import OurMenuBanner from '../../components/OurMenuBanner/OurMenuBanner'
import TodaysOffer from '../../components/TodaysOffer/TodaysOffer'
import Desserts from '../../components/Desserts/Desserts'
import Pizza from '../../components/Pizza/Pizza'
import Soups from '../../components/Soups/Soups'

export default function OurMenu() {
    return (
        <>
            <OurMenuBanner />
            <TodaysOffer />
            <Desserts />
            <Pizza />
            <Soups />
        </>
    )
}
