import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";


class Test extends React.Component{

    constructor(props){
        super(props);
        this.state={
            tests:""
        }
    }
// getTest(){
//   axios.get(`http://localhost:6033/api/test`);
// }

async componentDidMount(){
    await axios.get(`http://localhost:6033/api/test`).then(p=>{
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

export default withRouter(Test);