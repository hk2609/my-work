import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Constructor01 from './03constructor';
import Introclasscomponent from './02introclasscomponent';
import Statecomponent from './04 state component ';
import Props0101 from './08 props 01 ';

class Introclassrouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Introclasscomponent />} >
                        <Route path='constructor' element={<Constructor01/> } />
                        <Route path='stateclass' element={<Statecomponent/> } />                 
                        <Route path='props0101' element={<Props0101/>} />
                    </Route>
                </Routes>
                
            </>
        );
    }
}

export default Introclassrouter;