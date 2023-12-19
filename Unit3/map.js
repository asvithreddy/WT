import React from "react";// to run this
// we need to go to app.js and there 
// import React from "react";
// import Class name from "./<Filename>"
// function App
//{
//    return(<Classname/>)
//}
//export default App
function College(props)
{
    return <li>My college name is :{props.name}</li>

}
function Demo()
{
    let colleges=['pesu','rvce','bms']
    return(
        <div>
            <h1>colleges are </h1>
            <ul>
                {colleges.map((colleges)=>
                <College name={colleges}/>)}t
                //the output will be  my college name is and list of colleges in unordered list
            </ul>
        </div>
    )
}


function number(props)
{
    return <li> Square of numbers : {props.number*props.number}</li>
}
function square()
{
    let numbers=[1,2,3]
    return(
        <div>
            <ul>
                {numbers.map((numbers)=>
                <number name={numbers}/>)}
            </ul>
        </div>
    )
}

import React from "react";
function College(props){

    return(
    <div>
    <li>My college name is : {props.name}</li>
    
    </div>
    )

}



function Demo(){
    let colleges=["pesu","BMS","RVCE"]
    let num=[1,2,3,4,5,6,7,8,9]
    return(
        <div>
            <h1>Colleges are </h1>
            <ul>
                {colleges.map((colleges)=><College name={colleges}/>)}
                {num.map((num)=><div><p>{num**3}</p></div>)}
            </ul>
        </div>
    )
}

export default Demo;
