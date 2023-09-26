import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav0'>
          <nav className="navbar navbar-expand-lg w-100 nav1" >
                <div className="container-fluid">
                    <Link to={"/"} className='link'>
                        <div className="a1">Logo</div></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-ul">
                        <Link to={"/"} className='link'><li className="a1" aria-current="page">
                        Inicio
                        </li></Link>
                        <Link to={"/productos"} className='link'>
                        <li className="a1">
                        Productos
                        </li></Link>
                        <Link to={"/servicios"} className='link'>
                        <li className="a1">
                        Servicios
                        </li></Link>
                        <Link to={"/empresa"} className='link'>
                        <li className="a1">
                        Empresa
                        </li></Link>
                    </ul>
                    </div>
                </div>
            </nav>  
        </div>
    );
};

export default NavBar;