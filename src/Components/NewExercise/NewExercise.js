import React from "react";
import classes from "./NewExercise.module.css";

const NewExercise = (props) => {
  return (
    <React.Fragment>
      <form
        id="exercise-form"
        method="post"
        action="/api/users/:_id/exercises"
        className={classes.form}
      >
        <h3>Add Exercises</h3>
        <input
          id="uid"
          type="text"
          name=":_id"
          placeholder=":_id"
          className={classes.input}
        />
        <input
          id="desc"
          type="text"
          name="description"
          placeholder="description*"
          className={classes.input}
        />
        <input
          id="dur"
          type="text"
          name="duration"
          placeholder="duration* (mins.)"
          className={classes.input}
        />
        <input
          id="date"
          type="text"
          name="date"
          placeholder="date (yyyy-mm-dd)"
          className={classes.input}
        />
        <input type="submit" value="Submit" className={classes.submit} />
      </form>
    </React.Fragment>
  );
};

export default NewExercise;
