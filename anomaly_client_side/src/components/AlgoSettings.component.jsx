import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const AlgorSettings= (props)=>{
const [parameter,setParameter]= useState(0.9);
const [dataFromServer,setDataFromServer]= useState('');

function changeHandler(e) {
    setParameter(e.target.value);
    if(e.target.value>1 || e.target.value<0){
    window.alert("wrong value");
    setParameter(0.9);
    }
};

useEffect(()=>{
    let url= `http://localhost:6033/api/add3/algorithm`;
    axios.get(url,{params:{parameter:parameter}}).then(data=>{
        console.log(data.data)
        setDataFromServer(data.data)
    })    
    console.log(parameter)
    // return parameter;
 },[parameter])



    
const style = ({
    button:{
        width:'70px',
        height:'20px',
        display:'flex'
    },
    div:{
        height: '600px',
        border: '1px solid #D8E0E0',
        backgroundColor:'#F7F2F1',
        borderRadius:'10px 10px 10px 10px ',
        margin: '10px 220px 2px 200px',
        padding: '00px 00px 00px 180px'
    },
    input:{
        margin: '40px 0px 0px 0px',
    },
      p:{
        margin: '40px 0px 0px 0px',
    }
})

return (
<div style={style.div}>
    <p style={style.p}>The current correlation threshold is {parameter} </p>
    <br/>
    <p style={style.p}>Type a new threshold or just press enter to exit without changing</p>
    <input style={style.input} onChange={changeHandler}/>
    <p>{dataFromServer}</p>
</div>
);
}

export default withRouter(AlgorSettings);