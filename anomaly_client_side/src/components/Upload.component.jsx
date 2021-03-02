import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const FileUpload=(props)=> {
  let fileReader;

    const [index, setIndex] = useState(0);
    const [file, setFile] = useState(fileReader);
    const [dataFromServer, setDataFromServer] = useState("");


    const handleFileRead = async(e) => {
      let url= `http://localhost:6033/api/add2/upload`;
      let context = fileReader.result;
      // console.log(context)
      await axios.post(url,{
        headers:{
        'Content-Type':'multipart/form-data'
        }},context).then(console.log(context));
      // console.log(file);
      // … do something with the 'content' …
    };
    

    const handleFileChosen = async(file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }


   async function senFile(){
    let url= `http://localhost:6033/api/add2/upload`;
    // window.alert(file)

      
      // let jk=await s.data;
    }
  


  // useEffect(()=>{ 
  //   // if(file.readyState!=0)
  //   // senFile();
  //   },[file])

  return (
    <div id="upload-box">
      
      <p>Please type the full path for your local CSV file.</p>
      <input type="file"  accept='.txt' onChange={e=>{ handleFileChosen(e.target.files[0]); setFile(e.target.files[0])}}  />
      {/* <p>Filename: {file.name}</p> */}
      {dataFromServer}
    </div>

  );
}



export default withRouter (FileUpload);