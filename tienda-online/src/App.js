import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importar React Router

// Importación del JSON para los productos
import { useState, useEffect } from 'react';
import ITEMS_LIST from './assets/documents/items.json';

function App() {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    useEffect(() => {
        setProductos(ITEMS_LIST);  // Actualiza el estado con los productos desde el JSON
        if (ITEMS_LIST.length > 0) {
            setProductoSeleccionado(ITEMS_LIST[0]);  // Selecciona el primer producto por defecto
        }
    }, []);

    const agregarAlCarrito = (producto, cantidad) => {
        const nuevoProducto = { ...producto, cantidad };
        setCarrito([...carrito, nuevoProducto]);
        console.log('Producto añadido al carrito:', nuevoProducto);
    };

    const confirmarCompra = () => {
        setMostrarConfirmacion(true);
    };

    const seguirComprando = () => {
        setMostrarConfirmacion(false);
        setCarrito([]);
    };

    const eliminarProducto = () => {
        if (carrito.length > 0) {
            const nuevoCarrito = carrito.slice(0, -1);
            setCarrito(nuevoCarrito);
            console.log('Eliminando producto');
        } else {
            console.log('El carrito está vacío');
        }
    };

    const showAllProducts = () => {
        console.log('Mostrando todos los productos');
        setProductoSeleccionado(null);
    }

    


    return (
        <Router>
            <div>
                <Header showAllProducts={showAllProducts} />

                {!mostrarConfirmacion ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {/* Mostrar la lista de productos o el detalle de uno solo */}
                                <Routes>
                                    <Route 
                                        path="/" 
                                        element={
                                            <ProductList
                                                productos={productos}
                                                setProductoSeleccionado={setProductoSeleccionado}
                                                agregarAlCarrito={agregarAlCarrito}
                                            />
                                        }
                                    />
                                    <Route 
                                        path="/producto/:id" 
                                        element={
                                            <ProductDetail
                                                producto={productoSeleccionado}
                                                agregarAlCarrito={agregarAlCarrito}
                                                showAllProducts = {showAllProducts}
                                       
                                            />
                                        }
                                    />
                                </Routes>
                            </div>
                            <div className="col-md-4">
                                <Cart carrito={carrito} comprarAhora={confirmarCompra} eliminarProducto={eliminarProducto}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Confirmation seguirComprando={seguirComprando} />
                )}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
