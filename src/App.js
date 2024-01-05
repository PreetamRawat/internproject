import React from 'react'
import Image from './components/Image';
import "./App.css"
function App() {

  let guest = 0;

  function Cup({guest}){
    // guest = guest+1
    return <>
      <h2>Tea cup for guest #{guest}</h2>
    </>
  }
  
return (
    <>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  );
}

export default App;
