import { Component } from "react";
import { Link } from "react-router-dom";

class Child02 extends Component{
    render() {
        return (
            <div className="row  fs-5 ">
            <li>
            <Link to="child03" > Child 03 </Link>
            </li>
            </div>
        )
    }
}
export default Child02