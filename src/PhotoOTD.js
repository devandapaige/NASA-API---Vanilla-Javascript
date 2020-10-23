import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
const ImgPhotoOTD = styled.img`
  width: 80%;
`;
const PhotoTitle = styled.h3`
  color: #96b6ea;
  letter-spacing: 0.1em;
`;
const Copyright = styled.p`
  padding: 0 10%;
`;
const PhotoInfo = styled.p`
  padding: 0 12%;
`;
function PhotoOfTheDay(props) {
  let [data, setData] = useState([]);
  const dateAPI = "&date=" + moment(props.date).format("YYYY-MM-DD");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=dL6iTE6RXGcbhm5tAH4POoh8Fo9THk7w14gSLet5${dateAPI}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.error));
    return (
      <>
        <ImgPhotoOTD src={data.hdurl} alt={data.title}></ImgPhotoOTD>
        <PhotoTitle>{data.title}</PhotoTitle>
        <Copyright>{data.copyright}</Copyright>
        <PhotoInfo>{data.explanation}</PhotoInfo>
      </>
    );
  }, [props.date]);
}
export default PhotoOfTheDay;
