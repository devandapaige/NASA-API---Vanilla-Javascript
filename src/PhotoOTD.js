import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const ImgPhotoOTD = styled.img`
  width: 80%;
`;
const PhotoTitle = styled.h4`
  color: #5d7fb9;
`;
const Copyright = styled.p`
  padding: 0 10%;
`;
const PhotoInfo = styled.p`
  padding: 0 12%;
`;
function PhotoOfTheDay() {
  let [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dL6iTE6RXGcbhm5tAH4POoh8Fo9THk7w14gSLet5"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.error));
  }, []);
  console.log(data);
  return (
    <>
      <ImgPhotoOTD src={data.hdurl} alt={data.title}></ImgPhotoOTD>
      <PhotoTitle>{data.title}</PhotoTitle>
      <Copyright>Photo Copyright: {data.copyright}</Copyright>
      <PhotoInfo>{data.explanation}</PhotoInfo>
    </>
  );
}
export default PhotoOfTheDay;
