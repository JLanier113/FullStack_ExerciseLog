import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Exercise Log</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
