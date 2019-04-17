import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Submenu from './components/submenu/Submenu';

import central from './images/banner-central-de-servicos.png';
import portfolio from './images/banner-portifolio.png';
import Banner from './components/banner/Banner';
import Iframe from './components/iframe/Iframe';
import Footer from './components/footer/Footer';


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
                <Iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
              </div>
            </div>
          </section>
        </main>
        <Footer 
          title="Agência Alagoas" 
          description="Governo do Estado de Alagoas"
          phone="+55 82 3332-2245"
        />

         
      </div>
    );
  }
}

export default App;
