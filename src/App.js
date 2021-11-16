import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header.js";
import NewUser from "./Components/NewUser/NewUser.js";
import NewExercise from "./Components/NewExercise/NewExercise.js";
import CheckLog from "./Components/CheckLog/CheckLog.js";
import Blocks from "./Components/Layout/Blocks.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Blocks />
    </React.Fragment>
  );
}

export default App;
