import React, { Component } from "react"
import Slider from "react-slick";
import "./style.css"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-principal">       
        <Slider {...settings}>
          <div class="slider-produtos">
            <div class="content-slider">
              <strong class="titulo-slider">Bola de Futsal <br/> MAX 1000</strong>
              <p class="descricao-slider"> A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela que supera o modelo anterior nos quesitos maciez, precisão, velocidade e controle. A bola ainda possui 14 gomos e vem com superfície texturizada que auxilia na aerodinâmica. Adquira já!</p>
              <span>Ver produtos</span>
            </div>
            <h3><img src={'https://lojaflecha.com.br/wp-content/uploads/2020/09/slider-bola-1.png'} alt="Logo" /></h3>
          </div>
          <div class="slider-produtos">
            <div class="content-slider">
              <strong class="titulo-slider">Bola de Futsal <br/> MAX 1000</strong>
              <p class="descricao-slider"> A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela que supera o modelo anterior nos quesitos maciez, precisão, velocidade e controle. A bola ainda possui 14 gomos e vem com superfície texturizada que auxilia na aerodinâmica. Adquira já!</p>
              <span>Ver produtos</span>
            </div>
            <h3><img src={'https://lojaflecha.com.br/wp-content/uploads/2020/09/slider-bola-1.png'} alt="Logo" /></h3>
          </div>
          <div class="slider-produtos">
            <div class="content-slider">
              <strong class="titulo-slider">Bola de Futsal <br/> MAX 1000</strong>
              <p class="descricao-slider"> A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela que supera o modelo anterior nos quesitos maciez, precisão, velocidade e controle. A bola ainda possui 14 gomos e vem com superfície texturizada que auxilia na aerodinâmica. Adquira já!</p>
              <span>Ver produtos</span>
            </div>
            <h3><img src={'https://lojaflecha.com.br/wp-content/uploads/2020/09/slider-bola-1.png'} alt="Logo" /></h3>
          </div>
          <div class="slider-produtos">
            <div class="content-slider">
              <strong class="titulo-slider">Bola de Futsal <br/> MAX 1000</strong>
              <p class="descricao-slider"> A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela que supera o modelo anterior nos quesitos maciez, precisão, velocidade e controle. A bola ainda possui 14 gomos e vem com superfície texturizada que auxilia na aerodinâmica. Adquira já!</p>
              <span>Ver produtos</span>
            </div>
            <h3><img src={'https://lojaflecha.com.br/wp-content/uploads/2020/09/slider-bola-1.png'} alt="Logo" /></h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}