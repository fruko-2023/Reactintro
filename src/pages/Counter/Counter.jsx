import { GiButtonFinger } from "react-icons/gi"
import { useState } from "react"

const Counter=()=>
{
    const nameList=["joseph","lucas","elixir","mundi","mimi"]

    const changeMe=()=>{
        alert("Hi you just clicked me")
    }
const [name,setName]=useState("Fatai")
let randomNUmber=Math.random() * nameList.length
const changeNaMe=()=>{
    setName(nameList[Math.floor(randomNUmber)])
}
const [count,setCount]=useState(0)
const Add=()=>
    {
        setCount(count+1)
    }
const sub=()=>
{
    setCount(count-1)
}
    return(
        <div>
            <center style={{margin:"30px"}}>
            <h1> Counter pages </h1>
            <h2>{count}</h2>
            <button onClick={sub}> - </button>
            <br/>
            <button onClick={Add}> + </button>
             <br/>
             <br/>
             <div>{name}</div>
             <br/>
             <button onClick={changeNaMe}>Change my Name</button>
             <br />
            {/* <button onClick={()=>{
                alert("this is direct")}}>Click Me</button> */}
            </center>
          
        </div>
    )
}
export default Counter