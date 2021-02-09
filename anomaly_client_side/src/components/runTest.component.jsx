import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import Test from "./components/Test.component.jsx"

class runTest extends React.Component{
constructor(){
    this.state={
        tests:[]
    }
}

componentDidMount(){
    Test.getTest().then(p=>{
        this.setState({tests:p.data})
    });
}

render(){
    return(
        <div>
            <h1>{this.state.tests}</h1>
        </div>
    )
}
}

export default withRouter(runTest)