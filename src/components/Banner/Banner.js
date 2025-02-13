import React, { Fragment } from 'react'
import Carousel, { CarouselItem } from '../Carousel/Carousel'
import './Banner.scss'
// import imageData from './banners'

const Banner = () => {
    return (
        <Fragment>
            <div className='banner'>
                <Carousel>
                    <CarouselItem image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg'></CarouselItem>
                    <CarouselItem image='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg'></CarouselItem>
                    <CarouselItem image='https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg'></CarouselItem>
                    <CarouselItem image='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Mar/Apay/Rev1/Deals-PC-3000-Unrec._CB592487741_.jpg'></CarouselItem>
                    <CarouselItem image='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Skincare-Herofader-PCol._CB590063297_.jpg'></CarouselItem>
                    <CarouselItem image='https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg'></CarouselItem>
                </Carousel>
                <div className="fade-bottom-banner">
    
                </div>
            </div>
        </Fragment>
    )
}

export default Banner