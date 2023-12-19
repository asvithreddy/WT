import React from "react";
function Demo()
{
    const colleges=[{id:1,name:'pesu'},{id:2,name:'rvce'},{id:3,name:'bms'}]
    return(
        <div>
            <h1>Colleges are</h1>
        
                {colleges.map((colleges)=><div><p>{{colleges.id,colleges.name}}</p></div>)}
            
        </div>
    )
}
import React from "react"
function College(props)
{
    return<li>My college name is:{props.name}</li>
}
function Demo()
{
    //let colleges=["pes","rvce","bms","bmsit"]
    const colleges=[{id:1,name:"pesu"},{id:2,name:"rvce"},{id:3,name:"bms"},{id:4,name:"bmsit"}]//using key id
    return(
        <div>
            <h1>Colleges are</h1>
            <ul>
                {colleges.map((colleges)=><College key={colleges.id}name={colleges.name}/>)}
            </ul>
        </div>
    )
}
export default Demo;
/*function Demo()
{
    const numbers=[1,2,3,4]
    return(
        <ul>
        {numbers.map((numbers)=>(numbers*numbers))}</ul>)

    
}*/
