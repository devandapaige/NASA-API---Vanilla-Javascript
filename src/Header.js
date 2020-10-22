//Nasa logo:https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg
//Nasa blue: #0B3D91 / Nasa red: #FC3D21 / contrast light blue: #5D7FB9*//
import React from "react";
import styled from "styled-components";
const headerStyle = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 3px #5d7fb9;
`;
const siteName = styled.h1`
  padding: 10px;
`;
const logo = styled.img`
  width: 15%;
  padding: 10px;
`;
function Header() {
  return (
    <headerStyle>
      <siteName>NASA Photo of the Day</siteName>
      <logo
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="NASA logo"
      />
    </headerStyle>
  );
}
export default Header;
