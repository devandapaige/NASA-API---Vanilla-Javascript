import React, { useState } from "react";
import PhotoOTD from "./PhotoOTD";
import styled from "styled-components";
const DateOptionDiv = styled.div``;
const DatePick = styled.input``;
function DatePicker(props) {
  const [validDate, setValidDate] = useState(true);
  const firstDate = `06-01-1995`;
  return (
    <DateOptionDiv>
      <DatePick
        type="date"
        selected={date}
        onChange={(date) => {
          if (date < new Date() && date > firstDate) {
            changeHandler(date);
            setValidDate(true);
          } else {
            setValidDate(false);
            alert(`Please choose a date between 6/1/1995 and today`);
          }
        }}
      />
    </DateOptionDiv>
  );
}
export default DatePicker;
