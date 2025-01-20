import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { IoIosArrowBack } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaExternalLinkAlt } from "react-icons/fa";
import { TbWorldLatitude,  TbWorldLongitude } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LiaAddressCardSolid } from "react-icons/lia";
import { HiBuildingOffice } from "react-icons/hi2";

import {NavBarContainer} from '../Header/styledComponents.js'
import ThemeContext from '../../context/ThemeContext.js';
import { UserDetailContainer, UserDetails, BackButton, BackText, StyledLink,Icon, ContentWrapper, ErrorTitle, SuccessContainer, Title, Text, InfoContainer, UserInfo, HyperLink, SubTitle, AddressContainer, AddressText , UserName, Profile} from './styledComponents.js';

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
};

const UserDetail = () => {
  const { id } = useParams();
  const { isLightTheme } = useContext(ThemeContext); 
  const themeStyle = isLightTheme ? 'light' : 'dark';
  
  const [responseData, changeResponseData] = useState({
    status: statusConstants.initial,
    data: null,
    errMsg: null,
  });

  useEffect(() => {
    const getSpecificUserData = async () => {
      changeResponseData({
        status: statusConstants.inProgress,
        data: null,
        errMsg: null,
      });

      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const response = await fetch(url);
    
        if (response.ok) {
          const userData = await response.json();
          changeResponseData({
            status: statusConstants.success,
            data: userData,
          });
        } else {
          changeResponseData({
            status: statusConstants.failure,
            data: null,
            errMsg: response.error_msg || 'Server responded with an error, Please Try Again.',
          });
        }
      }
    getSpecificUserData();
  }, [id]); 

  const renderLoadingView = () => (
    <ContentWrapper>
      <Oval height={50} width={50} color={isLightTheme ? '#000000' : '#ffffff'} ariaLabel="loading" />
    </ContentWrapper>
  );

  const renderSuccessView = () => {
    const { data } = responseData;
    const {address, company, email, name, phone, username, website} = data 
    const {city, street, suite, zipcode, geo} = address
    const {lat, lng} = geo
    const {bs, catchPhrase} = company
    return (
      <SuccessContainer theme={themeStyle}>
          <UserName>
            <Profile theme={themeStyle}><CgProfile /></Profile>
            <div>
              <Title theme={themeStyle}>{name}</Title>
              <Text theme={themeStyle}>username: {username}</Text>
            </div>
          </UserName>

          <InfoContainer>
            <div>
              <SubTitle theme={themeStyle}><Icon><LiaAddressCardSolid/></Icon> Address</SubTitle>
              <AddressContainer>
                <AddressText theme={themeStyle}>{suite}, {street}, {city}</AddressText>
                <AddressText theme={themeStyle}>zipcode: {zipcode}</AddressText>
                <div style={{display: "flex", }}>
                  <AddressText theme={themeStyle}><Icon><TbWorldLatitude /></Icon> {lat}</AddressText>
                  <AddressText theme={themeStyle}><Icon><TbWorldLongitude style={{marginLeft: "5px"}} /></Icon> {lng}</AddressText>
                </div>
              </AddressContainer>
          </div>

          <div>
            <SubTitle theme={themeStyle}><HiBuildingOffice style={{marginRight: "5px"}}/>Company</SubTitle>
            <AddressContainer theme={themeStyle}>
              <AddressText theme={themeStyle}>Name: {company.name}</AddressText>
              <AddressText theme={themeStyle}>Bs: {bs}</AddressText>
              <AddressText theme={themeStyle}>Phrase: {catchPhrase}</AddressText>
            </AddressContainer>
          </div>
        </InfoContainer>

        <UserInfo theme={themeStyle}>
          <Text theme={themeStyle}><Icon><MdEmail/></Icon> {email}</Text>
          <Text theme={themeStyle}><Icon><FaPhoneAlt/></Icon> {phone}</Text>
          <Text theme={themeStyle}>
              <HyperLink theme={themeStyle} href={website}><Icon><FaExternalLinkAlt/></Icon>{website}</HyperLink>
          </Text>
          </UserInfo>
      </SuccessContainer>
    );
  };

  const renderFailureView = () => (
    <ContentWrapper>
      <ErrorTitle>{responseData.errMsg}</ErrorTitle>
    </ContentWrapper>
  );

  const renderView = () => {
    switch (responseData.status) {
      case statusConstants.inProgress:
        return renderLoadingView();
      case statusConstants.success:
        return renderSuccessView();
      case statusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <UserDetailContainer theme={themeStyle}>
            <NavBarContainer theme={themeStyle}>        
              <StyledLink to="/">
                <BackButton>
                    <IoIosArrowBack /> 
                    <BackText>Go Back</BackText>
                </BackButton>
              </StyledLink>
            </NavBarContainer>
        <UserDetails>
          {renderView()}
        </UserDetails>
  </UserDetailContainer>;
};

export default UserDetail;
