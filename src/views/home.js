import React from 'react';
import Navbar from './../components/navbar';
import Encabezado from '../components/tarjeta';
import Footer from '../components/footer';
import Cards from '../components/cuerpo';

const Home = (props) => {
    return (
        <>
            <Navbar />
            <Encabezado />
            <div className="container">

                <div className="row">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;
