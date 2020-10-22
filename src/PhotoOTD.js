import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const imgPhotoOTD = styled.img`
  width: 80%;
`;
const photoTitle = styled.h4`
  color: #5d7fb9;
`;
const copyright = styled.p`
  padding: 0 10%;
`;
const photoInfo = styled.p`
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
      <imgPhotoOTD src={data.hdurl} alt={data.title}></imgPhotoOTD>
      <photoTitle>{data.title}</photoTitle>
      <copyright>Photo Copyright: {data.copyright}</copyright>
      <photoInfo>{data.explanation}</photoInfo>
    </>
  );
}
export default PhotoOfTheDay;
