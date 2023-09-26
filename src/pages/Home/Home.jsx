import React from 'react';
import Cover from "../../components/Cover/Cover";
import NavBar from "../../components/NavBar/NavBar";
import Gama from "../../components/Gama/Gama";
import Plan from "../../components/Plan/Plan";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
        <NavBar/>
        <Cover/>
        <Gama/>
        <Plan/>
        <Map/>
        <Footer/>
        </div>
    );
};

export default Home;