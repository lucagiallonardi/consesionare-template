import React from 'react';
import Card from './Card';
import './Gama.css'

const Gama = () => {
    return (
        <div className='backg'>
          <div className='gama-txt'>
          <h3>Nuestra Gama</h3>
        </div>
            <div id="carouselExample" className="carousel slide gama-carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Card
      src1="https://centraljeep.divit.com.ar/wp-content/uploads/2021/12/3008-gt-line-hdi-jelly-blue-celebes-255x151.png"
      cardName1="3008"
      src2="https://centraljeep.divit.com.ar/wp-content/uploads/2021/12/2008-allure-jelly-rouge-noir-255x151.png"
      cardName2="2008"
      src3="https://centraljeep.divit.com.ar/wp-content/uploads/2021/12/partner-patagonica-jelly-gris-aluminium-255x151.png"
      cardName3="PARTNER"
      src4="https://centraljeep.divit.com.ar/wp-content/uploads/2021/12/5008-allure-jelly-metallisee-vernis-gris-artense-255x151.png"
      cardName4="5008"/>
    </div>
    <div className="carousel-item">
      <Card
      src1="https://centraljeep.divit.com.ar/wp-content/uploads/2023/04/partner_confort_nueva-255x151.png"
      cardName1="PARTNER CONFORT"
      src2="https://centraljeep.divit.com.ar/wp-content/uploads/2021/03/expert-blanco-255x151.png"
      cardName2="EXPERT"
      src3="https://centraljeep.divit.com.ar/wp-content/uploads/2021/12/partner-patagonica-jelly-gris-aluminium-255x151.png"
      cardName3="PARTNER"
      src4="https://centraljeep.divit.com.ar/wp-content/uploads/2021/03/boxer-blanco-255x151.png"
      cardName4="BOXER"/>
    </div>
    <div className="carousel-item">
      <Card
      src1="https://centraljeep.divit.com.ar/wp-content/uploads/2022/11/BlueQuasar-255x151.png"
      cardName1="208 ROADTRIP"
      src2="https://centraljeep.divit.com.ar/wp-content/uploads/2022/11/3008-gt-azul-255x151.png"
      cardName2="3008 HYBRID4"
      src3="https://centraljeep.divit.com.ar/wp-content/uploads/2021/03/208-gris-aluminium-255x151.png"
      cardName3="208"
      src4="https://centraljeep.divit.com.ar/wp-content/uploads/2021/03/boxer-blanco-255x151.png"
      cardName4="BOXER"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Gama;