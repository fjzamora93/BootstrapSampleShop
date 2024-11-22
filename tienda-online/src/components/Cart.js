const Cart = ({ carrito, comprarAhora }) => (
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
            <button className="btn btn-success" onClick={comprarAhora}>Comprar</button>
        </div>
    </div>
);

export default Cart;