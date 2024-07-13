import React, { useMemo, useState } from 'react'
import SkillComp from './SkillComp';

const App = () => {
   const [todos,setTodos]=useState([]);
   const [skill,setSkill]=useState("")
   const [allSkill,setAllSkill]=useState([]);
   function handleAddtodo(){
    setTodos([...todos,[]]);
   }
   const expensive=useMemo(()=>{
    let res=0;
    for(let i=0;i<=1000000000;i++){
        res+=i;
    }
   return res},[]);
   function AddSkill(){
    console.log("we are inside add skill")
    console.log(skill);
   setAllSkill([...allSkill,skill]);
  
   }
   console.log(allSkill)
   
  
  return (
    <div>
    <h1>React.useMemo</h1>
    <h1>My todos</h1>
    {
        todos.map((item,i)=>{
           return <p>New Todos</p>
        })

    }
    <button onClick={handleAddtodo}>Add todo</button>
    <hr style={{width:"100%"}} ></hr>
    <h1>Expensive Calculation</h1>
    {expensive}
    <hr style={{width:"100%"}}></hr>
    <hr style={{width:"100%"}}></hr>
    <h1>React.memo</h1>
    <input placeholder='Add Skills' value={skill} onChange={(e)=>setSkill(e.target.value)}/>

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


