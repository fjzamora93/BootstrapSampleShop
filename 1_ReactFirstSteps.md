
# Paso 1. Comienza instalando react:

```bash
npx create-react-app tienda-online
```

2. Luego, entra a la carpeta de tu proyecto y procede a la instalación de bootstrap.

```bash
cd tienda-online
npm install bootstrap
```

Luego, en src/index.js, importa Bootstrap:

```javascript
import 'bootstrap/dist/css/bootstrap.css';
```

## Estructura del proyecto

A partir de aquí, deberemos seguir una estructura en el proyecto parecida a esto:

```
tienda_online
├── node_modules                # Módulos y dependencias de Node.js instalados
├── public                      # Archivos públicos accesibles, como index.html
│   ├── favicon.ico
│   ├── index.html              # Archivo HTML principal
│   ├── manifest.json
│   └── robots.txt
├── src                         # Código fuente del proyecto
│   ├── assets                  # Recursos adicionales como imágenes y fuentes
│   │   └── images              # Carpeta para imágenes (por ejemplo, productos)
│   │       └── ejemplo.jpg
│   ├── components              # Carpeta para todos los componentes de React
│   │   ├── Header.js           # Componente de encabezado
│   │   ├── ProductList.js      # Componente de lista de productos
│   │   ├── ProductDetail.js    # Componente de detalle del producto
│   │   ├── Cart.js             # Componente del carrito de compras
│   │   ├── Confirmation.js     # Componente de confirmación de compra
│   │   └── Footer.js           # Componente del pie de página
│   ├── App.js                  # Componente principal de la aplicación
│   ├── index.js                # Punto de entrada del proyecto
│   ├── App.css                 # Estilos principales de la aplicación
│   └── index.css               # Estilos globales (importados en index.js)
├── .gitignore                  # Archivos y carpetas que Git debe ignorar
├── package.json                # Configuración del proyecto y dependencias
└── README.md                   # Información general del proyecto
```


# Paso 2: Crear Componentes de React
Crea las carpetas para los componentes: En src/, crea una carpeta components y dentro, crea subcarpetas para los siguientes componentes:

Header.js
ProductList.js
ProductDetail.js
Cart.js
Confirmation.js
Footer.js
Convierte cada sección del HTML en un componente de React.

# Paso 3: Configurar el Estado y la Lógica
Vamos a configurar el estado principal en el componente App.js, y pasaremos el estado y las funciones necesarias como props a los componentes.

## App.js: Estructura Principal y Estado Global

En src/App.js, configura el estado de la aplicación que controla los productos en el carrito, el producto seleccionado, y si se muestra la confirmación de compra:

```javascript
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';

const App = () => {
    const [productos, setProductos] = useState([
        // Define tu lista de productos aquí, con propiedades como nombre, precioUnitario, imgUrl, etc.
    ]);
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
};

export default App;
```

2. Header.js
Define el componente del encabezado. Esto también puede manejar el clic para "mostrar todos los productos".

```javascript
const Header = ({ showAllProducts }) => (
    <header className="bg-light border-bottom shadow-sm py-3 mb-4" onClick={showAllProducts}>
        <div className="container text-center">
            <h1 className="display-4 text-dark fw-bold">Im-personal Store</h1>
            <p className="lead text-muted">Productos impersonales para gente sin personalidad</p>
        </div>
    </header>
);

export default Header;
```

3. ProductList.js
```javascript
const ProductList = ({ productos, setProductoSeleccionado }) => (
    <div className="row">
        {productos.map((producto, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-4 mb-2">
                <div className="card">
                    <img src={producto.imgUrl} className="card-img-top" alt="Producto" onClick={() => setProductoSeleccionado(producto)} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: {producto.precioUnitario}€</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ProductList;
```


4. ProductDetail.js
```javascript
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
```

5. Cart.js
```javascript

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
```

6. Confirmation.js
```javascript
const Confirmation = ({ seguirComprando }) => (
    <div className="container text-center py-5">
        <h3 className="display-4 text-success mb-4">Gracias por tu compra</h3>
        <p className="lead">Tu pedido ha sido procesado con éxito. Esperamos verte de nuevo pronto.</p>
        <button className="btn btn-primary btn-lg mt-3" onClick={seguirComprando}>Seguir comprando</button>
    </div>
);

export default Confirmation;
```

7. Footer.js
```javascript	
const Footer = () => (
    <footer className="bg-dark text-center text-lg-start mt-5 text-white">
        <div className="container p-4">
            <p>Sobre Nosotros...</p>
        </div>
    </footer>
);

export default Footer;
```

## Ejecutar proyecto
```bash
npm start
```