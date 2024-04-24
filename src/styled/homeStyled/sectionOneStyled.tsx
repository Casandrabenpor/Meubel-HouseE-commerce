import styled from 'styled-components';
import { colors } from '../theme';

export const Subtitle = styled.h3`
  color: ${colors.black};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;
export const Text = styled.p`
  color: ${colors.gray2};
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SectionBedrooms = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  justify-content: center;
`;
export const TextBedrooms = styled.p`
  color: ${colors.black};
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
