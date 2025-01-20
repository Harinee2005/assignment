import { useContext } from 'react';

import { NavBarContainer, LogoIcon , HomeTitle} from './styledComponents';
import ThemeContext from '../../context/ThemeContext.js';

import { MdOutlineLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Header = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const themeStyle = isLightTheme ? 'light' : 'dark';
  const themeIcon = isLightTheme ? <IoIosMoon /> : <MdOutlineLightMode />;

  return (
    <NavBarContainer theme={themeStyle}>
      <HomeTitle theme={themeStyle}>UserInfo</HomeTitle>
      <LogoIcon onClick={toggleTheme} theme={themeStyle}>
        {themeIcon}
      </LogoIcon>
    </NavBarContainer>
  );
};

export default Header;
