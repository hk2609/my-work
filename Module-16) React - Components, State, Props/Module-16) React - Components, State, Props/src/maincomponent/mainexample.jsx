import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Mainexample extends Component {
    render() {
        return (
            <>
                <div className="container d-flex justify-content-around fs-3">

               
                   <Link to = "classcompo">Class Component</Link>
               
                    
                </div>
                <Outlet/>
            </>
        );
    }
}

export default Mainexample;