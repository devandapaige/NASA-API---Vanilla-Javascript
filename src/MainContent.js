import React from "react";
import styled from "styled-components";
import PhotoOTD from "./PhotoOTD";
import DatePicker from "./DatePicker";
const main = styled.div`
  text-align: center;
`;
const day = styled.h3`
  text-align: center;
`;
function MainContent(props) {
  return (
    <main>
      <DatePicker />
      <day>Today: </day>
      <PhotoOTD />
    </main>
  );
}
export default MainContent;
