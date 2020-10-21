import React from "react";
import "./App.css";
import PhotoOTD from "./PhotoOTD";
const mainBody = document.createElement("div");
mainBody.style = "width: 80%;";
function MainContent() {
  return (
    <mainBody>
      <PhotoOTD />
    </mainBody>
  );
}
export default MainContent;
