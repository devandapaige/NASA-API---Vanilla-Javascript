import React from "react";
import Axios from "axios";
function PhotoOfTheDay() {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=dL6iTE6RXGcbhm5tAH4POoh8Fo9THk7w14gSLet5&date=2020-10-20"
    )
    .then(() => {
      const imgSrc = axios.data.hdurl;
      const title = axios.data.title;
      const copyright = axios.data;
      console.log(`Data Retrieved`);
    })
    .catch(() => {});
  return (
    <div>
      <img src={imgSrc} alt={title} className="imageOTD" />
      <title />
      <copyright />
    </div>
  );
}
export default PhotoOfTheDay;
