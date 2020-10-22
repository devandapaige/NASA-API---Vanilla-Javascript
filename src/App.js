import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import styled from "styled-components";
styled.body`
  margin: 0;
  background-color: black;
  color: white;
`;
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
