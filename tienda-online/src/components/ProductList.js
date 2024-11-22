// src/components/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ productos, setProductoSeleccionado, agregarAlCarrito }) => {
    const [cantidad, setCantidad] = useState(1);  // Para controlar la cantidad seleccionada

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);  // Actualiza la cantidad cuando el usuario la cambia
    };

    if (!productos || productos.length === 0) {
        return <div>No hay productos disponibles</div>;  // Muestra un mensaje si no hay productos
    }

    return (
        <div className="row">
            {productos.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                    <div className="card">
                        <Link to={`/producto/${item.id}`} onClick={() => setProductoSeleccionado(item)}>
                            <img src={item.imgUrl} className="card-img-top" alt={`Imagen de ${item.nombre}`}/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">
                                Precio: <span>{item.precioUnitario}</span>€
                            </p>
                            <input
                                type="number"
                                className="form-control form-control-sm mb-2"
                                value={cantidad}
                                min="1"
                                onChange={handleCantidadChange}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    agregarAlCarrito(item, cantidad)
                                }
                            >
                                Añadir
                            </button>
                            <Link
                                to={`/producto/${item.id}`}
                                onClick={() => setProductoSeleccionado(item)}
                            >
                                <button className="btn btn-secondary">
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
