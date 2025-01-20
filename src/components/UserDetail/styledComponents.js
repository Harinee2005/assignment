import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none; 
`;

export const UserDetailContainer = styled.div`
    background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#000000')};
    min-height: 100vh;
`

export const UserDetails = styled.div`
    @media screen and (min-width: 768px){
    padding: 20px;
    }
`

export const BackButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: grey;
    font-size: 15px;
    @media screen and (min-width: 768px){
        font-size: 22px;
    }
`

export const BackText = styled.p`
    font-family: 'Roboto';
   
`
export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
`;

export const ErrorTitle = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    color: grey;
    width: 60%;
    @media screen and (min-width: 768px){
        width: 100%;
        text-align:center;
        font-size: 25px;
    }
`

export const Icon = styled.span`
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
`;

export const SuccessContainer = styled.div`
    background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#000000')};
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Profile = styled.p`
  font-weight: bold;
  margin: 0 0 5px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 50px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;


export const UserName = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 5px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; 
    font-size: 20px;
    margin-right: 20px;
    @media screen and (min-width: 768px){
        font-size: 40px;
        margin-bottom: 20px;
    }
`;

export const SubTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 5px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; 
    font-size: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 768px){
        font-size: 25px;
        margin-bottom: 20px;
    }
`;


export const Text = styled.p`
  font-size: 16px;
  margin: 0 0 5px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#f9f9f9')}; 
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px){
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const UserInfo = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 40px;
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
        margin-top: 100px;
    }
`

export const HyperLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#f9f9f9')}; 
`

export const InfoContainer = styled.div`
    margin-top: 40px;
    @media screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    }
`

export const AddressContainer = styled.div`
    margin-bottom: 10px;
`

export const AddressText = styled.p`
  font-size: 16px;
  margin: 0 0 5px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#f9f9f9')}; 
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px){
    font-size: 20px;
  }
`