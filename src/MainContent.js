import React, { useState } from "react";
import styled from "styled-components";
import PhotoOTD from "./PhotoOTD";
import DatePicker from "./DatePicker";
const Main = styled.div`
  text-align: center;
`;
const Day = styled.h3`
  text-align: center;
`;
function MainContent() {
  const [date, setDate] = useState(new Date());
  return (
    <Main>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        maxDate={new Date()}
      />
      <Day>{date}</Day>
      <PhotoOTD date={date} />
    </Main>
  );
}
export default MainContent;
