import React from 'react';
import {
  ButtonCard,
  ButtonGallery,
  Card,
  Gallery,
  RpGallery,
  Subtitle,
  TextGallery,
  TitleGallery,
} from '../../styled/homeStyled/sectionGalleryStyled';
import Syltherine from '../../assets/home/image1.png';
import Leviosa from '../../assets/home/image2.png';
import Lolito from '../../assets/home/image3.png';
import Respira from '../../assets/home/image4.png';
import Grifo from '../../assets/home/image9.png';
import Muggo from '../../assets/home/image6.png';
import Pingky from '../../assets/home/image7.png';
import Potty from '../../assets/home/image8.png';
import { useTypedDispatch } from '../../app/store';

export const SectionGallery = () => {
  const dispatch = useTypedDispatch();

  return (
    <div>
      <Subtitle>Our Products</Subtitle>
      <Gallery>
        <Card>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Syltherine</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </Card>
        <Card>
          <img src={Leviosa} alt="Leviosa" />
          <TitleGallery>Leviosa</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </Card>
        <div>
          <img src={Lolito} alt="Lolito" />
          <TitleGallery>Lolito</TitleGallery>
          <TextGallery>Luxury big sofa</TextGallery>
          <RpGallery>Rp 7.000.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
        <div>
          <img src={Respira} alt="Respira" />
          <TitleGallery>Respira</TitleGallery>
          <TextGallery>Outdoor bar table and stool</TextGallery>
          <RpGallery>Rp 500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
      </Gallery>
      <Gallery>
        <div>
          <img src={Grifo} alt="Grifo" />
          <TitleGallery>Grifo</TitleGallery>
          <TextGallery>Night lamp</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
        <div>
          <img src={Muggo} alt="Muggo" />
          <TitleGallery>Muggo</TitleGallery>
          <TextGallery>Small mug</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
        <div>
          <img src={Pingky} alt="Pingky" />
          <TitleGallery>Pingky</TitleGallery>
          <TextGallery>Cute bed set</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
        <div>
          <img src={Potty} alt="Potty" />
          <TitleGallery>Potty</TitleGallery>
          <TextGallery>Minimalist flower pot</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
          <ButtonCard>Add to cart</ButtonCard>
        </div>
      </Gallery>
      <ButtonGallery>Show More</ButtonGallery>
    </div>
  );
};
