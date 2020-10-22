//Nasa logo:https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg
//Nasa blue: #0B3D91 / Nasa red: #FC3D21 / contrast light blue: #5D7FB9*//
import React from "react";
import styled from "styled-components";
const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 3px #5d7fb9;
`;
const SiteName = styled.h1`
  padding: 10px;
`;
const Logo = styled.img`
  width: 15%;
  padding: 10px;
`;
function Header() {
  return (
    <HeaderStyle>
      <SiteName>NASA Photo of the Day</SiteName>
      <Logo
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="NASA logo"
      />
    </HeaderStyle>
  );
}
export default Header;
