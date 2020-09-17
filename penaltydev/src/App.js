import React from 'react';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Footer from './components/Slider/';
import Main from './pages/main';
import "./style.css";

const App = () => (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Slider />
    </div>
);
 

export default App;
