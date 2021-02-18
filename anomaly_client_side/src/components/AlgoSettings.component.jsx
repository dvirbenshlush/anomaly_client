import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const AlgorSettings= (props)=>{
const [parameter,setParameter]= useState(0.9);
function changeHandler(e) {
    setParameter(e.target.value);
};

useEffect(()=>{
    let url= `http://localhost:6033/api/add2/2`;
    axios.post(url)    
 })

 function clickHandler(e) {
    //props.addToList(parameter);
            let url= `http://localhost:6033/api/add2/${parameter}`;
            axios.post(url)
    };

    
const style = ({
    button:{
        width:'70px',
        height:'20px',
        display:'flex'
    },
    input:{
        width:'60px',
        height:'30px', 
    }
})

return (
<div>
    <p>The current correlation threshold is {parameter} </p>
    <br/>
    <p>Type a new threshold or just press enter to exit without changing</p>
    <input onChange={changeHandler} style={style.input}/>
    {/* <button onClick={clickHandler} style={style.button}/> */}
</div>
);
}

export default withRouter(AlgorSettings);