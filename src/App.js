import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './formulario';
import Header from './header';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Formulario></Formulario>
        <Footer></Footer>   
      </header>
    </div>
  );
}

export default App;
