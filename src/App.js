import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Submenu from './components/submenu/Submenu';

import central from './images/banner-central-de-servicos.png';
import portfolio from './images/banner-portifolio.png';
import Banner from './components/banner/Banner';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Agência Alagoas" description="Governo do Estado de Alagoas" />
        <Menu />
        <Submenu />
        <main>
          <section className="container">
            <div className="row">
              <div className="col-lg-6">
                <Banner src={central} alt="Central de Serviços" />
                <Banner src={portfolio} alt="Portfolio" />
              </div>
              <div className="col-lg-6">
                <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
              </div>
            </div>
          </section>
        </main>

         
      </div>
    );
  }
}

export default App;
