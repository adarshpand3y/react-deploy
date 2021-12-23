import './App.css';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About';

function App() {
  const [alert, setAlert] = useState("");
  const [theme, setTheme] = useState('light');

  const switchTheme = (event) => {
    if(theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#333';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }

  return (
    <>
      <Navbar changeTheme={switchTheme} theme={theme}/>
      <div style={{minHeight:'60px'}}>
        <Alert alertMessage={alert} />
      </div>
      <TextForm alertFunc={showAlert} theme={theme}/>
      {/* <About theme={theme}/> */}
    </>
  );
}

export default App;
