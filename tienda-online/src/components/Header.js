// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ showAllProducts }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        showAllProducts(); // Llama a la función para mostrar todos los productos
        navigate('/'); // Redirige a la ruta raíz
    };

    return (
        <header class="bg-light border-bottom shadow-sm py-3 mb-4" onClick={handleLogoClick}>
            <div class="container text-center">
                <h1 class="display-4 text-dark fw-bold">Im-personal Store</h1>
                <p class="lead text-muted">Productos impersonales para gente sin personalidad</p>
            </div>
        </header>
    );
}

export default Header;
