import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {withRouter} from "react-router-dom";
import axios from 'axios';


const Analyze_Results= (props)=>{
const [result,setResult]= useState("");



 useEffect(()=>{
    let url= `http://localhost:6033/api/add3/analyze`;
    axios.get(url).then(data=>{
        setResult(data.data)
    })    
    return result;
 },[result])

 
    

const Div = styled.div`
    height: 600px;
    border: 1px solid rgb(216, 224, 224);
    background-color: rgb(247, 242, 241);
    border-radius: 10px;
    margin: 10px 220px 2px 200px;
    padding: 0px 0px 0px 180px;
`;

const P = styled.p`        
margin: 10px 20px 35px 200px;
`;

const Span = styled.span`        
margin: 10px 20px 35px 100px;
`;

const H1 = styled.h1`
margin: 50px 2px 35px 200px;
`;


return (
<Div >
    <H1>analyze result</H1>
    <Span>{result.split('\n').map((res,i)=><P key={i}>{res}</P>)} </Span>
</Div>
);
}

export default withRouter(Analyze_Results);