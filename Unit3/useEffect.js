import React from 'react';
import {useState,useEffect} from 'react';
//useEffect(<function>,<dependency>)// performs side effects, inside the component and after 
// the render dependency=[props or state] or [], fetching data,DOM,timeouts

function Demo()
{
    const[count,setCount]=useState(0);
    const[cal,setCal]=useState(0);
    useEffect(()=>
    {
        setCal(()=>count*4)
        /* setTimeout(()=>
        {
            setCount((count)=>count+1)
        },2000)*/

    //},[])// cal is dependent on count(dependency).  if empty array is not passed then it will render continously
    },[count])
    return(
        <div>
            <h1>The count of rendering is {count}</h1>
            <button onClick={()=>setCount((c)=>c+1)}>+</button>
            <p>setcal is {cal}</p>
        </div>
    )
}
