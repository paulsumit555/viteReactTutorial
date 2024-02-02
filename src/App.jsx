import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'


function App(props) {

  let myObj = {
    firstName:"Sumit",
    lastName:"Paul"
  }

  
  let [counter,setCounter] = useState(10)
  function addValue(){  
    if(counter < 20){
      setCounter(counter+1);
    }
    
  }

  function decrease(){ 
    if(counter > 0){setCounter(counter-1);} 
    
  }

  return (
    <>
   
   <h3>Counter : {counter} </h3> 
   <button onClick={()=>setCounter(counter+1)}> Increase</button> <button onClick={decrease}>  Decrease</button>
    <Card userName="Sumit" btnText="Click Me"/>
    <Card />
    
    </>
  )
}

export default App
