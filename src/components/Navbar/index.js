import React from "react";
//import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="col-3">Clicky Game</p>
      <p className="col-3 guess-correctly">x</p>
      <p className="col-3">Current Score: 0</p>
      <p className="col-3">Top Score: 0</p>
    </nav>
  );
}

export default Navbar;
