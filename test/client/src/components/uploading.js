import React, { useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default function Upload() {
  const [content, setContent] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: ""
  })

  const onChange = e => {
    setContent(e.target.files[0]);
  };
  const onSubmit = e => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("img", content); 

    const config = { headers: {'content-type': 'multipart/form-data'}}

    axios
      .post("/upload", formData, config)
      .then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
        alert("The file is successfully uploaded");
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {uploadedImg ? (
          <>
            <img src={uploadedImg.filePath} alt="" />
            <h3>{uploadedImg.fileName}</h3>
          </>
        ) : (
          ""
        )}
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  )

}