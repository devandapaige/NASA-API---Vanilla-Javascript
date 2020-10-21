import React from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
//https://api.nasa.gov/planetary/apod?api_key=dL6iTE6RXGcbhm5tAH4POoh8Fo9THk7w14gSLet5
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App;
