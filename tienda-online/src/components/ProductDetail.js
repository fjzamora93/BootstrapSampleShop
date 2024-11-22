import React, { useState } from 'react';

const ProductDetail = ({ producto, agregarAlCarrito }) => {
    const [cantidad, setCantidad] = useState(1);

    return (
        <div className="card shadow-sm">
            <img src={producto.imgUrl} className="card-img-top" alt="Producto" />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">Precio: {producto.precioUnitario}€</p>
                    <input type="number" value={cantidad} min="1" onChange={(e) => setCantidad(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={() => agregarAlCarrito(producto, cantidad)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;