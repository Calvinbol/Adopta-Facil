import React from 'react';
import { Link } from 'react-router-dom';
import './Mascotas.css'

const Mascotas = () => {
    return(
        <div className="mascotas-container">
            <h1>Mascotas en adopción</h1>
            <div className="mascotas-links">
                <div className="mascota-card">
                    <img src="../../public/perros.png" alt="Perros" />
                    <Link to="/perros" className="mascota-link">Perros</Link>
                </div>
                <div className="mascota-card">
                    <img src="../../public/gatos.png" alt="Gatos" />
                    <Link to="/gatos" className="mascota-link">Ver Gatos</Link> 
                </div>
            </div>
            <button className="adopt-button">Ver todos</button>
        </div>
    );
};

export default Mascotas;