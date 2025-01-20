import { useContext } from 'react';

import {StyledLink, Name, Email, City, ListItem, EmailCityContainer} from './styledComponents.js'
import ThemeContext from '../../context/ThemeContext.js';

import { MdEmail } from "react-icons/md";
import { FaCity } from "react-icons/fa";

const UserCard = (props) => {
    const {details} = props 
    const {name, email, address, id} = details 
    const {city} = address
    const { isLightTheme } = useContext(ThemeContext);
    const themeStyle = isLightTheme ? 'light' : 'dark';

    return(
        <ListItem theme={themeStyle}>
            <StyledLink to={`/${id}`}>
                <Name theme={themeStyle}>{name}</Name>
                <EmailCityContainer>
                    <Email theme={themeStyle}><MdEmail style={{ marginRight: '5px' }} />{email}</Email>
                    <City theme={themeStyle}><FaCity style={{ marginRight: '5px' }} /> {city}</City>
                </EmailCityContainer>
            </StyledLink>   
        </ListItem>      
    )
};
  

export default UserCard