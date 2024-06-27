import React from 'react';
import './styles/App.css';
import Footer from './page-components/footer';
import Header from "./page-components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Footer/>
    </div>
  );
}

export default App;
