import './App.css';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About';

function App() {
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }

  return (
    <>
      <Navbar/>
      <div style={{minHeight:'60px'}}>
        <Alert alertMessage={alert} />
      </div>
      <TextForm alertFunc={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
