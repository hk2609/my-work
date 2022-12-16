import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-ui-kit/css/mdb.min.css';
// import Header01 from './maincomponent/header';
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from './maincomponent/mainrouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Mainrouter/>
  </BrowserRouter>
  
);


