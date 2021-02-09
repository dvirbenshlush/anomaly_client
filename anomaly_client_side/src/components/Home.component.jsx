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
        </div>
    )
}

export default withRouter (CLI);