import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import useUploadFile from './hooks/useUploadFile';

const API_KEY = 'kolotseidenis@gmail.com_3ca171f94542e1471c19008d0d6be9e2fdb516915ec421e3e9b92774881efb3fccb3dd2a';

function App() {
  const [loadFile, url, uploading, failed, error] = useUploadFile();

  const changeFile = (event: any) => {
    const file = event.target.files[0];
    loadFile(file);
  };

  return (
    <div className="App">
      <h1>{error}</h1>
      <input type="file" onChange={changeFile}/>
      {
        uploading? 
        <h1>Loadin...</h1>:
        <a href={url}>Load</a>
      }
    </div>
  );
}

export default App;
