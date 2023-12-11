import React from 'react'
import sunset from './Assets/sunset.jpg'
import "./App.css"
function App() {
  

  return (
    <>
      <h1>React App</h1>
      <img src={sunset} alt='loading....' style={{width:"100%"}} />
    </>
  );
}

export default App;
