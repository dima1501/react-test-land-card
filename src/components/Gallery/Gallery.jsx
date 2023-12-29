import React, { useEffect, useState } from 'react';

import pic_1 from "@/images/slide-1.jpeg"
import pic_2 from "@/images/slide-2.jpeg"

import { CustomCarousel, CustomCarouselSlide } from './GalleryStyles';

export const Gallery = () => {
    const [thumbWidth, setThumbWidth] = useState(window.innerWidth >= 768 ? 108 : 98);

    useEffect(() => {
        const handleResize = () => {
            setThumbWidth(window.innerWidth >= 768 ? 108 : 98);
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