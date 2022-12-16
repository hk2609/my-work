import React, { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header01 from './header';
import Mainexample from './mainexample';

class Mainrouter extends Component {
    render() {

        const Introclassrouter = React.lazy(() => {
            return import("./introclass/01introclassrouter")
        })
        
        return (
            <>
                <Routes>
                    <Route path='/' element={<Header01 />}>
                        <Route path='example' element={<Mainexample />}>
                          <Route path='classcompo/*' element={<Suspense fallback = {<h1>loading.....</h1>}><Introclassrouter/>  </Suspense> }></Route>
                        </Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default Mainrouter;