import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Mainfile from './mainfile'
import Home from './home.jsx'
import Example from './mainexample'


const Mainrouter = () => {

  const Classrouter = React.lazy(() => {
    return import("../classcompo/classrouter")
  })
 

  return (
      <>
        
          <Routes>
             <Route path='/' element={<Mainfile/>}>
                  <Route path='home' element={<Home/>}/>
                  <Route path='example/*' element={<Example/>}>
                         <Route path='classcom/*' element={<Suspense fallback={<h1>loading...</h1>}><Classrouter/> </Suspense>}/>
                                               
                          
                  </Route>                 
             </Route>
          </Routes> 
    </>
  )
}

export default Mainrouter
