import React, { useState } from 'react'
import List from './List';
import Input from './Input';


export default function App() {

    const [todos,setTodo] = useState([]);
    const [editdata,seteditData] = useState({
        index:"",
    value:""
})
    const addtodo=(value)=>{
        setTodo([...todos,value])

    }

const deletetodo=(value)=>{
  let filter =todos.filter((val)=> val!==value)  
  setTodo([...filter])
}
const edittodo=(value,index) =>{
    seteditData({index,value})
}
    

const updatetodo=(index,value) =>{
   todos[index]=value;
    setTodo([...todos])
    seteditData({
        index:'',
        value:""
    })
}
     

    
  return (
    <>
    <Input addtodo={addtodo} editdata={editdata} updatetodo={updatetodo}/>

    <List todos={todos} deletetodo={deletetodo} edittodo={edittodo}/>
    </>
  )
}
