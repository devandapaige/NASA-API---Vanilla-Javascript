import React from "react";
import "./App.css";
import PhotoOTD from "./PhotoOTD";

function MainContent(props) {
  return (
    <div className="main">
      <h2 className="day">Today: </h2>
      <PhotoOTD />
    </div>
  );
}
export default MainContent;
