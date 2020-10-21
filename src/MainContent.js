import React from "react";
import "./App.css";
import PhotoOTD from "./PhotoOTD";
import DatePicker from "./DatePicker";
function MainContent(props) {
  return (
    <div className="main">
      <DatePicker />
      <h2 className="day">Today: </h2>
      <PhotoOTD />
    </div>
  );
}
export default MainContent;
