import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Header01 extends Component{
    render() {
        return (
            <>
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                        <a class="navbar-brand">Navbar</a>
                        <Link class="navbar-brand" to= "example"> Example</Link>
                <form class="d-flex input-group w-auto">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </form>
              </div>
                </nav>
                <Outlet/>
          </>
    )
}
}
export default Header01