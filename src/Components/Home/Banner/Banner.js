import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "../Search/Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          varient="outlined"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch yout imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button varien="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
