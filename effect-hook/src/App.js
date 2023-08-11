import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  }, [count]);

  function changeHandler(event) {
    setName(event.target.value);
  } 

  return (
   <div>
    <p>You clicked {count} times</p>

    <button onClick={() => setCount(count + 1)}>Click Me!</button>
    <form>
    <label>
      Name: 
      <input
      type='text'
      name='name'
      value={name}
      onChange={changeHandler}
      />
    </label>
   </form>
   
   </div>

  
  );
}

export default App;
