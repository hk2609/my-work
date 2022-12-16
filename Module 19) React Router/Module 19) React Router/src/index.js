import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from './component/mainrouter';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <BrowserRouter>
       <Mainrouter></Mainrouter>
    </BrowserRouter>
  </>
);
