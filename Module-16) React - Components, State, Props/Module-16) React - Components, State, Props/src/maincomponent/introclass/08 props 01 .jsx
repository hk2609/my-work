
import React from 'react'
import Cardcomponent from './cardcomponent.jsx'
   
export default function Props0101() {
  return (
      
    <>
      <div className="container">

      <div className="row h-100 w-100 ">
        <div className="col-3">
           <Cardcomponent img1 = 'https://mdbootstrap.com/img/new/standard/nature/184.webp' title = "Test 1"></Cardcomponent>
        </div>
        <div className="col-3"  >
          <Cardcomponent  img1={`${process.env.PUBLIC_URL}/publicimage/img18.png` }  title="Test 2"></Cardcomponent>
        
        </div>
        
    </div>
    
      </div>
    </>
  );
}
