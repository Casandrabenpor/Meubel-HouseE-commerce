import React from 'react';
import {
  ButtonCarousel,
  SectionCarousel,
} from '../../styled/homeStyled/carouselStyled';
import CarouselImage2 from '../../assets/home/carousel.png';

export const Carousel = () => {
  return (
    <SectionCarousel>
      <ButtonCarousel>Explore More</ButtonCarousel>
      <img src={CarouselImage2} alt="carousel" />
      <img src={CarouselImage2} alt="carousel2" />
    </SectionCarousel>
  );
};
