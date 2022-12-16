import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mainexample = () => {
  return (
    <>
       <h2 className='text-center'>Lazy loading & Outlet</h2>
         
        <div className="row text-center fs-4 bg-warning ">
              
              <div className="col-md-4">
                   <Link to ="classcom">child component</Link>
              </div>
              
        </div>
           
                       
        <Outlet></Outlet>
    </>
  )
}

export default Mainexample
