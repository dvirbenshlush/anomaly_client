import React, { useEffect, useMemo, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const Display_Results= (props)=>{
const [result,setResult]= useState("");




 useEffect(()=>{
    let url= `http://localhost:6033/api/add3/display`;
    axios.get(url).then(data=>{
        console.log(data.data)
        setResult(data.data)
    })    
 },[])

 
    
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
    },
    table:{
        border: '1px solid #D8E0E0;',
        borderRadius:'10px 10px 10px 10px ',
        backgroundColor:'white',
        width:'60%',
        margin: "60px 100px"
    },
      
    tr:{
        border: '1px solid #D8E0E0',
        borderRadius:'10px 10px 10px 10px ',
        margin: "0 400px"
      },
      
    td:{
        border: '1px solid black',
        borderRadius:'6px 6px 6px 6px ',
        textAlign:'center'
      }
})

return (
<div style={style.div}>
    <table style={style.table}>{result.split("\n").map(res=><tr style={style.tr}>{res.split(" ").map(line=><td style={style.td}>{line}</td>)}</tr>)}</table>
    <br/>
</div>
);
}

export default withRouter(Display_Results);