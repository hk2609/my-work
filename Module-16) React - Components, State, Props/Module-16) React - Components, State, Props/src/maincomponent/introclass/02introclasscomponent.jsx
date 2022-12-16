import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Introclasscomponent extends Component {
  render() {
    return (
      <>
        <div className="row offset-5 fs-4">
          <br />
          <li>
            <Link to="constructor">Constructor</Link>
          </li>
          
          <li>
            <Link to="stateclass">State Component</Link>
          </li>
         
          <li>
            <Link to="props0101">Props 0101</Link>
          </li>
          
        </div>
        <Outlet />
      </>
    );
  }
}

export default Introclasscomponent;
