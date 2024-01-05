import React from 'react'
import Image from './components/Image';
import "./App.css"
function App() {

  const MyButton=()=>{
     return <button className='myButton'> Click On Me</button>
  } 

return (
    <>
       <h2>Welcome To React App</h2>
        <MyButton />
    </>
  );
}

export default App;
