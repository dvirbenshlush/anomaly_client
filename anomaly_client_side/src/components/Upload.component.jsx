import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const FileUpload=(props)=> {

    const [file, setFile] = React.useState("");
    const [dataFromServer, setDataFromServer] = useState("");


    function handleUpload(event) {
    setFile(event.target.files[0]);



}



useEffect(()=>{
  let url= `http://localhost:6033/api/add2/1`;
  axios.post(url).then((data) => {
    setDataFromServer(data.data);
    console.log(data.data);
    // console.log(dataFromServer);
  });
  // console.log(dataFromServer)    
  // let urlGet= `http://localhost:6033/api/ret/text`;
  // axios.get(urlGet)
  // console.log(t.data)
},[])

  return (
    <div id="upload-box">
      <p>Please type the full path for your local CSV file.</p>
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      {file && <ImageThumb image={file} />}
      {dataFromServer}
    </div>


  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};


export default withRouter (FileUpload);