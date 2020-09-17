import React from 'react';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Slider from './components/Slider/';
import Main from './pages/main';
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => (
    <div className="App">
      <Header />
      <Slider />
      <Main />
      <Footer />      
    </div>
);
 

export default App;
