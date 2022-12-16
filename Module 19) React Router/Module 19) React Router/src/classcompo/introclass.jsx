import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Introclass extends Component {
  render() {
    return (
      <>
        <br />
        <div className="row offset-2 fs-5 ">
          <li>
            <Link to="child01"> Child 01</Link>
          </li>
          
          
        </div>

        <Outlet></Outlet>
      </>
    );
  }
}
