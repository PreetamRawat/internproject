import React from 'react'

import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';


function App() {
  

  return (
    <>
      <Navbar /> 
    
      <section style={{height:'30vh',backgroundColor:'grey'}}></section>
      <br/>
      <div style={{textAlign:'center'}}>
        <p>lorum ipsum dolor</p>
        <h3>Products</h3>
      </div>
      <br/>
      <Products />
      
      <br/>
      <div style={{textAlign:'center'}}>
        <p>lorum ipsum dolor</p>
        <h3>Services</h3>
      </div>
      <br/>
      
      <Services />
    
    </>
  );
}

export default App;
