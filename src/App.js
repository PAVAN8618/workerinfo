import logo from './logo.svg';
import './App.css';
//import { Button } from 'bootstrap
import { Button, Grid } from '@material-ui/core'
import Navbar from './component/Navbar';
import Cart from './component/MyCard';
import React, {useEffect } from "react";
import { getMatches } from "./component/api/Api";
import MyCard from './component/MyCard';
import {useState} from "react";

function App() {

  const[matches, setMatches] = useState([]);

         useEffect(() => {
          getMatches()
          .then((data) => {
            setMatches(data.matches)
            console.log(matches)
          })
        .catch((error) => alert("could not load data"));
      },
      [] );


  return (
<div>
    <div className="App" >
       <Navbar/>
      
      
    <h1>Welcome to my live Score </h1> 
  <Grid container>
    <Grid sm="2"></Grid>
    <Grid sm="8">
                    
    {matches.map((match) => (
      <MyCard  match={match}/>
      
      ))
}

    </Grid>
  </Grid>
  
  

      
    </div>
    </div>
  );
}

export default App;
