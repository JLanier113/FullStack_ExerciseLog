import React from "react";
import NewUser from "../NewUser/NewUser.js";
import NewExercise from "../NewExercise/NewExercise.js";
import CheckLog from "../CheckLog/CheckLog.js";
import classes from "./Blocks.module.css";

const Blocks = (props) => {
  return (
    <React.Fragment className={classes.blocks}>
      <NewUser />
      <NewExercise />
      <CheckLog />
    </React.Fragment>
  );
};

export default Blocks;
