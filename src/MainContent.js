import React from "react";
import styled from "styled-components";
import PhotoOTD from "./PhotoOTD";
import DatePicker from "./DatePicker";
const Main = styled.div`
  text-align: center;
`;
const Day = styled.h3`
  text-align: center;
`;
function MainContent(props) {
  return (
    <Main>
      <DatePicker />
      <Day>Today: </Day>
      <PhotoOTD />
    </Main>
  );
}
export default MainContent;
