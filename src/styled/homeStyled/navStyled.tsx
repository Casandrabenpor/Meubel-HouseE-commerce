import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

interface Props {
  $sideBarActivated: boolean;
}
export const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;
export const CustomList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  gap: 3em;
`;
export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-family: 'Poppins';

  &:hover {
    border-bottom: 2px solid #b88e2f;
  }
`;
export const IconsNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  cursor: pointer;
`;

// ASIDE

export const Aside = styled.aside`
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
  background: ${colors.white};
  height: 80vh;
  width: 30%;
  border: 1px solid black;
  top: 0;
  right: 0;
  position: fixed;
  padding: 1em;
  color: ${colors.black};
  z-index: 1;
`;
export const Content = styled.div<Props>`
  width: ${(props) => (props.$sideBarActivated ? '85%' : '100%')};
  margin-right: ${(props) => (props.$sideBarActivated ? '15%' : '0%')};
`;
export const AsideContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Shopping = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  img {
    width: 40%;
    height: 20vh;
  }
`;
export const ShoppingText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${colors.black};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p.yellow-text {
    color: ${colors.yellow};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  align-items: center;
`;
export const TextTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60%;
  align-items: center;
`;
export const Total = styled.h4`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ButtonTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
`;
export const Button = styled.button`
  padding: 6px 30px;
  border-radius: 50px;
  border: 1px solid #000;
  color: ${colors.black};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-top: 5%;
`;
