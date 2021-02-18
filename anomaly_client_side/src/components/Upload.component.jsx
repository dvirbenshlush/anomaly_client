import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';


const FileUpload=(props)=> {

    const [file, setFile] = React.useState("");


    function handleUpload(event) {
    setFile(event.target.files[0]);



}



useEffect(()=>{
  let url= `http://localhost:6033/api/add2/1`;
  axios.post(url)    
})

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
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