import styled from 'styled-components';

export const NavBarContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#000000')};
  box-shadow: ${(props) => 
    props.theme === 'light' 
    ? '0 4px 6px rgba(0, 0, 0, 0.1)' 
    : '0 4px 6px rgba(255, 255, 255, 0.1)'};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    padding: 15px;
  }
`;

export const HomeTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  background: linear-gradient(to right, blue, purple, darkcyan); 
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const LogoIcon = styled.button`
  font-size: 30px;
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')}; 
  @media screen and (min-width: 768px) {
    font-size: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
