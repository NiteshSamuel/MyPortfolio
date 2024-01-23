import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {NavigationBar} from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainBody } from './Components/MainBody/MainBody';

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <MainBody/>
    </div>
  );
}




export default App;
