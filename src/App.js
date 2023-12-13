import React from 'react'
import sunset from './Assets/sunset.jpg'
import "./App.css"
function App() {
  
  const Imagecomp =()=>{
    return(
      <img src={sunset} alt='loading....' style={{width:"100%"}} />
    )
  }

  return (
    <>
      <h1>React App</h1>
      <Imagecomp />
    </>
  );
}

export default App;
