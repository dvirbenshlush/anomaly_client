import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const Analyze_Results= (props)=>{
const [result,setResult]= useState(1);



 useEffect(()=>{
    let url= `http://localhost:6033/api/add3/analyze`;
    axios.get(url).then(data=>{
        console.log(data.data)
        setResult(data.data)
    })    
    console.log(result)
    return result;
},[result])

 
    
const style = ({
    button:{
        width:'70px',
        height:'20px',
        display:'flex'
    },  
    div:{
        border: '1px solid #D8E0E0',
        backgroundColor:'#F7F2F1',
        borderRadius:'10px 10px 10px 10px ',
        margin: '10px 220px 2px 200px',
        padding: '00px 00px 00px 180px'
    },
  input:{
        width:'60px',
        height:'30px', 
    }
})

return (
<div style={style.div}>
    <p>The current testest threshold is {result} </p>
    <br/>
    <p>Type a new threshold or just press enter to exit without changing</p>
    {/* <button onClick={clickHandler} style={style.button}/> */}
</div>
);
}

export default withRouter(Analyze_Results);