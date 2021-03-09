import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const FileUpload=(props)=> {
    const [dataFromServer,setDataFromServer] = useState("")
    const [file, setFile] = useState("");

    const style = ({
      div:{
          border: '1px solid #D8E0E0',
          backgroundColor:'#F7F2F1',
          borderRadius:'10px 10px 10px 10px ',
          margin: '10px 220px 2px 200px',
          height: '600px'
          // padding: '00px 00px 00px 180px'
      },
      p:{
        margin: '60px 200px 00px 110px',

      },
      input:{
        margin: '60px 200px 0px 110px',

      }

  })
  


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
    <div style={style.div}>
      <input style={style.input} type="file" onChange={e=>{setFile(e.target.files[0])}} />
      <p style={style.p}>Filename: {file.name}</p>
      <p style={style.p}>File type: {file.type}</p>
      <p>{dataFromServer}</p>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */


export default withRouter (FileUpload);