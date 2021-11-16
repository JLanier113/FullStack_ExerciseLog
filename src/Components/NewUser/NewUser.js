import React from "react";
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <React.Fragment>
      <form action="/api/users" method="post" className={classes.form}>
        <h3>Create a New User</h3>
        <input
          id="uname"
          type="text"
          name="username"
          placeholder="username"
          className={classes.input}
        />
        <input type="submit" value="Submit" className={classes.submit} />
      </form>
    </React.Fragment>
  );
};

export default NewUser;
