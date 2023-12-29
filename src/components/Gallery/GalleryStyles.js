import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import sliderArrow from "@/images/icon-slide-arr.svg";

export const CustomCarousel = styled(Carousel)`

    & .carousel .slider-wrapper {
        border-radius: 10px;
        overflow: hidden;
    }
    
    & .carousel .thumbs-wrapper {
        margin: 4px 0 0;
        @media (min-width: 768px) {
            margin: 6px 0 0;
            padding-right: 6px;
        }
    }

    & .carousel .thumb {
        margin: 0 4px 0 0;
        padding: 0;
        border: none;
        aspect-ratio: 98 / 56;
        border-radius: 10px;
        @media (min-width: 768px) {
            margin: 0 6px 0 0;
            aspect-ratio: 108 / 70;
        }
    }

    & .carousel.carousel-slider .control-arrow {
        visibility: hidden;
        @media (min-width: 768px) {
            visibility: visible;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 14px;
            width: 24px;
            height: 24px;
            opacity: 1;
            border-radius: 50%;
            background-image: url(${sliderArrow});
            transition: scale .3s;
            &:active {
                scale: 0.8
            }
            &:before {
                border: none
            }
        }
    }

    & .carousel.carousel-slider .control-next {
        @media (min-width: 768px) {
            left: auto;
            right: 14px;
            rotate: 180deg;
            top: auto;
            bottom: 50%;
        }
    }
`

export const CustomCarouselSlide = styled.div`
    width: 100%;
    aspect-ratio: 336 / 216;

    & img {
        object-fit: cover;
        max-height: 100%;
    }
`