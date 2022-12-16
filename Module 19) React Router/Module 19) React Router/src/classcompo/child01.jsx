import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Child01 extends Component{
    render() {
        return (
            <div className="row offset-2 fs-5 ">
          <li>
                <Link to="child02" >Child 02</Link>
                    <Outlet />
                    </li>
            </div>
        )
    }
}
export default Child01