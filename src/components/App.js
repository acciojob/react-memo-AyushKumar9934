import React, { useMemo, useState } from 'react'
import SkillComp from './SkillComp';

const App = () => {
   const [todos,setTodos]=useState([]);
   const [skill,setSkill]=useState("")
   const [allSkill,setAllSkill]=useState([]);
   const [count,setCount]=useState(0);
   function handleAddtodo(){
    setTodos([...todos,[]]);
   }
   const expensive=useMemo(()=>{
    let res=0;
    for(let i=0;i<=1000000000;i++){
        res+=i;
    }
   return res},[count]);
   function AddSkill(){
    console.log("we are inside add skill")
    console.log(skill);
   setAllSkill([...allSkill,skill]);
  
   }
   console.log(allSkill)
   
  
  return (
    <div id="main">
    <h1>React.useMemo</h1>
    <h1>My todos</h1>
    {
        todos.map((item,i)=>{
           return <p>new todo</p>
        })

    }
    <button id="add-todo-btn" onClick={handleAddtodo}>Add todo</button>
    <hr style={{width:"100%"}} ></hr>
    <h1>Expensive Calculation</h1>
    <div>Count:{count} <button id="incr-cnt" onClick={()=>{
        setCount(count+1);
    }}>+</button> <div >{expensive}</div></div>
    
    <hr style={{width:"100%"}}></hr>
    <hr style={{width:"100%"}}></hr>
    <h1>React.memo</h1>
    <input id="skill-input" placeholder='Add Skills' value={skill} onChange={(e)=>setSkill(e.target.value)}/>

    <button onClick={AddSkill}>Add Skill</button>
   <ul>{
       allSkill.map((item,i)=>{
    return     <SkillComp key={i} item={item}/>
       
        })
    }</ul> 
    
    </div>
  )
}

export default App


