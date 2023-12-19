import {useState} from "react";
import React from 'react';
function Demo()
{   
    const[count,setCount]=useState(0)// initialising count as 0 and if we click on buttomn, setcount is used to change the value of the count
    return(
        <div>
            <p>You click{count} times</p>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )

}
//export default Demo;

function Demo1()
{
    const[color,setColor]=useState("red")
    return(
        <div>
            <h1>My color is :{color}</h1>
            <button onClick={()=>setColor("blue")}>Blue</button>
            <button onClick={()=>setColor("purple")}>purple</button>
            <button onClick={()=>setColor("green")}>green</button>

        </div>
    )
}
export default Demo1;


