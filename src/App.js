import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState("");
  const [theme, setTheme] = useState('light');

  const switchTheme = (event) => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#333';
      document.title = 'TextUtils - Home (Dark Mode)';
      showAlert("Switched to Dark Theme");
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
      document.title = 'TextUtils - Home (Light Mode)';
      showAlert("Switched to Light Theme");
    }
  }

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar changeTheme={switchTheme} theme={theme} />
        <div style={{ minHeight: '60px' }}>
          <Alert alertMessage={alert} />
        </div>
        <Switch>
          <Route exact path="/about">
            <About theme={theme} />
          </Route>
          <Route exact path="/">
            <TextForm alertFunc={showAlert} theme={theme} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
