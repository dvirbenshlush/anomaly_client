import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const FileUpload=(props)=> {
    const [dataFromServer,setDataFromServer] = useState("")
    const [file, setFile] = useState("");




    function onFileChangeHandler(e) {
      const formData = new FormData();
      formData.append('file', file);
      if(file!="")
      fetch('http://localhost:6033/api/add2/upload/str', {
          method: 'post',
          body: formData
      }).then(function(res){
        res.text().then(res=>{
          setDataFromServer(res)
        })
      });
  };

useEffect(()=>{
        onFileChangeHandler()
},[file])

  return (
    <div id="upload-box">
      <input type="file" onChange={e=>{setFile(e.target.files[0])}} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>{dataFromServer}</p>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */


export default withRouter (FileUpload);