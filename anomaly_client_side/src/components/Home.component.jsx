import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";

const CLI = (props) =>{
    
    const onClickHandler =(path)=>{
        props.history.push('/'+path);
    }
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
    return(
        <div>
            <h1>welcome</h1>
            {/* <input type="click" style={style.input}/> */}
            <button style={style.button} type="submit" onClick={()=>onClickHandler("upload")}>upload a time series csv file</button>
            <br/>
            <button style={style.button} type="submit" onClick={()=>onClickHandler("algorithm")}>algorithm settings</button>
            <br/>
            <button style={style.button} type="submit" onClick={()=>onClickHandler("detect")}>detect anomalies</button>
            <br/>
            <button style={style.button} type="submit" onClick={()=>onClickHandler("display")}>display results</button>
            <br/>
            <button style={style.button} type="submit" onClick={()=>onClickHandler("analyze")}>upload anomalies and analyze resultse</button>
            <br/>
            <button style={style.button} type="submit" onClick={()=>onClickHandler("exit")}>exit</button>
        </div>
    )
}

export default withRouter (CLI);