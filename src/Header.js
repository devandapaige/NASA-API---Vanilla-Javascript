//Nasa logo:https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg
import React from "react";
function Header() {
  return (
    <header className="header">
      <h1 className="siteName">NASA Photo of the Day</h1>
      <img
        className="logo"
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="NASA logo"
      />
    </header>
  );
}
export default Header;
