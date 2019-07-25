import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import { AppNavigator } from '../../config/route';
import MenuBar from '../MenuBar/MenuBar'

function App() {
  return (
    <div className="App">
      <MenuBar/>
      {/* <AppNavigator /> */}
    </div>
  );
}

export default App;