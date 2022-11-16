//import logo from './logo.svg';
import react, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light"); // whther dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === "dark"){  
    setMode("light")
    document.body.style.backgroundColor = 'white';  
   }
    else{
      setMode("dark")
      document.body.style.backgroundColor = '#343a40';
    }
  }

  return (

    <>
      <Navbar title ='TextUtils' mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3" >
          <TextForm heading="Enter Text to Analyze"mode={mode} />
          {/* <About/> */}
      </div>
      
    </>
  
  );
}

export default App;
