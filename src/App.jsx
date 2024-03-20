
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(10)

  const addValue = () => {
    if (counter < 25) {
      setCounter ( counter+1);

    }
    else {
      alert("Cannot exceed maximum value of 30");

    }
  }

  const removeValue = () => {
    if ( counter > 0) {
      setCounter ( counter- 1);

    }
    else
    alert("Cannot exceed minimum value of 0");

  }

  return (
    <>
      <div>
        <h1> Hii i am Aditya</h1>
        <h2> Value is : {counter}</h2>

        <button onClick={addValue}> Add value </button>
        <button onClick={removeValue}> Remove value </button>
      </div>
    </>
  )
}

export default App
