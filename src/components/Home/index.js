import React, { useContext, useState, useEffect } from 'react';

import { HomeContainer, HomeMainContainer, SearchAndFilterContainer, SearchBarContainer, SearchBar, SearchInput, FilterContainer, FilterButton, FilterText, ErrorTitle, SuccessContainer, PaginationContainer, PaginationText, PaginationButton, ContentWrapper } from './styledComponents.js';

import ThemeContext from '../../context/ThemeContext.js';
import Header from '../Header';
import UserCard from '../UserCard';

import { FaSort } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { Oval } from 'react-loader-spinner';
import { MdFirstPage, MdLastPage } from "react-icons/md";

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
};

const Home = () => {
  const [searchValue, changeSearchValue] = useState('');
  const [apiResponse, setApiValue] = useState({
    status: statusConstants.initial,
    data: null,
    errMsg: null,
  });
  const [originalData, setOriginalData] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const getDataFromAPI = async () => {
      setApiValue({ status: statusConstants.inProgress, data: null, errMsg: null });
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      
      if (response.ok) {
        const responseData = await response.json();
        setApiValue({ status: statusConstants.success, data: responseData });
        setOriginalData(responseData);
      } else {
        setApiValue({ status: statusConstants.failure, errMsg: response.error_msg || 'Server responded with an error, Please Try Again.' });
      }
    };
    getDataFromAPI();
  }, []);


  const onSearch = (event) => {
    const searchInput = event.target.value;
    changeSearchValue(searchInput);
    
    const filteredData = originalData.filter(eachData =>
      eachData.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    setApiValue({ status: statusConstants.success, data: filteredData });
    setCurrentPage(1); 
  };


  const sortData = () => {
    if (originalData) {
      const sortedData = [...originalData].sort((a, b) => 
        sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
      setApiValue(prevValue => ({ ...prevValue, data: sortedData }));
      setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    }
  };


  const handlePageChange = (pageNumber) => {
    const filteredData = searchValue
      ? originalData.filter(eachData =>
          eachData.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : originalData;
  
    setApiValue({ status: statusConstants.success, data: filteredData });
    setCurrentPage(pageNumber);
  };
  

  const renderView = () => {
    const { status, data } = apiResponse;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data?.slice(startIndex, endIndex);

    switch (status) {
      case statusConstants.failure: return renderFailureView();
      case statusConstants.inProgress: return renderLoadingView();
      case statusConstants.success: return renderSuccessView(currentData, data.length);
      default: return null;
    }
  };

  const renderLoadingView = () => (
    <ContentWrapper>
      <Oval height={50} width={50} color={isLightTheme ? '#000000' : '#ffffff'} backgroundColor="tranparent" ariaLabel="loading" />
    </ContentWrapper>
  );

  const renderSuccessView = (currentData, totalDataLength) => {
    return (
      <>
        {currentData && currentData.length > 0 ? (
          <SuccessContainer>
            {currentData.map(eachData => (
              <UserCard details={eachData} key={eachData.id} />
            ))}
          </SuccessContainer>
        ) : (
          <ContentWrapper>
            <ErrorTitle>No User Available</ErrorTitle>
          </ContentWrapper>
        )}
   
        <PaginationContainer>
          <PaginationText>{`Showing ${Math.min((currentPage - 1) * itemsPerPage + 1, totalDataLength)}-${Math.min(currentPage * itemsPerPage, totalDataLength)} of ${totalDataLength}`}</PaginationText>
          <div>
            <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <MdFirstPage />
            </PaginationButton>
            <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * itemsPerPage >= totalDataLength}>
              <MdLastPage />
            </PaginationButton>
          </div>
        </PaginationContainer>
        </>
    );
  };

  const renderFailureView = () => <ContentWrapper><ErrorTitle>{apiResponse.errMsg}</ErrorTitle></ContentWrapper>;

  const { isLightTheme } = useContext(ThemeContext);
  const themeStyle = isLightTheme ? 'light' : 'dark';

  return (
    <HomeContainer theme={themeStyle}>
      <Header />
      <HomeMainContainer theme={themeStyle}>
        <SearchAndFilterContainer>
          <SearchBarContainer theme={themeStyle}>
            <SearchInput theme={themeStyle} value={searchValue} type="search" onChange={onSearch} />
            <SearchBar theme={themeStyle}><IoIosSearch /></SearchBar>
          </SearchBarContainer>
          <FilterContainer>
              <FilterButton onClick={sortData}>
                  <FilterText>Sort by {sortOrder === 'asc' ? 'Ascending' : 'Descending'}</FilterText>
                  <FaSort />
              </FilterButton>
          </FilterContainer>
        </SearchAndFilterContainer>
        
        {renderView()}
      </HomeMainContainer>
    </HomeContainer>
  );
};

export default Home;
