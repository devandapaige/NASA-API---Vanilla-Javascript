import React from "react";
import styled from "styled-components";
const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: solid 3px #5d7fb9;
`;
const CodedByLink = styled.a`
  color: #5d7fb9;
  text-decoration: none;
  &:visited {
    color: #5d7fb9;
  }
`;
function Footer() {
  return (
    <FooterStyled>
      <p>
        Coded by{" "}
        <CodedByLink href="https://github.com/devandapaige">
          Amanda Nelson{" "}
          <span role="img" aria-label="cat standing emoji">
            🐈
          </span>
        </CodedByLink>
      </p>
      <p>2020</p>
    </FooterStyled>
  );
}
export default Footer;
