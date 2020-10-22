import React from "react";
import styled from "styled-components";
const footerStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: solid 3px #5d7fb9;
`;
const codedByLink = styled.a`
  color: #5d7fb9;
  text-decoration: none;
  &:visited {
    color: #5d7fb9;
  }
`;
function Footer() {
  return (
    <footerStyled>
      <p>
        Coded by{" "}
        <codedByLink href="https://github.com/devandapaige">
          Amanda Nelson{" "}
          <span role="img" aria-label="cat standing emoji">
            🐈
          </span>
        </codedByLink>
      </p>
      <p>2020</p>
    </footerStyled>
  );
}
export default Footer;
