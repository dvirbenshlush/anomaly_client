import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'


const FileUpload=(props)=> {
    const [dataFromServer,setDataFromServer] = useState("")
    const [file, setFile] = useState("");

    
 const Div = styled.div`
 height: 600px;
 border: 1px solid rgb(216, 224, 224);
 background-color: rgb(247, 242, 241);
 border-radius: 10px;
 margin: 10px 220px 2px 200px;
 padding: 110px 0px 0px 180px;
`;

const P = styled.p`        
margin: 60px 20px 35px 1px;
`;  

const Input = styled.input`        
margin: '000px 0px 0px 0px',
`;


    function onFileChangeHandler(e) {
      const formData = new FormData();
      formData.append('file', file);
      if(file!=""){
      fetch('http://localhost:6033/api/add2/upload/str', {
          method: 'post',
          body: formData
      }).then(function(res){
        res.text().then(res=>{
          setDataFromServer(res)
        })
      });
      localStorage.setItem("status File","changed")
    }
  };

useEffect(()=>{
        onFileChangeHandler()
},[file])

  return (
    <Div>
      <Input type="file" onChange={e=>{setFile(e.target.files[0])}} />
      <P>Filename: {file.name}</P>
      <P>File type: {file.type}</P>
      <P>{dataFromServer}</P>
    </Div>
  );
}

/**
 * Component to display thumbnail of image.
 */


export default withRouter (FileUpload);