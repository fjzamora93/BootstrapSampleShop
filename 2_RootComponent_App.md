# ¿Qué es App.js?
En una aplicación React, App.js es el componente principal o “root component” (componente raíz) que actúa como el contenedor principal de la aplicación. Es común que todo lo que se muestra en la interfaz esté, directa o indirectamente, bajo el control de este componente.

# Objetivo de App.js
El propósito de App.js es proporcionar la estructura inicial de la aplicación y gestionar el estado general que necesitan otros componentes para funcionar. App.js actúa como el “cerebro” de la aplicación, definiendo funciones y datos que otros componentes pueden necesitar y organizando la estructura básica de la página. En un proyecto más grande, el objetivo de App.js puede variar, pero siempre será el punto de partida principal donde se configuran los elementos centrales de la aplicación.


## Contenido y organización de App.js
1. Importaciones:
- Bibliotecas esenciales: Importa módulos básicos como React y useState (un hook de React que permite agregar y manejar el estado dentro de componentes funcionales).
- Componentes locales: Importa otros componentes que se muestran en la interfaz, como Header, ProductList, ProductDetail, Cart, Confirmation, y Footer en este caso. Esto permite que App.js pueda estructurar la interfaz al integrar componentes específicos.

## Declaración de App:

App es una función (en aplicaciones modernas se usan function components, que son componentes funcionales).

Dentro de esta función, definimos el estado principal de la aplicación usando useState para manejar datos como:
- productos: una lista de productos que se muestra en ProductList.
- carrito: que representa los productos que el usuario ha agregado al carrito.
- productoSeleccionado: para guardar el producto que el usuario selecciona y mostrar detalles de este en ProductDetail.
- mostrarConfirmacion: un valor booleano para controlar si el usuario ve la página de confirmación de compra (Confirmation) o sigue navegando.
- 
```javascript
function App() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    // ...otras funciones y contenido
}
```


## Funciones internas

App.js también puede incluir funciones internas que son necesarias para manejar la lógica de la aplicación. En este caso, por ejemplo:
- agregarAlCarrito: maneja la lógica para agregar productos al carrito.
- comprarAhora: muestra la página de confirmación.
- seguirComprando: oculta la confirmación y vacía el carrito.
Estas funciones permiten controlar cómo interactúan los componentes entre sí y cómo responde la aplicación a las acciones del usuario.

```javascript
const agregarAlCarrito = (producto, cantidad) => {
    // Lógica para agregar productos al carrito o actualizar cantidad
};

const comprarAhora = () => {
    setMostrarConfirmacion(true);
};

const seguirComprando = () => {
    setMostrarConfirmacion(false);
    setCarrito([]);
};

```
Estructura de return:

El return en App.js define la estructura de la interfaz que se va a renderizar en la pantalla. En este caso, se compone de varios componentes que construyen la interfaz de la tienda:

<Header />: se encarga del encabezado de la aplicación y posiblemente contiene un botón para mostrar todos los productos.
Condicionalmente muestra ProductList o ProductDetail, dependiendo de si un producto ha sido seleccionado.

<Cart />: muestra el carrito de compras.

<Confirmation />: se muestra si el usuario ha decidido comprar.

<Footer />: se encarga de la sección inferior de la página.

```javascript
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
```