import React from "react";
import axios from "axios";

const photo = document.createElement("img");
const titleDiv = document.createElement("div");
photo.alt = "photo of the day";
titleDiv.textContent = "Sample Text";

function PhotoOfTheDay() {
  return { photo }, { titleDiv };
}
export default PhotoOfTheDay;
