import React, { useState } from 'react';
import './App.css'
function App() {

  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    setValue(value + buttonValue);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = new Function(`return ${value}`)();
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">

        <form action="" className='form'>
          <div className='display'>
            <input type="text"  value={value} onKeyDown={(e) => {
                if (e.key.match(/[0-9]|[\+\-\*\/\.]|Enter/)) {
                  if (e.key === 'Enter') {
                    handleEqual();
                    e.preventDefault(); 
                  } else {
                    handleButtonClick(e.key);
                  }
                } else {
                  e.preventDefault(); // Prevent non-numeric keys from being entered
                }
              }} />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={()=>handleButtonClick('.')} />
            <input type="button" value="/" onClick={()=>handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={()=>handleButtonClick('7')}/>
            <input type="button" value="8" onClick={()=>handleButtonClick('8')}/>
            <input type="button" value="9" onClick={()=>handleButtonClick('9')}/>
            <input type="button" value="+" onClick={()=>handleButtonClick('+')}/>
          </div>
          <div>
            <input type="button" value="4" onClick={()=>handleButtonClick('4')} />
            <input type="button" value="5" onClick={()=>handleButtonClick('5')} />
            <input type="button" value="6" onClick={()=>handleButtonClick('6')}/>
            <input type="button" value="-" onClick={()=>handleButtonClick('-')}/>
          </div>
          <div>
            <input type="button" value="1" onClick={()=>handleButtonClick('1')} />
            <input type="button" value="2" onClick={()=>handleButtonClick('2')} />
            <input type="button" value="3" onClick={()=>handleButtonClick('3')}/>
            <input type="button" value="*" onClick={()=>handleButtonClick('*')}/>
          </div>
          <div>
            <input type="button" value="00" onClick={()=>handleButtonClick('00')}/>
            <input type="button" value="0" onClick={()=>handleButtonClick('0')}/>
            <input type="button" value="=" style={{width:'130px'}} className='equal' onClick={()=>handleEqual('=')} />
          </div>
        </form>
        </div>
      </div>
    </>
  )
};

export default App
