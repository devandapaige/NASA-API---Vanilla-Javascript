import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <img className="photoOTD" src={data.hdurl} alt={data.title}></img>
      <h4 className="photoTitle">{data.title}</h4>
      <p className="copyright">Copyright: {data.copyright}</p>
      <p className="photoInfo">{data.explanation}</p>
    </>
  );
}
export default PhotoOfTheDay;
