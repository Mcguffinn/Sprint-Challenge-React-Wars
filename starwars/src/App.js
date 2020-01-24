import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Appcontent from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [req, reqState] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios 
    .get('https://swapi.co/api/people')

    .then(response =>{
      console.log(response);
      reqState(response.data.results);
    })

    .catch(error=>{
      console.log("there was an error retreiving the data: ", error);
    });
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {req.map((items)=>(
          <Appcontent
            key = {items}
            name = {items.name}
            gender = {items.gender}
            birthyear = {items.birthyear}
          />
        ))}
    </div>
  );
}

export default App;
