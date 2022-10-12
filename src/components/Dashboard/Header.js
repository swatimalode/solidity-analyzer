import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Solidity Analyzer</h1>
      <div className={classes.div_css}>
        <h2>Documentations</h2>
        <h2>login</h2>
      </div>
    </header>
  );
};

export default Header;
