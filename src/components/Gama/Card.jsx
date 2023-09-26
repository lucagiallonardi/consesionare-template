import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div>
           <div className="row row-cols-1 row-cols-md-3 g-4 item-card">
            <div className="col cardCol">
                <div className="card">
                    <img src={props.src1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.cardName1}</h5>
                    <a href="/" className="btn btn-primary">+Info</a>
                    </div>
                </div>
                 </div>


                 <div className="col cardCol">
                <div className="card">
                    <img src={props.src2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.cardName2}</h5>
                    <a href="/" className="btn btn-primary">+Info</a>
                    </div>
                </div>
                 </div>


                 <div className="col cardCol">
                <div className="card">
                    <img src={props.src3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.cardName3}</h5>
                    <a href="/" className="btn btn-primary">+Info</a>
                    </div>
                </div>
                 </div>


                 <div className="col cardCol">
                <div className="card">
                    <img src={props.src4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.cardName4}</h5>
                    <a href="/" className="btn btn-primary">+Info</a>
                    </div>
                </div>
                 </div>
            </div>             
        </div>
    );
};

export default Card;