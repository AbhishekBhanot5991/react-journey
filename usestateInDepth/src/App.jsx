import { useState } from "react";
import "./App.css";

const App = () => {
  // const [inputValue,setInputValue]= useState("Abhishek")
  // const handleChange = (e) =>{
  //   const newValue =  e.target.value;

  //   setInputValue(newValue)
  // }
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);
  return (
    <div>
      <h1>{count}</h1>
      {/* <input type="text" onChange={handleChange} />
      {inputValue} */}
      <button
        onClick={() => {
          setCount(count + 1);
          setText(!text);
        }}
      >
        Click Me
      </button>
      {text && <div>This is Text</div>}
    </div>
  );
};

export default App;
