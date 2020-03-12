import React, {useState} from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import MainWithFunction from './components/MainWithFunction';


const App = () => {
  // const theme = 'light'; -- change to this
  const themeHook = useState("light");
  return (
    // <ThemeContext.Provider value={theme}>
    <ThemeContext.Provider value={themeHook}>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}

      <div>
        <Header />
        <MainWithFunction />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
