import styled from 'styled-components';
import { colors } from '../theme';
export const ContainerBackground = styled.section`
  position: relative;
  img {
    width: 100%;
  }
`;
export const Container = styled.section`
  border-radius: 10px;
  background: #fff3e3;
  position: absolute;
  bottom: 15%;
  left: 55%;
  padding: 2rem;
  width: 40%;
`;
export const TextPrimary = styled.h6`
  color: ${colors.gray};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 3px;
`;
export const Title = styled.h1`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
`;
export const TextTitle = styled.p`
  color: ${colors.gray};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;
export const Button = styled.button`
  width: 15em;
  height: 5em;
  border: none;
  background-color: ${colors.yellow};
  color: ${colors.white};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 2%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.yellow};
  }
`;
