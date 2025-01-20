import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#000000')};
    min-height: 100vh;
`

export const HomeMainContainer = styled.div`
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 60px); 
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; 
`;

export const SearchAndFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`

export const SearchBarContainer = styled.div`
    display: flex;
    border: 1px solid ${(props) => (props.theme === 'light' ? '#ccc' : '#555')};
    background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    @media screen and (min-width: 768px){
        margin-bottom: 10px;
    }
`;

export const SearchInput = styled.input`
  padding: 6px;
  font-size: 18px;
  border: 0;
  background-color: transparent;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  width: 100%;
  height: 40px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 350px;
    height: 40px;
  }
`;

export const SearchBar = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')}; 
  border: none;
  font-size: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px){
    font-size: 25px;
  }
`

export const FilterContainer = styled.div`
    display: flex;
    align-self: flex-end;
    margin-top: 10px;
    margin-right: 6px;
`

export const FilterButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: grey;
    @media screen and (min-width: 768px){
    font-size: 20px;
  }
`

export const FilterText = styled.p`
    font-family: 'Roboto';  
`

export const ErrorTitle = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    color: grey;
    width: 100%;
    text-align:center;
    @media screen and (min-width: 768px){
        width: 100%;
    }
`

export const SuccessContainer = styled.ul`
  display: flex;
  justify-content: flex-start; /* Align from the top */
  align-items: flex-start; /* Align content to the top */
  flex-grow: 1;
  min-height: 0; /* Avoid adding extra vertical space */
  margin: 0;  /* Removes any vertical margin */
  padding: 0; /* Removes any extra padding */
  flex-wrap: wrap;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  padding: 10px;
  position: relative; /* Keeps it aligned at the bottom of the content */
`;

export const PaginationText = styled.span`
  font-size: 13px;
    color: grey;
    font-family: 'Roboto';
    @media screen and (min-width: 768px){
    font-size: 20px;
  }
`;

export const PaginationButton = styled.button`
  padding: 5px;
  background-color: #0056b3;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background-color: #007bff;
  }

  @media screen and (min-width: 768px){
    padding: 10px;
  }
`;