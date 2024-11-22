const Cart = ({ carrito, comprarAhora, eliminarProducto }) => (
    <div className="card">
        <div className="card-header">
            <h3>Carrito</h3>
        </div>
        <div className="card-body">
            {carrito.map((producto, index) => (
                <div key={index}>
                    <h6>{producto.nombre}</h6>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Subtotal: {producto.cantidad * producto.precioUnitario}€</p>
                    <hr />
                </div>
            ))}
            <p><b>Total: {carrito.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0)}€</b></p>
            
            <div class="card-footer">
            
                <button class="btn btn-success" onClick={comprarAhora} id="comprarAhora">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </button>


                <button class="btn btn-danger" onClick={eliminarProducto} id="eliminarProducto">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>

        </div>
    </div>
);

export default Cart;