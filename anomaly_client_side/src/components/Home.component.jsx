import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";

const CLI = (props) =>{
    const onClickHandler =(path)=>{
        props.history.push('/'+path);
    }
    const style = ({
        div:{
            border: '1px solid #D8E0E0',
            backgroundColor:'#F7F2F1',
            borderRadius:'10px 10px 10px 10px ',
            margin: '10px 220px 2px 200px',
            padding: '00px 00px 00px 80px',
            height: '600px'
        },
        h1:{
            margin: '60px 200px 500px 110px',
        }
    })
    return(
        <div style={style.div}>
            <h1 style={style.h1}>Welcome to the Anomaly Detection Server.</h1>
        </div>
    )
}

export default withRouter (CLI);