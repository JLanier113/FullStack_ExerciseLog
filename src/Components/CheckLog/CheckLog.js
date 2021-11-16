import React from "react";
import classes from "./CheckLog.module.css";

const CheckLog = (props) => {
  return (
    <React.Fragment>
      <form
        id="exercise-log"
        method="get"
        action="/api/users/:_id/logs"
        className={classes.form}
      >
        <h3>Check User Log</h3>
        <input
          id="uid"
          type="text"
          name=":_id"
          placeholder=":_id"
          className={classes.input}
        />
        <input
          id="from"
          type="text"
          name="fromDate"
          placeholder="From Date:"
          className={classes.input}
        />
        <input
          id="to"
          type="text"
          name="toDate"
          placeholder="To Date:"
          className={classes.input}
        />
        <input
          id="limit"
          type="text"
          name="limit"
          placeholder="How many exercises?"
          className={classes.input}
        />
        <input type="submit" value="Submit" className={classes.submit} />
      </form>
    </React.Fragment>
  );
};

export default CheckLog;
