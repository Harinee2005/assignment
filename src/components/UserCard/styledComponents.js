import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none; 
`;

export const ListItem = styled.li`
  padding: 10px;
  margin: 5px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#ddd' : '#444')};
  border-radius: 5px;
  list-style: none;
  width: 90%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => (theme === 'light' ? '#f9f9f9' : '#333')};
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    padding: 20px;
    margin: 10px;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px;
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#f0f0f0')}; 
  font-size: 20px;
  @media screen and (min-width: 768px){
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const EmailCityContainer = styled.div`
    @media screen and (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Email = styled.p`
  font-size: 16px;
  margin: 0 0 5px;
  color: ${({ theme }) => (theme === 'light' ? '#555' : '#f9f9f9')}; 
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px){
    font-size: 15px;
  }
`;

export const City = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => (theme === 'light' ? '#555' : '#f9f9f9')}; 
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px){
    font-size: 15px;
  }
`;