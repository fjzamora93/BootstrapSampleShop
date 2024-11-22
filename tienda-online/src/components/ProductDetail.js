import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ProductDetail = ({ producto, agregarAlCarrito, showAllProducts }) => {
    const [cantidad, setCantidad] = useState(1);
    const navigate = useNavigate();

    const handleCantidadChange = (e) => {
        const nuevaCantidad = parseInt(e.target.value, 10); // Convertir a número
        if (!isNaN(nuevaCantidad) && nuevaCantidad > 0) {
            setCantidad(nuevaCantidad); // Solo actualiza si es un número positivo
        }
    };


    const handleBackClick = () => {
        showAllProducts(); // Llama a la función para mostrar todos los productos
        navigate('/'); // Redirige a la ruta raíz
    };

    return (
        <div>
            <button type="button" class="btn btn-primary" onClick= {handleBackClick} >
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
       
        <div className="card shadow-sm">
            <img 
                src={producto.imgUrl || '/path/to/default-image.jpg'} // Usar una imagen por defecto si no existe
                className="card-img-top" 
                alt={producto.nombre || 'Producto'} 
            />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">Precio: {producto.precioUnitario}€</p>
                    <input 
                        type="number" 
                        value={cantidad} 
                        min="1" 
                        onChange={handleCantidadChange} 
                    />
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={() => agregarAlCarrito(producto, cantidad)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
        </div>
    );
};

export default ProductDetail;
