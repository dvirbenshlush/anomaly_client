import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import styled from 'styled-components'

const CLI = (props) =>{

    const Div = styled.div`
    height: 600px;
    border: 1px solid rgb(216, 224, 224);
    background-color: rgb(247, 242, 241);
    border-radius: 10px;
    margin: 10px 220px 2px 200px;
    padding: 0px 0px 0px 180px;
    `;
    
    const H1 = styled.h1`
    margin: 50px 2px 35px 60px;
    `;
    
    return(
        <Div>
            <H1>Welcome to the Anomaly Detection Server.</H1>
        </Div>
    )
}

export default withRouter (CLI);