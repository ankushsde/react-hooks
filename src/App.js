import { useState } from "react";
import "./App.css";


const initialState = false


function App() {

  const [toggleText, setToggleText] = useState(initialState)

  function onToggle(){
    setToggleText(!toggleText)
  }


  return (
    <div className="App">
      <div>
       <h1>useState Hook</h1>
       <div>
        {
          toggleText ?
          <p>Hello World</p>
          : ''
        }
        <button onClick={onToggle}>Toggle here</button>
       </div>
       </div>
       <div className="Basic">
        <input type='text' name="name" placeholder="Enter Name" ></input>
        <select name="city">
          <option value={''} id="">
            Select City
          </option>
          <option value={"Bengaluru"} id="bengaluru">
            Bengaluru
          </option>

        </select>
       </div>
    </div>
  );
}

export default App;
