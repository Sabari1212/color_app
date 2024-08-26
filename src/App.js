
import './App.css';

import Square from './components/Square';
import Input from './components/Input';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [color,setColor]=useState("")
  const [tcolor,setTcolor]=useState("true")
  
  return (
    <div className="App">
      <Header/>
      <Square color={color} tcolor={tcolor}/>
      <Input color={color} setColor={setColor} tcolor={tcolor} setTcolor={setTcolor}/>
      <Footer/>
      
      
     
    </div>
  );
}

export default App;
