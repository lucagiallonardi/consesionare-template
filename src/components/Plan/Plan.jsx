import React, { useEffect } from 'react';
import "./Plan.css";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Plan = () => {

    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <div className='backg'>
            <div className="card plan backg">
            <div className="row g-0 ">
            <div className="col">
            <img src="https://cdn-images.motor.es/image/m/800w.webp/fotos-noticias/2022/06/ventas-coches-2022-brasil-mayo-202287801-1655549941_1.jpg" className="img-fluid rounded-start plan-img" alt="..." data-aos="fade-right" data-aos-duration="1500"/>
            </div>
            <div className="col col-plan">
            <div className="card-body" data-aos="fade-left" data-aos-duration="1500">
            <h2 className="card-title plan-title">NUESTROS PLANES</h2>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <a href="/" className="btn btn-primary">+Info</a>
            </div>
            </div>
            </div>
            </div>

            <div className="card  plan backg">
            <div className="row g-0">
            <div className="col col-plan">
            <div className="card-body" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="card-title">NUESTROS SERVICIOS   </h2>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <a href="/" className="btn btn-primary">+Info</a>
            </div>
            </div>
            <div className="col">
            <img src="https://fotos.perfil.com/2019/11/01/todos-los-precios-de-0km-y-usados-de-noviembre-800144.jpg" className="img-fluid rounded-start plan-img" alt="..." data-aos="fade-left" data-aos-duration="1500"/>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Plan;