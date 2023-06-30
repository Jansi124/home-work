import React, {useState, useEffect } from "react";
const App=() => { 
  
  const [name, setName]= useState(""); 
  const[list, setList]=useState([]);
  useEffect(() =>{ 
    console.log(list); 

  },[list]);
  const handlechange=(event)=>{
    setName(event.target.value);
  console.log(name);
};
const handleAdd=(event)=>{
  event.preventDefault(); 
  setList({...list, name}); 

};
  return (
    <form className="form" onSubmit={handleAdd}>
    <label>Name:</label>
    <input placeholder="Your Name" value={name} onChange={handlechange}/>
    <button>Add</button>
    </form>
    );  
  };
  export default App;
