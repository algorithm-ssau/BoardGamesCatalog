import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

function App() {
  //respon = '';

  const [appState, setAppState] = useState(
    {
      kekw: null,
    }
  )
  
  useEffect(() => {
    const apiUrl = 'http://localhost:5500/';
    axios.get(apiUrl).then((resp) => {
      //respon = resp.data;
      console.log(resp.data);
      setAppState({
        kekw: resp.data
      });
    });
  }, [setAppState]);

 
  return (
    <div className="app">
    {
      //respon.data
      appState.kekw
    }
    <p>really?</p>
    </div>
  );
}

export default App;
