import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';



function App() {
    const [productos, setProductos] = useState([]);

    const [carrito, setCarrito] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const agregarAlCarrito = (producto, cantidad) => {
        // Lógica para agregar el producto al carrito o actualizar cantidad
    };

    const comprarAhora = () => {
        setMostrarConfirmacion(true);
    };

    const seguirComprando = () => {
        setMostrarConfirmacion(false);
        setCarrito([]);
    };

    return (
        <div>
                <Header showAllProducts={() => setProductoSeleccionado(null)} />
                {!mostrarConfirmacion ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {productoSeleccionado ? (
                                    <ProductDetail 
                                        producto={productoSeleccionado} 
                                        agregarAlCarrito={agregarAlCarrito} 
                                    />
                                ) : (
                                    <ProductList 
                                        productos={productos} 
                                        setProductoSeleccionado={setProductoSeleccionado} 
                                    />
                                )}
                            </div>
                            <div className="col-md-4">
                                <Cart carrito={carrito} comprarAhora={comprarAhora} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Confirmation seguirComprando={seguirComprando} />
                )}
                <Footer />
            </div>
    );
    }

export default App;
