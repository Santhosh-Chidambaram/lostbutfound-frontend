import React from 'react';
import './App.css';
import {Topnav} from './Topnav'
import {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import  M from 'materialize-css/dist/js/materialize.min.js'
// import {Logincard} from './Logincard'
import {Registercard} from './Registercard'
function App() {
  useEffect(()=>{
    M.AutoInit();
  });
  return (
    <>
    <header>
      <Topnav/>
    </header>
    <section className="background">
      <Registercard/>
      
      
    </section>
    
    </>
  );
}

export default App;
