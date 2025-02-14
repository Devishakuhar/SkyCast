import {useState} from 'react'



function TempMsgBox({userName, textColor }) {
  let styles = {color : textColor};

  let[count, setCount] = useState(0);

  let incCount =() =>{
    setCount(count + 1);
  }
  return (
    <div><h2>msgBox</h2>
    <h1 style = {styles}> Hello, {userName} </h1>
    <h3>Count = {count}</h3>
    <button onClick={incCount}>Click</button>
    </div>
  );
}

export default TempMsgBox