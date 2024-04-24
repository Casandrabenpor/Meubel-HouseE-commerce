import React from 'react';
import Bedroom from '../../assets/home/image101.png';
import Dining from '../../assets/home/image106.png';
import Living from '../../assets/home/image100.png';
import {
  SectionBedrooms,
  Subtitle,
  Text,
  TextBedrooms,
} from '../../styled/homeStyled/sectionOneStyled';

export const SectionOne = () => {
  return (
    <section>
      <Subtitle>Browse The Range</Subtitle>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <SectionBedrooms>
        <div>
          <img src={Dining} alt="Dining" />
          <TextBedrooms>Dining</TextBedrooms>
        </div>
        <div>
          <img src={Living} alt="Living" />
          <TextBedrooms>Living</TextBedrooms>
        </div>
        <div>
          <img src={Bedroom} alt="Bedroom" />
          <TextBedrooms>Bedroom</TextBedrooms>
        </div>
      </SectionBedrooms>
    </section>
  );
};
