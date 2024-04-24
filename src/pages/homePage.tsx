import React from 'react';
import { Nav } from '../components/homeComponents/nav';
import { Background } from '../components/homeComponents/background';
import { SectionOne } from '../components/homeComponents/sectionOne';
import { SectionGallery } from '../components/homeComponents/sectionGallery';
import { AsideCart } from '../components/homeComponents/aside';
import { Carousel } from '../components/homeComponents/carousel';
import { Gallery } from '../components/homeComponents/gallery';

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <AsideCart />
      <Background />
      <SectionOne />
      <SectionGallery />
      <Carousel />
      <Gallery />
    </>
  );
};

export default HomePage;
