import React, { useEffect, useState } from 'react';

import pic_1 from "@/images/slide-1.jpeg"
import pic_2 from "@/images/slide-2.jpeg"

import { CustomCarousel, CustomCarouselSlide } from './GalleryStyles';

export const Gallery = () => {
    const calcDimension = () => {
        return window.innerWidth >= 768 ? 108 : 98
    }

    const [thumbWidth, setThumbWidth] = useState(calcDimension());

    useEffect(() => {
        const handleResize = () => {
            setThumbWidth(calcDimension());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <CustomCarousel showStatus={false} showDots={false} showIndicators={false} thumbWidth={thumbWidth}>
                <CustomCarouselSlide>
                    <img src={pic_1} alt="" />
                </CustomCarouselSlide>
                <CustomCarouselSlide>
                    <img src={pic_2} alt="" />
                </CustomCarouselSlide>
                <CustomCarouselSlide>
                    <img src={pic_1} alt="" />
                </CustomCarouselSlide>
            </CustomCarousel>
        </>
    )
}