import React, { useEffect } from "react";
import { useState, useCallback, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [splCharAllowed, setSplCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (splCharAllowed) str += "! @#$%^&*-_+= [ ]{}~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, splCharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password )
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, splCharAllowed,passwordGenerator])
  

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg py-8 px-4 my-8 text-orange-500 bg-gray-700">
          <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          placeholder="Generate Password" 
          value={password} 
          className="outline-none w-full py-1 px-3"
          readOnly
          ref={passwordRef}
          />
          <button
          className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6} 
            max={100} 
            value={length} 
            className="cursor-pointer" 
            onChange={(e) => {setLength(e.target.value )}}
            name="" 
            id="" />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            
            onChange={() => {setNumberAllowed((prev)=>!prev )}}
            name="" 
            id="numberInput" />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={splCharAllowed}
            
            onChange={() => {setSplCharAllowed((prev)=>!prev )}}
            name="" 
            id="characterInput" />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
