import BackgroundImg from '../../assets/home/background.png';
import React from 'react';
import {
  Button,
  Container,
  ContainerBackground,
  TextPrimary,
  TextTitle,
  Title,
} from '../../styled/homeStyled/backgroundStyled';

export const Background = () => {
  return (
    <ContainerBackground>
      <img src={BackgroundImg} alt="background" />
      <Container>
        <TextPrimary>New Arrival</TextPrimary>
        <Title>Discover Our New Collection</Title>
        <TextTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </TextTitle>
        <Button>BUY NOW</Button>
      </Container>
    </ContainerBackground>
  );
};
