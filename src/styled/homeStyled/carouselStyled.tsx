import styled from 'styled-components';
import { colors } from '../theme';

export const SectionCarousel = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin-top: 5%;
  gap: 2em;
  align-items: center;
  align-content: center;
  margin-bottom: 2%;
`;
export const ButtonCarousel = styled.button`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border: 1px solid ${colors.yellow};
  background: #fff;
  width: 10em;
  height: 3em;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.white};
  }
`;
