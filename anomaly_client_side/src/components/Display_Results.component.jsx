import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'


const Display_Results= (props)=>{
const [result,setResult]= useState("test");



const Tbody = styled.tbody`
border:  1px solid #D8E0E0;
backgroundColor: #F7F2F1;
borderRadius:10px 10px 10px 10px ;
margin: 10px 220px 2px 200px';
padding: 00px 00px 00px 180px;
`;


const Table = styled.table`
border: 1px solid #D8E0E0;
borderRadius:10px 10px 10px 10px ;
backgroundColor: white ;
width:60%;
margin: 90px 290px;
`;


const Tr = styled.tr`
border: 1px solid #D8E0E0;
borderRadius:10px 10px 10px 10px ;
margin: 0 400px;
`;

const Td = styled.td`
border: 1px solid black;
borderRadius:6px 6px 6px 6px ;
textAlign:center;
`;

const Th = styled.th`
border: 1px solid black;
borderRadius:6px 6px 6px 6px ;
textAlign:center;
`;




useMemo(()=>{
    let url= `http://localhost:6033/api/add3/display`;
    axios.get(url).then(data=>{
        console.log(data.data)
        setResult(data.data)
    })    
    console.log(result)
    return result;
 },[result])

 
    

return (
<div >
    <Table><thead><Tr><Th>timeStep</Th><Th>description</Th></Tr></thead>{result.split("\n").map((res,i)=><Tbody key={i}><Tr key={i}>{res.split(" ").map((line,i)=><Td key={i}>{line}</Td>)}</Tr></Tbody>)}</Table>
    <br/>
</div>
);
}

export default withRouter(Display_Results);