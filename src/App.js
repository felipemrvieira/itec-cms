import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Submenu from './components/submenu/Submenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Agência Alagoas" description="Governo do Estado de Alagoas" />
        <Menu />
        <Submenu />
        <div className="App-header">
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
        </div>
      </div>
    );
  }
}

export default App;
