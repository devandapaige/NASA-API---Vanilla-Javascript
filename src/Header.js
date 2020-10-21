//Nasa logo:https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg
import React from "react";
function Header() {
  return (
    <header>
      <h1 className="headerStretched">NASA Photo of the Day</h1>
      <img
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        className="nasaLogo"
        alt="NASA logo"
      />
    </header>
  );
}
export default Header;