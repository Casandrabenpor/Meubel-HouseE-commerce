import styled from 'styled-components';
import { colors } from '../theme';

export const TittleGallery = styled.h2`
  display: flex;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${colors.gray};
  justify-content: center;
`;

export const SubtitleGallery = styled.h4`
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: ${colors.gray};
  justify-content: center;
`;

export const GalleryGrid = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const CollageLeft = styled.div`
  margin-right: 16px;
  img {
    display: flex;
  }
`;
export const ImgLeft = styled.div`
  margin-bottom: 16px;
`;
export const CollageRight = styled.div`
  margin-left: 16px;
`;
export const CollageCenter = styled.div`
  display: flex;
  align-items: center;
`;
