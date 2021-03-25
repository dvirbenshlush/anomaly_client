import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'


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

 const Div = styled.div`
 height: 600px;
 border: 1px solid rgb(216, 224, 224);
 background-color: rgb(247, 242, 241);
 border-radius: 10px;
 margin: 10px 220px 2px 200px;
 padding: 0px 0px 0px 180px;
`;

const P = styled.p`        
margin: 60px 20px 35px 1px;
`;  

const Input = styled.input`        
margin: '5000px 0px 0px 0px',
`;
    

return (
<Div>
    <P>The current correlation threshold is {parameter} </P>
    <br/>
    <P>Type a new threshold or just press enter to exit without changing</P>
    <Input onChange={changeHandler}/>
    {/* <P>{dataFromServer}</P> */}
</Div>
);
}

export default withRouter(AlgorSettings);