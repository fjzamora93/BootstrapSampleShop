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