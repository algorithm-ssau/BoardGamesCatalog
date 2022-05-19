import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

function App() {

  const [appState, setAppState] = useState(
    {
      kekw: null,
    }
  )
  
  useEffect(() => {
    const apiUrl = 'http://localhost:5500/';
    axios.get(apiUrl).then((resp) => {
      console.log('images/' + appState.kekw);
      setAppState({
        kekw: resp.data
      });
    });
  }, [setAppState]);

 
  return (
    <div className="app">
    {
      appState.kekw
    }
    <img src={process.env.PUBLIC_URL +  '/' + appState.kekw}/>
    <p>really?</p>
    </div>
  );
}

export default App;
