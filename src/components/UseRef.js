import React, { useState, useRef } from 'react';

const UseRefComponent = () => {
    const [items, setItems] = useState([]);
    const inputRef = useRef(null);
    const onClickHandler = () => {
        // focus on input
        inputRef.current.focus();
        const result = [];
        result.push(inputRef.current.value);
        setItems(result);
        inputRef.current.value = '';
        
    };
  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder="Add task..." ref={inputRef} />
      <button onClick={onClickHandler}>Add</button>
        <div>
          <ul>
            <li>{!items ? items.map(item => {return item}): items}</li>
          </ul>
        </div>
    </div>
  ); 
};

export default UseRefComponent;
