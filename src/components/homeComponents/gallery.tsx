import React from 'react';
import image1 from '../../assets/home/gallery-image-one.png';
import image2 from '../../assets/home/gallery-image-two.png';
import image3 from '../../assets/home/gallery-image-three.png';
import image4 from '../../assets/home/gallery-image-fou.png';
import image5 from '../../assets/home/gallery-image-five.png';
import image6 from '../../assets/home/gallery-image-six.png';
import image7 from '../../assets/home/gallery-image-seven.png';
import image8 from '../../assets/home/gallery-image-eight.png';
import image9 from '../../assets/home/gallery-image-nine.png';

import {
  CollageCenter,
  CollageLeft,
  GalleryGrid,
  CollageRight,
  SubtitleGallery,
  TittleGallery,
  ImgLeft,
} from '../../styled/homeStyled/galleryStyled';
export const Gallery = () => {
  return (
    <div>
      <SubtitleGallery>Share your setup with</SubtitleGallery>
      <TittleGallery>#FuniroFurniture</TittleGallery>
      <GalleryGrid>
        <CollageLeft>
          <ImgLeft>
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
          </ImgLeft>
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
        </CollageLeft>
        <CollageCenter>
          <img src={image5} alt="image5" />
        </CollageCenter>
        <CollageRight>
          <img src={image6} alt="image6" />
          <img src={image7} alt="image7" />
          <img src={image8} alt="image8" />
          <img src={image9} alt="image9" />
        </CollageRight>
      </GalleryGrid>
    </div>
  );
};
