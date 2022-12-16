import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Child02 from "./child 02 ";
import Child01 from "./child01";

import Introclass from "./introclass";


export default class Classrouter extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Introclass/>}>
            <Route path="child01" element={<Child01 />} >
               <Route path="child02" element={<Child02/>} ></Route>
            </Route>
          </Route>
        </Routes>
      </>
    );
  }
}
