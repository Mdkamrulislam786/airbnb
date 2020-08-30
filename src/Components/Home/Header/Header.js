import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import airbnbLogo from "../../../img/airbnb.png";

//Matreial iCons
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={airbnbLogo} alt="airbnb" />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
