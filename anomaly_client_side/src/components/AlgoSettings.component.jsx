import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";

const AlgorSettings= (props)=>{
const [parameter,setParameter]= useState(0.9);
function changeHandler(e) {
    setParameter(e.target.value);
};
function clickHandler(e) {
    props.addToList(parameter);
    };

const style = ({
    button:{
        width:'220px',
        height:'60px',
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
</div>
);
}

export default withRouter(AlgorSettings);