import { useEffect, useRef } from "react";
import { useState } from "react";

function Form(){
    const name=useRef();
    const table=useRef();
    const Id=useRef();
    const des=useRef();
    const [data,setdata]=useState([]);
    useEffect(()=>{
        console.log(localStorage);
        },[localStorage])
    function save(e){
        e.preventDefault();
        const id=Id.current.value;
        const naming=name.current.value;
        const description=des.current.value;
        const tab=table.current.value;
        const obj={
            id:id,
            name:naming,
            des:description,
            table:tab
        }
      
        setdata([...data,obj]);
        
        const sobj=JSON.stringify(obj);
        localStorage.setItem(id,sobj);

        }
        function Del(id){
            localStorage.removeItem(id);
        }
  
    return(
<>
<form onSubmit={save}>
<label>Id:</label>
    <input type="number" ref={Id}></input>
    <label>Name:</label>
    <input type="text" ref={name}></input>
    <label>Description:</label>
    <input type="text" ref={des}></input>
    <label>Table:</label>
    <select ref={table}>
        <option>Table 1</option>
        <option>Table 2</option>
        <option>Table 3</option>
    </select>
    <button>Submit</button>
</form>
{/* {data.map((item)=>{
    return <li>{item.name}   {item.des} {item.table}</li>
})} */}
<h2>Table 1</h2>

{data.map((item)=>{
if(item.table== "Table 1")
    return <li>{item.name}   {item.des} {item.table} <button onClick={()=>Del(item.id)}>Delete</button></li>
})} 
<h2>Table 2</h2>
{data.map((item)=>{
if(item.table== "Table 2")
    return <li>{item.name}   {item.des} {item.table} <button onClick={()=>Del(item.id)}>Delete</button></li>
})} 
<h2>Table 3</h2>
{data.map((item)=>{
if(item.table== "Table 3")
    return <li>{item.name}   {item.des} {item.table} <button onClick={()=>Del(item.id)}>Delete</button></li>
})} 
</>
    )
}
export default Form;