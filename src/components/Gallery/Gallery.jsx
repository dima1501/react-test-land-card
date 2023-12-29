import React, { useEffect, useState } from 'react';

const images = [
    { webp: "./public/images/slide-1.webp", jpeg: "./public/images/slide-1.jpeg" },
    { webp: "./public/images/slide-2.webp", jpeg: "./public/images/slide-2.jpeg" },
    { webp: "./public/images/slide-1.webp", jpeg: "./public/images/slide-1.jpeg" },
];

import { CustomCarousel, CustomCarouselSlide } from './GalleryStyles';

export const Gallery = () => {
    const calcDimension = () => {
        return window.innerWidth >= 768 ? 108 : 98;
    };

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

    const renderThumbs = () => {
        return images.map((image, index) => (
            <picture key={index}>
                <source srcSet={image.webp} type="image/webp" />
                <source srcSet={image.jpeg} type="image/jpeg" />
                <img src={image.jpeg} alt="" />
            </picture>
        ));
    };

    return (
        <>
            <CustomCarousel
                showStatus={false}
                showDots={false}
                showIndicators={false}
                thumbWidth={thumbWidth}
                renderThumbs={renderThumbs}
            >
                {images.map((image, index) => (
                    <CustomCarouselSlide key={index}>
                        <picture>
                            <source srcSet={image.webp} type="image/webp" />
                            <source srcSet={image.jpeg} type="image/jpeg" />
                            <img src={image.jpeg} alt="" />
                        </picture>
                    </CustomCarouselSlide>
                ))}
            </CustomCarousel>
        </>
    );
};